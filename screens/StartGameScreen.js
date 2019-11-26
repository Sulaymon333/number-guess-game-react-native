import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const StartGameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game</Text>
            <View style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonsContainer}>
                    <Button title="Start" onPress={() => {}} />
                    <Button title="Cancel" onPress={() => {}} />
                </View>
            </View>
        </View>
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
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        padding: 20,
        borderRadius: 10,
        elevation: 8,
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
});
