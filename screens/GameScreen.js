import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandom = (min, max, exclude) => {
    // exclude is the value confirmed by the user
    // incase we have float number ( not absolute requires since, we replace non digit with '' already)
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min) + min); // excludes max value
    if (randomNumber === exclude) {
        return generateRandom(min, max, exclude); // recursion
    } else {
        return randomNumber;
    }
};

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandom(1, 100, props.userConfirmedValue));
    return (
        <View>
            <Text>
                <NumberContainer>{currentGuess}</NumberContainer>
                <Card>
                    <Button title="LOWER" onPress={() => {}} />
                    <Button title="GREATER" onPress={() => {}} />
                </Card>
            </Text>
        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({});
