import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import Colors from '../utils/colors';

const GameOverScreen = ({ rounds, userConfirmedValue, handleStartGame }) => {
    return (
        <View style={styles.screen}>
            <TitleText>The game is over!</TitleText>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/success.jpg')} resizeMode="cover" />
            </View>
            <View style={styles.summaryContainer}>
                <BodyText style={styles.summaryText}>
                    It took your phone <Text style={styles.highlight}>{rounds}</Text> rounds to guess the number{' '}
                    <Text style={styles.highlight}>{userConfirmedValue}</Text>.
                </BodyText>
            </View>
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
    summaryContainer: {
        marginHorizontal: 30,
        marginVertical: 15,
    },
    summaryText: {
        textAlign: 'center',
        fontSize: 18,
    },
    highlight: {
        color: Colors.primaryColor,
        fontWeight: 'bold',
    },
});
