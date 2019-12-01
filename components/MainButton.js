import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Color from '../utils/colors';

const MainButton = ({ children, btnStyle, btnTextStyle, handlePress }) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={handlePress}>
            <View style={{ ...styles.button, ...btnStyle }}>
                <Text style={{ ...styles.buttonText, ...btnTextStyle }}>{children}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default MainButton;

const styles = StyleSheet.create({
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
