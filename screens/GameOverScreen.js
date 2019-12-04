import React from 'react';
import { View, Text, Image, ScrollView, Dimensions, StyleSheet } from 'react-native';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import Colors from '../utils/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = ({ rounds, userConfirmedValue, handleStartGame }) => {
    return (
        <ScrollView>
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
                <MainButton handlePress={() => handleStartGame()}>NEW GAME</MainButton>
            </View>
        </ScrollView>
    );
};

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    imageContainer: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#777',
        marginVertical: Dimensions.get('window').height / 30,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryContainer: {
        marginHorizontal: 30,
        marginVertical: Dimensions.get('window').height / 60,
    },
    summaryText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 18,
    },
    highlight: {
        color: Colors.primaryColor,
        fontFamily: 'open-sans-bold',
    },
});
