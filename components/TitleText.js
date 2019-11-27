import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TitleText = ({ children, style }) => {
    return <Text style={{ ...styles.titleText, ...style }}>{children}</Text>;
};

export default TitleText;

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontFamily: 'open-sans-bold',
    },
});
