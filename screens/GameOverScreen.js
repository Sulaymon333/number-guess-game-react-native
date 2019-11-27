import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

import BodyText from '../components/BodyText';

const GameOverScreen = ({ rounds, userConfirmedValue, handleStartGame }) => {
    return (
        <View style={styles.screen}>
            <BodyText>The game is over!</BodyText>
            <BodyText>It took your phone {rounds} rounds</BodyText>
            <BodyText>to guess the number {userConfirmedValue}</BodyText>
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
