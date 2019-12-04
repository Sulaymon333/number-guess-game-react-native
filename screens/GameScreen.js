import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Alert, ScrollView, FlatList, Dimensions, StyleSheet } from 'react-native';
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

// for ScrollView
/*
    const renderListItem = (value, numOfRounds) => (
    <View key={value} style={styles.listItem}>
        <BodyText>#{numOfRounds}</BodyText>
        <BodyText>{value}</BodyText>
    </View>
);
*/

// for FlatList
const renderListItem = (listLength, itemData) => (
    <View style={styles.listItem}>
        <BodyText>#{listLength - itemData.index}</BodyText>
        <BodyText>{itemData.item}</BodyText>
    </View>
);

const GameScreen = ({ userConfirmedValue, handleGameOver }) => {
    const initialGuess = generateRandom(1, 100, userConfirmedValue);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    // const [guessRounds, setGuessRounds] = useState(0);
    const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width);
    const [deviceHeight, setDeviceHeight] = useState(Dimensions.get('window').height);

    useEffect(() => {
        const updateLayout = () => {
            setDeviceWidth(Dimensions.get('window').width);
            setDeviceHeight(Dimensions.get('window').height);
        };
        Dimensions.addEventListener('change', updateLayout);

        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        };
    });

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
        setPastGuesses(currentPastGuesses => [nextNumber.toString(), ...currentPastGuesses]);
    };

    listContainerStyle = styles.listContainer;
    if (deviceWidth < 350) {
        listContainerStyle = styles.listContainerBig;
    }

    if (deviceHeight < 500) {
        return (
            <ScrollView>
                <View style={styles.screen}>
                    <Text>Your Phone Guessed</Text>
                    <Card style={styles.buttonContainerHorizontal}>
                        <MainButton handlePress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="md-remove" size={24} color="white" />
                        </MainButton>
                        <NumberContainer>{currentGuess}</NumberContainer>
                        <MainButton handlePress={() => nextGuessHandler('greater')}>
                            <Ionicons name="md-add" size={24} color="white" />
                        </MainButton>
                    </Card>
                    <View style={listContainerStyle}>
                        <FlatList
                            contentContainerStyle={styles.list}
                            keyExtractor={item => item}
                            data={pastGuesses}
                            renderItem={renderListItem.bind(null, pastGuesses.length)}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }

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
            <View style={listContainerStyle}>
                {/*
                    <ScrollView contentContainerStyle={styles.list}>
                    {pastGuesses.map((pastGuess, index) => renderListItem(pastGuess, pastGuesses.length - index))}
                </ScrollView> 
             */}
                <FlatList
                    contentContainerStyle={styles.list}
                    keyExtractor={item => item}
                    data={pastGuesses}
                    renderItem={renderListItem.bind(null, pastGuesses.length)}
                />
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
        marginVertical: Dimensions.get('window').height > 600 ? 20 : 5,
    },
    buttonContainerHorizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15,
        paddingVertical: 7,
    },
    listContainer: {
        flex: 1,
        width: '80%',
    },
    listContainerBig: {
        flex: 1,
        width: '90%',
    },
    list: {
        flexGrow: 1,
        // alignItems: 'center', // for ScrollView
        justifyContent: 'center',
        paddingHorizontal: 10,
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
        width: '100%',
    },
});
