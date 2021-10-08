// import React from 'react';
//  import {View, Button,TextInput,StyleSheet,Text} from 'react-native';

//  import {globalStyles} from 'react-native';

// import ValidationComponent from 'react-native-form-validator';
// import ButtonPopUp from './src/ButtonPopUp'

// const popuplist = [
//       {
//         name:  this.state.name,
//         email: this.state.email,
//         age: this.state.age
//       }
//     ]

//     const App = () = {
//     let popupRef = React.createRef()
    
//     const onShowPopup = () => {
//       popupRef.show()
//     }

//     const onClosePopup = () =>{
//       popupRef.close()
//     }

//     return (
//         <>
//             <StatusBar barstyle="dark-content"/>
//             <SafeAreaView style ={styles.container}>
//             <TouchableWithoutFeedback onPress={onShowPopup}>
//                 <Text style ={styles.txtSize}>Show popup </Text>
//                 </TouchableWithoutFeedback>
//                 <ButtonPopUp
//                   title="Demo PopUp"
//                   ref = {(target) => popupRef = target}
//                   onTouchOutside = {onClosePopup}
//                   data = {popuplist}
//                 />
//             </SafeAreaView>
//         </>
//     )
    
//     }

//     const styles = StyleSheet.create({
//     container : {
//       flex: 1,
//       alignItems : "center",
//       justifyContent: "center"
//     },
//     txtSize: {
//       fontSize:20,
//     }
// })

//  export default Home;


// // export default function Home({ navigation }) {
   
// //     const pressHandler = () => {
// //         navigation .navigate(' ReviewDetails');
// //     }
// //     return (
// //         <View style = {{borderWidth :2, borderColor:'skyblue', marginTop:20,padding:30}}>
// //         <Text> We are in the Home page </Text>
// //         <Button title='Go to review ' onPress= {pressHandler}/>
// //         </View>
// //     )
// // }

import React from 'react';
import {View, Button,TextInput,StyleSheet,Text} from 'react-native';
