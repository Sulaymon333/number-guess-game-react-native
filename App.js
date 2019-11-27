import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App(props) {
    const [userConfirmedValue, setUserConfirmedValue] = useState(null);
    const [rounds, setRounds] = useState(0);

    const handleStartGame = selectedNumber => {
        setUserConfirmedValue(selectedNumber);
        setRounds(0);
    };

    const handleGameOver = numOfRounds => {
        setRounds(numOfRounds);
    };

    let screen = <StartGameScreen handleStartGame={handleStartGame} />;

    if (userConfirmedValue && rounds <= 0) {
        screen = <GameScreen userConfirmedValue={userConfirmedValue} handleGameOver={handleGameOver} />;
    } else if (rounds > 0) {
        screen = (
            <GameOverScreen rounds={rounds} userConfirmedValue={userConfirmedValue} handleStartGame={handleStartGame} />
        );
    }

    return (
        <View style={styles.screen}>
            <Header title="Number Guesser Game" />
            {screen}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});
