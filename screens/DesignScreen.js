 import React, {useState, useEffect} from 'react';
 import {View, Button,TextInput,FlatList,StyleSheet,TouchableOpacity,Text,
 Modal,TouchableWithoutFeedback,Keyboard,SafeAreaView,StatusBar,Pressable, ScrollView,Image} from 'react-native';
 import Icons from 'react-native-vector-icons/MaterialCommunityIcons';


function DesignScreen() {
    return (
      <View style={styles.container}>
      <View style={styles.Item1}>
      <Text style={{alignItems:'center', justifyContent:'center', color:'#ffffff', fontSize:30}}>Incandescent</Text>
      <Text style={{alignItems:'center', justifyContent:'center', color:'#ffffff', fontSize:30}}>Light Bulb</Text>
      <Icons name= "white-balance-incandescent" size= {200} color="#ffffff"/>
      <Text style={{alignItems:'center', justifyContent:'center', color:'#ffffff', fontSize:30}}>1878</Text>
      <Text style={{alignItems:'center', justifyContent:'center', color:'#ffffff', fontSize:30}}>Thomas Edison</Text>
      
      </View>
      <View style= {styles.element}>
      <View style={styles.Box}>
      <View style = {styles.inner}>
      <TouchableOpacity>
        <Icons name= "react" size= {50} color="#ffffff"/>
        </TouchableOpacity>
      </View>
       </View>
      <View style={styles.Box}>
      <View style = {styles.inner}>
      <TouchableOpacity>
        <Icons name= "cellphone" size= {50} color="#ffffff"/>
        </TouchableOpacity>
      </View>
      </View>
      
      <View style={styles.Box}>
      <View style = {styles.inner}>
      <TouchableOpacity>
        <Icons name= "umbrella-outline" size= {50} color="#ffffff"/>
        </TouchableOpacity>
      </View>
      </View>
       
      <View style={styles.Box}>
      <View style = {styles.inner}>
      <TouchableOpacity>
        <Icons name= "apple-safari" size= {50} color="#ffffff"/>
        </TouchableOpacity>
      </View>
      </View>
      </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex:1
      },
    Item1: {
      flex:8,
      backgroundColor:'red', 
      alignItems:'center',
      justifyContent:'center'

    },
    element: {
        width:'100%',
        height: '35%',
        flexDirection:'row',
        flexWrap:'wrap'
      },
    Box : {
      width:'50%',
      height:'50%'
      
    },

    inner : {
          flex:1,
          backgroundColor:'#d21111',
          alignItems:'center',
          justifyContent:'center'
    
    }
  })
  
  
export default DesignScreen