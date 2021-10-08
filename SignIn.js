 import React,{useState} from 'react';
 import {View, Button,TextInput,FlatList,StyleSheet,TouchableOpacity,Text,
 Modal,TouchableWithoutFeedback,Keyboard,SafeAreaView,StatusBar,Pressable, ScrollView} from 'react-native';
 import {NavigationContainer} from '@react-navigation/native';
 import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import {createStackNavigator} from '@react-navigation/stack';
 import SignUp from './SignUp'
 



function SignIn({navigation}) {

    const [inputField , setInputField] = useState({
        Username: '',
        Password: ''
       
    })
     const inputsHandler = (e) =>{
        setInputField({[e.target.Username]: e.target.value} )
    }
     const submit = () =>{
        alert("LoggedIn")
    }
    return (
      <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
            //console.log("dismissed keyboard");
          }}
          >
         
          <View style={{ margin: 20, marginTop: 50 }}>
           <View>
          <Text style = {{fontSize:30, textAlign : "center", fontWeight : "bold" , color: "#FFA5D2"}}>Sign In</Text>
          </View>

           <TextInput style={styles.textinput}
              placeholder="Username "
              // onBlur = {() => this.emailValidator()}
              //defaultValue = {text}
              onChangeText={inputsHandler}
              value = {inputField.Username}
              
              
            />

            <TextInput style={styles.textinput}
              placeholder="Enter Password "
              //value={this.state.Password}
              secureTextEntry = {true}
               //defaultValue = {text}
              onChangeText={inputsHandler}
               value = {inputField.Password}
             
              
            />

            <Button color = '#FFA5D2'
              title=" Login"
              onPress={() => {
                submit();
              }}
            />

            <View>
            <Text style={{fontWeight:"bold", textAlign:"center",marginTop:20}}>Forget Password ?</Text>
            <Text style ={{margin:10,textAlign:"center"}}>
                    Don't have account sigup here  <Button color = "#FFA5D2"
                    title="SignUp"
                    onPress= {() => navigation.goBack("SignUp")}
                    />

            </Text>
            </View>
          </View>
          </TouchableWithoutFeedback>
    )
  }

  const styles = StyleSheet.create({
    textinput: {
      margin:20,
      alignSelf: "stretch",
      height: 40,
      color: "#464542",
      paddingBottom:10, 
      marginBottom: 30,
      borderBottomColor : "#464542",
      borderBottomWidth: 1,
    }
  });


  export default SignIn;