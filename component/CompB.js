import React from 'react'
import {View, Text} from 'react-native';
import FirstName from './CompA';

function CompB() {
    return (
        <View>
        <Provider>
        <FirstName.Consumer> {(fname) => {
            return (<Text> My first name is {fname} </Text>
            }})</FirstName.Consumer>
          </Provider>  
        </View>
    )
}

export default CompB
