import React from 'react';
import { View, StyleSheet } from 'react-native';

import TitleText from '../components/TitleText';

import Colors from '../utils/colors';

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <TitleText style={styles.headerTitle}>{title}</TitleText>
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
        color: 'white',
    },
});
