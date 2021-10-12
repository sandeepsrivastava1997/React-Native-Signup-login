import React,{useContext} from 'react'
import {View, Text} from 'react-native';
import FirstName from './CompA';

function CompC() {
    const fname = useContext(FirstName);
    return (
        <View> 
            <Text> My first name is {fname} </Text> </View>
            );
}

export default CompC;
