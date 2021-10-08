import React, {useState, useEffect} from 'react';
 import {View, Button,TextInput,FlatList,StyleSheet,TouchableOpacity,Text,
 Modal,TouchableWithoutFeedback,Keyboard,SafeAreaView,StatusBar,Pressable, ScrollView} from 'react-native';

 class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      Username: "",
      nameError: "",
      email: "",
      emailError: "",
      Password: ""
    };
  }

  submit() {
    this.resetFormErrors();

    const isValidForm = this.isFormDataValid();

    if (isValidForm) {
      this.setModalVisible(true);
    }
  }

  isFormDataValid = () => {
    let isValid = true;

    const rjx = /^[a-zA-z]+$/;
    const isValidName = rjx.test(this.state.name);

    if (!isValidName) {
      this.setState({ nameError: "name field must be a alphabatic" });
      isValid = false;
    }

    if (this.state.email == "") {
      this.setState({ emailError: "email field can not be empty" });
      isValid = false;
    }

    return isValid;
  }

  resetFormErrors = () => {
    this.setState({
      nameError: "",
      emailError: ""
    })
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  render() {
    return (
          <>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
            //console.log("dismissed keyboard");
          }}
          >
         
          <View style={{ margin: 20, marginTop: 50 }}>
           <View>
          <Text style = {{fontSize:30, textAlign : "center", fontWeight : "bold" , color: "#FFA5D2"}}>Sign Up</Text>
          </View>
            <TextInput style={styles.textinput}

              placeholder="Enter Name"
              underlineColorAndroid={"transparent"}
              maxLength = {20}
              value={this.state.name}
              onChangeText={(text) => {
                this.setState({ name: text });
              }}
              
            />

            <Text style={{ color: "red", marginLeft: 20 }}>
              {" "}
              {this.state.nameError}
            </Text>

            <TextInput  style={styles.textinput}
              placeholder="Email Id "
              value={this.state.email}
              // onBlur = {() => this.emailValidator()}
              onChangeText={(text) => {
                this.setState({ email: text });
              }}
             
            />

            <Text style={{ color: "red", marginLeft: 20 }}>
              {" "}
              {this.state.emailError}
            </Text>

              <TextInput style={styles.textinput}
              placeholder="Username "
              value={this.state.Username}
              // onBlur = {() => this.emailValidator()}
              onChangeText={(text) => {
                this.setState({ Username: text });
              }}
              
            />

            <TextInput style={styles.textinput}
              placeholder="Enter Password "
              value={this.state.Password}
              secureTextEntry = {true}
              onChangeText={(text) => {
                this.setState({ Password: text });
              }}
              
            />

            <Button color= "#FFA5D2"
              title=" Sign Up"
              onPress={() => {
                this.submit();
              }}
            />

            <View>
            <Text style ={{margin:10, textAlign:"center"}}>
                    Already have an account  <Button color="#FFA5D2"
                    title="SignIn"
                    onPress= {() => this.props.navigation.navigate("SignIn")} 
                    />

            </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        </>

    
   );
  }}

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

  export default SignUp 