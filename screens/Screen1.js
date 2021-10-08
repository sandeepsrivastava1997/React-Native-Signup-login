import React from 'react'
import {View, Text,StyleSheet,Button} from 'react-native';
import Screen2 from './Screen2';
const Screen1 = (navigation) => {
    return (
        <View>
        <Text style = {styles.textStyle}>
            We are in the tab window
        </Text>
        <Button
               title=" Submit"
               onPress={() => {"Screen2"}}
              />            
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

export default Screen1
