import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Alert, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import BodyText from '../components/BodyText';

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

const renderListItem = (value, numOfRounds) => (
    <View key={value} style={styles.listItem}>
        <BodyText>#{numOfRounds}</BodyText>
        <BodyText>{value}</BodyText>
    </View>
);

const GameScreen = ({ userConfirmedValue, handleGameOver }) => {
    const initialGuess = generateRandom(1, 100, userConfirmedValue);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    // const [guessRounds, setGuessRounds] = useState(0);
    const [pastGuesses, setPastGuesses] = useState([initialGuess]);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        if (currentGuess === userConfirmedValue) {
            handleGameOver(pastGuesses.length);
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
            currentLow.current = currentGuess + 1; // sets the current guessed number as the min lower boundary for the generateRandom function
        }
        const nextNumber = generateRandom(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        // setGuessRounds(currentGuessRounds => currentGuessRounds + 1);
        setPastGuesses(currentPastGuesses => [nextNumber, ...currentPastGuesses]);
    };

    return (
        <View style={styles.screen}>
            <Text>Your Phone Guessed</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton handlePress={nextGuessHandler.bind(this, 'lower')}>
                    <Ionicons name="md-remove" size={24} color="white" />
                </MainButton>
                <MainButton handlePress={() => nextGuessHandler('greater')}>
                    <Ionicons name="md-add" size={24} color="white" />
                </MainButton>
            </Card>
            <View style={styles.listContainer}>
                <ScrollView contentContainerStyle={styles.list}>
                    {pastGuesses.map((pastGuess, index) => renderListItem(pastGuess, pastGuesses.length - index))}
                </ScrollView>
            </View>
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
    listContainer: {
        flex: 1,
        width: '80%',
    },
    list: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    listItem: {
        borderColor: '#777',
        borderWidth: 1,
        borderRadius: 25,
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
    },
});
