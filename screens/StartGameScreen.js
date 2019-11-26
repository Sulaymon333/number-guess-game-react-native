import React, { useState } from 'react';
import { View, Text, Button, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';

import Colors from '../utils/colors';

const StartGameScreen = () => {
    const [enteredValue, setEnteredValue] = useState('');

    const inputHandler = enteredValue => {
        setEnteredValue(enteredValue.replace(/[^0-9]/g, ''));
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input
                        style={styles.input}
                        blurOnSubmit
                        keyboardType="number-pad"
                        maxLength={2}
                        keyboardAppearance="dark"
                        onChangeText={inputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonsContainer}>
                        <View style={styles.button}>
                            <Button title="Reset" color={Colors.accentColor} onPress={() => {}} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm" color={Colors.primaryColor} onPress={() => {}} />
                        </View>
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default StartGameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },

    inputContainer: {
        width: 300,
        maxWidth: '80%',
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    buttonsContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    input: {
        width: 50,
        textAlign: 'center',
    },
    button: {
        width: '40%',
    },
});
