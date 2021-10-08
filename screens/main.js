 import React, {useState , useEffect} from 'react';
 import {View, Button,TextInput,FlatList,StyleSheet,TouchableOpacity,Text,
 Modal,TouchableWithoutFeedback,Keyboard,SafeAreaView,StatusBar,Pressable, ScrollView} from 'react-native';
 import {NavigationContainer} from '@react-navigation/native';
 import { Card} from 'react-native-paper';
 import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import axios from 'axios'

// // import HomeStack from './routes/HomeStack';
// import ValidationComponent from 'react-native-form-validator';
// // import ButtonPopUp from './ButtonPopUp'
// import Screen1 from './screens/Screen1';
// import Screen2 from './screens/Screen2';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      nameError: "",
      email: "",
      emailError: "",
      age: "",
      modalVisible: false,
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
            console.log("dismissed keyboard");
          }}
        >
          <View style={{ margin: 20, marginTop: 100 }}>
            <TextInput

              placeholder="Enter Name"
              keyboardType="alphabatic"
              minLength={3}
              maxLength = {20}
              onChangeText={(text) => {
                this.setState({ name: text });
              }}
              style={{ borderWidth: 2, borderColor: "skyblue", margin: 20 }}
            />

            <Text style={{ color: "red", marginLeft: 20 }}>
              {" "}
              {this.state.nameError}
            </Text>

            <TextInput
              placeholder="Email Id "
              // onBlur = {() => this.emailValidator()}
              onChangeText={(text) => {
                this.setState({ email: text });
              }}
              style={{ borderWidth: 2, borderColor: "skyblue", margin: 20 }}
            />

            <Text style={{ color: "red", marginLeft: 20 }}>
              {" "}
              {this.state.emailError}
            </Text>

            <TextInput
              placeholder="Enter Password "
              secureTextEntry = {true}
              keyboardType="numeric"
              minLength={6}
              onChangeText={(text) => {
                this.setState({ Password: text });
              }}
              style={{ borderWidth: 2, borderColor: "skyblue", margin: 20 }}
            />

            <Button
              title=" Submit"
              onPress={() => {
                this.submit();
              }}
            />
          </View>
        </TouchableWithoutFeedback>
{/* //         <View style={{ flex: 1, justifyContent: "center", marginTop: 22 }}>
//           <Modal */}
//             transparent={true}
//             visible={this.state.modalVisible}
//             onRequestClose={() => {
//               Alert.alert("Modal has been closed");
//               this.setModalVisible(!modalVisible);
//             }}
//           >
//             <View
//               style={{
//                 flex: 1,
//                 justifyContent: "center",
//                 alignItems: "center",
//                 marginTop: 22,
//               }}
//             >
//               <View
//                 style={{
//                   margin: 20,
//                   backgroundColor: "white",
//                   borderRadius: 20,
//                   padding: 35,
//                   alignItems: "center",
//                   shadowColor: "#000",
//                   shadowOffset: {
//                     width: 0,
//                     height: 2,
//                   },
//                 }}
//               >
//                 <Text style={{ marginBottom: 15, textAlign: "center" }}>
//                   {" "}
//                   {this.state.name}{" "}
//                 </Text>
//                 <Text style={{ marginBottom: 15, textAlign: "center" }}>
//                   {" "}
//                   {this.state.email}{" "}
//                 </Text>
//                 <Text style={{ marginBottom: 15, textAlign: "center" }}>
//                   {" "}
//                   {this.state.age}{" "}
//                 </Text>
//                 <Pressable
//                   style={[styles.button, styles.buttonOpen]}
//                   onPress={() => this.setModalVisible(!this.state.modalVisible)}
//                 >
//                   <Text style={styles.textStyle}>Close </Text>
//                 </Pressable>
//               </View>
//             </View>
//           </Modal>
//         </View>
//       </>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },

//   buttonOpen: {
//     backgroundColor: "#F194FF",
//   },
//   buttonClose: {
//     backgroundColor: "#2196F3",
//   },
// });

// const Tab = createBottomTabNavigator()

// const App : () => React$Node = () => {
//   return (
//     <>
//     <NavigationContainer>
//       <Tab.Navigator>
//       <Tab.Screen 
//         name= "Screen1"
//         component={Screen1}
//       />
//       <Tab.Screen 
//         name= "Screen2"
//         component={Screen2}
//       />
//       </Tab.Navigator>
//     </NavigationContainer>
//     </>
//   )
// }

// const Stack = createNativeStackNavigator();

// function App(props) {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Screen1">
//         <Stack.Screen name="Screen1" component={Screen1} />
//         <Stack.Screen name="Screen2" component={Screen2} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// class App extends React.Component {

//   constructor()
//   {
//     super()
//     this.state = {
//       data: []
//     }
//   }

//   componentDidMount()
//   {
//    this.getapiData()
//   }
//   async getapiData()
//   {
//     let output = await axios.get('https://facebook.github.io/react-native/movies.json')
//     console.warn(output.data.movies)
//     this.setState({data: output.data.movies})
//   }
//   render() {
//     return (
//       <View style = {styles.viewStyle}>
//           <FlatList 
//           data={this.state.data}
//           renderItem = {({ item }) => (
//             <Card>
//             <View style = {{flex:1,flexDirection:'row', padding:10}}>
//             <Text style= {{flex:1, margin:5,padding:5,fontSize : 20, color:'#6897BB'}}>Movie Name </Text>
//             <Text style = {{fontSize : 20,flex:1,margin:5,padding:5}}>{item.title}</Text>
//             </View>
//            </Card>
//         )}
//       />
//     </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
 
//   viewStyle : {
//     flex:1,
//     padding:5,
//     marginTop:100
//   }
// });

// function App() {

//   const [posts, setPosts] = useState([])

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then(res => {
//       console.log(res.data)
//       setPosts(res.data);
//     })
//     .catch(err => {
//       console.error(err)
//     })
//   }, [])

//   return (
    
//     <SafeAreaView style = {{flex: 1}}>
    
//       <FlatList 
//         data={posts}
//         renderItem = {({ item }) => (
//           <Text style = {{fontSize : 10}}>{item.title}</Text>
//         )}
//       />
     
//     </SafeAreaView>
    
//   )
// }


export default App
