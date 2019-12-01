import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton';

const generateRandom = (min, max, exclude) => {
    // exclude is the value confirmed by the user, the device is not allowed to return the user confirmed value as the random guess for the first time at least.

    // incase we have float number (This is not absolutely required since we replace non digit with '' already)
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    // excludes max value
    if (randomNumber === exclude) {
        return generateRandom(min, max, exclude); // recursion
    } else {
        return randomNumber;
    }
};

const GameScreen = ({ userConfirmedValue, handleGameOver }) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandom(1, 100, userConfirmedValue));
    const [guessRounds, setGuessRounds] = useState(0);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        if (currentGuess === userConfirmedValue) {
            handleGameOver(guessRounds);
        }
    }, [currentGuess, userConfirmedValue, handleGameOver]);

    const nextGuessHandler = direction => {
        if (
            (direction === 'lower' && currentGuess < userConfirmedValue) ||
            (direction === 'greater' && currentGuess > userConfirmedValue)
        ) {
            Alert.alert('Not a good Hint!', 'That is not true', [{ text: 'Sorry!', style: 'cancel' }]);
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess; // sets the current guessed number as the max upper boundary for the generateRandom function
        } else {
            currentLow.current = currentGuess; // sets the current guessed number as the min lower boundary for the generateRandom function
        }
        const nextNumber = generateRandom(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setGuessRounds(currentGuessRounds => currentGuessRounds + 1);
    };

    return (
        <View style={styles.screen}>
            <Text>Your Phone Guessed</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton handlePress={nextGuessHandler.bind(this, 'lower')}>LOWER</MainButton>
                <MainButton handlePress={() => nextGuessHandler('greater')}>GREATER</MainButton>
            </Card>
        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 400,
        maxWidth: '90%',
        marginVertical: 20,
    },
});
