import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../utils/colors';

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        paddingTop: 36,
        height: 90,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primaryColor,
    },
    headerTitle: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'open-sans-bold',
        fontWeight: 'bold',
    },
});
