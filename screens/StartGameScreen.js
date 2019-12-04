import React, { useState } from 'react';
import { View, Text, Button, TouchableWithoutFeedback, Keyboard, Alert, Dimensions, StyleSheet } from 'react-native';

import Colors from '../utils/colors';

import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';

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
                <MainButton handlePress={() => handleStartGame(confirmedValue)}>START GAME</MainButton>
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
    title: {
        fontSize: 18,
        marginVertical: 10,
        fontFamily: 'open-sans-bold',
    },
    inputContainer: {
        width: '80%',
        maxWidth: '95%',
        minWidth: 300,
        alignItems: 'center',
    },
    input: {
        width: 50,
        textAlign: 'center',
    },
    buttonsContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    button: {
        width: Dimensions.get('window').width / 4,
    },
    confirmedValueContainer: {
        marginVertical: 20,
        alignItems: 'center',
    },
});
