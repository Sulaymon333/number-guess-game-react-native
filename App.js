import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App(props) {
    const [userConfirmedValue, setUserConfirmedValue] = useState();

    const handleStartGame = selectedNumber => {
        setUserConfirmedValue(selectedNumber);
    };

    let screen = <StartGameScreen handleStartGame={handleStartGame} />;
    if (userConfirmedValue) {
        screen = <GameScreen userConfirmedValue={userConfirmedValue} />;
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
