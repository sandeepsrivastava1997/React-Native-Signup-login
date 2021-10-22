<<<<<<< HEAD
import React from 'react';
import { View, Text } from 'react-native';


const FirstName = React.createContext({ fname: '' });

function CompA() {
  return (
    <View>
      <FirstName.Provider value={{ fname: 'Sandeep' }}>
        <CompB />
      </FirstName.Provider>
    </View>
  );
}

export { FirstName };

export default CompA;
=======
import React from 'react'
import {View, Text} from 'react-native';
const FirstName = createContext();

function CompA() {
    return (
        <View>
            
            <FirstName.Provider value = {'Sandeep'}></FirstName.Provider>
            
        </View>
    )
}

export default CompA
export {FirstName};
>>>>>>> 274cf61243979984e675d8d2b4dac3291249dce8
