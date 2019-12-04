import React from 'react';
import { View, Platform, StyleSheet } from 'react-native';

import TitleText from '../components/TitleText';

import Colors from '../utils/colors';

const Header = ({ title }) => {
    return (
        <View
            style={{
                ...styles.headerBase,
                ...Platform.select({
                    ios: styles.headerIOS,
                    android: styles.headerAndroid,
                }),
            }}
        >
            <TitleText style={styles.headerTitle}>{title}</TitleText>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    headerBase: {
        paddingTop: 36,
        height: 90,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerIOS: {
        backgroundColor: 'white',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    headerAndroid: {
        backgroundColor: Colors.primaryColor,
    },
    headerTitle: {
        color: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    },
});
