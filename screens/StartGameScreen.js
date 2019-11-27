import React, { useState } from 'react';
import { View, Text, Button, TouchableWithoutFeedback, Keyboard, Alert, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

import Colors from '../utils/colors';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';

const StartGameScreen = ({ handleStartGame }) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmedValue, setConfirmedValue] = useState('');
    const [isValueConfirmed, setIsValueConfirmed] = useState(false);

    const handleInput = enteredValue => {
        setEnteredValue(enteredValue.replace(/[^0-9]/g, ''));
    };

    const handleReset = () => {
        setEnteredValue('');
        setIsValueConfirmed(false);
    };

    const handleConfirm = () => {
        const confirmedValue = parseInt(enteredValue);
        if (isNaN(confirmedValue) || confirmedValue <= 0 || confirmedValue > 99) {
            Alert.alert('Invalid Number!', 'Number must be between 1 and 99', [
                { text: 'Okay', style: 'destructive', onPress: handleReset },
            ]);
            return;
        }
        setConfirmedValue(confirmedValue);
        setIsValueConfirmed(true);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedJSX;

    if (isValueConfirmed) {
        confirmedJSX = (
            <Card style={styles.confirmedValueContainer}>
                <Text>You selected</Text>
                <NumberContainer>{confirmedValue}</NumberContainer>
                <View>
                    <Button title="START GAME" onPress={() => handleStartGame(confirmedValue)} />
                </View>
            </Card>
        );
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <TitleText style={styles.title}>Start a New Game</TitleText>
                <Card style={styles.inputContainer}>
                    <BodyText>Select a Number</BodyText>
                    <Input
                        style={styles.input}
                        blurOnSubmit
                        keyboardType="number-pad"
                        maxLength={2}
                        keyboardAppearance="dark"
                        onChangeText={handleInput}
                        value={enteredValue}
                    />
                    <View style={styles.buttonsContainer}>
                        <View style={styles.button}>
                            <Button title="Reset" color={Colors.accentColor} onPress={handleReset} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm" color={Colors.primaryColor} onPress={handleConfirm} />
                        </View>
                    </View>
                </Card>
                {confirmedJSX}
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
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        marginVertical: 10,
        fontFamily: 'open-sans-bold',
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
    confirmedValueContainer: {
        marginVertical: 20,
        alignItems: 'center',
    },
});
