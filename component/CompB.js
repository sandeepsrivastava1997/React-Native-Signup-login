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