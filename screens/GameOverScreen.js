import React from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';

const GameOverScreen = ({ rounds, userConfirmedValue, handleStartGame }) => {
    return (
        <View style={styles.screen}>
            <TitleText>The game is over!</TitleText>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/success.jpg')} resizeMode="cover" />
            </View>
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
    imageContainer: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#777',
        marginVertical: 25,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});
