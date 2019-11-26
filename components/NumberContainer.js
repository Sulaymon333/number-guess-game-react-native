import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../utils/colors';

const NumberContainer = ({ children }) => {
    return (
        <View style={styles.numberContainer}>
            <Text style={styles.number}>{children}</Text>
        </View>
    );
};

export default NumberContainer;

const styles = StyleSheet.create({
    numberContainer: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginVertical: 10,
    },
    number: {
        fontSize: 22,
        color: Colors.primaryColor,
    },
});
