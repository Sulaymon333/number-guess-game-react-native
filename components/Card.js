import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = ({ children, style }) => {
    return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black',
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        elevation: 8,
        padding: 20,
    },
});
