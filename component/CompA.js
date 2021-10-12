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
