import React from 'react'
import {View, Text,StyleSheet } from 'react-native';

const Screen2 = () => {
    return (
        <View>
        <Text style = {styles.textStyle}>
            We are in the Buttom window
        </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle : {
        fontSize:20,
        padding: 40,
        marginTop:20,
        textAlign: 'center'
    }
});

export default Screen2
