import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const GameOverScreen = ({ rounds, userConfirmedValue, handleStartGame }) => {
    return (
        <View style={styles.screen}>
            <Text>The game is over!</Text>
            <Text>It took your phone {rounds} rounds</Text>
            <Text>to guess the number {userConfirmedValue}</Text>
            <Button title="NEW GAME" onPress={() => handleStartGame()} />
        </View>
    );
};

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
