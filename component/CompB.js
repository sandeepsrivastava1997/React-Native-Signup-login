<<<<<<< HEAD
import React from 'react';
import { View, Text } from 'react-native';

import { FirstName } from './CompA'

function CompB() {
  return (
    <View>
      <FirstName.Consumer>
        {({ fname }) => {
          return (
            <Text>My first name is {fname}</Text>
          )
        }}
      </FirstName.Consumer>
    </View>
  );
}

export default CompB;
=======
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
>>>>>>> 274cf61243979984e675d8d2b4dac3291249dce8
