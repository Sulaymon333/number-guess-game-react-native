import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props => {
    const { style } = props;
    return <TextInput {...props} style={{ ...styles.input, ...style }} />;
};

export default Input;

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#777',
        height: 30,
        marginTop: 10,
        marginBottom: 20,
    },
});
