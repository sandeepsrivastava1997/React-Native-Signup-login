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