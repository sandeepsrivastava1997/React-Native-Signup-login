 import React, {useState, useEffect} from 'react';
 import {View, Button,TextInput,FlatList,StyleSheet,TouchableOpacity,Text,
 Modal,TouchableWithoutFeedback,Keyboard,SafeAreaView,StatusBar,Pressable, ScrollView} from 'react-native';
 import {NavigationContainer} from '@react-navigation/native';
 import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import {createStackNavigator} from '@react-navigation/stack';
 import SignIn from "./SignIn";
 import SignUp from './SignUp';
 
 

  const Stack = createStackNavigator();
  const App = () => {
    return(
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="SignIn" component={SignIn}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }



export default App
