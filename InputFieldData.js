// import React {useState} from 'react';
// import {View,TextInput , Button, StyleSheet} from 'react-native';

// const InputFieldData = props => {

//     const [name,setName] = useState('');
//     const [email,setEmail] = useState('');
//     const[age,setAge] = useState('')

//     const nameInputHandler = name =>{
//         setName(text);
//     };

//     const emailInputHandler = email =>{
//         setEmail(text)
//     };
//      const ageInputHandler = age => {
//          setAge(number)
//      }
//     return (
//     <TouchableWithoutFeedback onPress={() => {
//      Keyboard.dismiss();
//      console.log('dismissed keyboard')
//    }}>
//    <View style= {{margin:20,marginTop:100}}> 
//         <TextInput
//         placeholder ="Enter Name"
//         // onChangeText = {(text)=>{this.setState({name:text }) }}
//         onChangeText ={nameInputHandler}
//         value = {text}
//           style = {{borderWidth :2, borderColor:'skyblue', margin:20}}
//         />

//         <Text style = {{color:'red',marginLeft:20}}> {this.state.nameError}</Text>

//         <TextInput 
//         placeholder ="Enter Email "
//           // onBlur = {() => this.emailValidator()}
//         //   onChangeText = {(text)=>{this.setState({email:text})}}
//         onChangeText ={emailInputHandler}
//         value={text}
//           style= {{borderWidth :2, borderColor:'skyblue', margin:20}}
//         />
        
//         <Text style = {{color:'red',marginLeft:20}}> {this.state.emailError}</Text>
  
//         <TextInput 
//         placeholder ="Enter Age "
//         keyboardType = "numeric"
//         maxLength = {3}
//         // onChangeText = {(text)=>{this.setState({age:text})}}
//         onChangeText ={ageInputHandler}
//         value = {number}
//         style = {{borderWidth :2, borderColor:'skyblue', margin:20}}
//          />
     
//           <Button title =" Submit" onPress={()=>{this.submit()} }/>

//             </View>
//            </TouchableWithoutFeedback>
//     )
// };
// };
// export default InputFieldData