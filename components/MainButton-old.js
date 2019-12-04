import React from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

import Color from '../utils/colors';

const MainButton = ({ children, btnStyle, btnTextStyle, handlePress }) => {
    let ButtonComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.buttonContainer}>
            <ButtonComponent activeOpacity={0.6} onPress={handlePress}>
                <View style={{ ...styles.button, ...btnStyle }}>
                    <Text style={{ ...styles.buttonText, ...btnTextStyle }}>{children}</Text>
                </View>
            </ButtonComponent>
        </View>
    );
};

export default MainButton;

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 25,
        overflow: 'hidden',
    },
    button: {
        backgroundColor: Color.primaryColor,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
    },
    buttonText: {
        fontFamily: 'open-sans',
        fontSize: 18,
        color: 'white',
    },
});
