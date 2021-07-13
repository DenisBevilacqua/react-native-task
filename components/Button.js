import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function Button(props) {
    const { onPress, title = 'Save', backgroundColor, fontSize } = props;
    return (
        <Pressable style={styles(backgroundColor, fontSize).button} onPress={onPress}>
            <Text style={styles(backgroundColor, fontSize).text}>{title}</Text>
        </Pressable>
    );
}

const styles = (backgroundColor = "#3691FF", fontSize = 16) => StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: backgroundColor
    },
    text: {
        fontSize: fontSize,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});
