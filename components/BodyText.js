import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BodyText = ({ children, style }) => {
    return <Text style={{ ...styles.bodyText, ...style }}>{children}</Text>;
};

export default BodyText;

const styles = StyleSheet.create({
    bodyText: {
        fontFamily: 'open-sans',
    },
});
