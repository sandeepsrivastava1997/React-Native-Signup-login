// import {Modal, Dimension, TouchableWithoutFeedback,StyleSheet, View, Text,StatusBar,SafeAreaView} from 'react-native'
// import React from 'react'

// const deviceHeight = Dimension.get('window').height
// export class ButtonPopUp extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state ={
//             show:false
//         }
//     }

//     show = () => {
//         this.setState({show: true})
//     }
//     close =() =>{
//         this.setState({show:false})
//     }
//         renderOutsideTouchable(onTouch){
//         const view = <View style = {{flex:1,width:'100%'}}/>
//         if(!onTouch) return view

//         return (
//             <TouchableWithoutFeedback onPress={onTouch} style={{flex:1,width:"100%"}}>
//             {view}
//             </TouchableWithoutFeedback>
//         )
//     }

//     renderTitle =() =>{
//         const {title} = this.props
//         return(
//              <View style ={{alignItems : 'center'}}>
//                 <Text style = {{
//                     color: '#18E44',
//                     fontSize: '25',
//                     fontWeight: '500',
//                     margin:15,
//                     marginBottom:30
//                 }}>
//                 {title}

//                 </Text>
//             </View>
//         )
//     }

//     renderContent = ()=>{
//         const {data} = this.props
//         return(
//             <View>
//                 <FlatList
//                     style= {{marginButtom: 20}}
//                     showVerticalScrollIndicator={false}
//                     data= {data}
//                     renderItem={this.renderItem}
//                     extraData = {data}
//                     keyExtractor= {(item,index) => index.toString()}
//                     ItemSeparatorComponentStyle={{
//                         paddingBotton:40
//                     }}
//                     />
//             </View>
//         )
//     }
//     renderSeparator = () => {
//         <View style = {{
//             opacity:0.1,
//             backgroundColor: '#182E44',
//         }}>

//         </View>
//     }

//     renderItem = ({item}) =>{
//         return (
//             <View style = {{height:50,flex:1, alignItems:'flex-start',justifyContent:'center'}}>
//             <Text style= {{fontSize:10, fontWeight: 'normal', color: '#182E44'}}>
//             {item.name}
//             </Text>
//             </View>
//         )
//     }
//     render(){
//         let {show}  = this.state
//         const{onTouchOutside,title} = this.props
//         return(
//         <Modal
//         animationType = {'fade'}
//         transparent={true}
//         visible={true}
//         onRequestClose = {this.close}
//         >
//         <View style ={{
//             flex:1,
//             backgroundColor: '#000000AA',
//             justifycontent : 'flex-end'}}>
//             {this.renderOutsideTouchable(onTouchOutside)}
//             <View style= {{
//                 backgroundColor: '#FFFFFF',
//                 width:'100%',
//                 borderTopRightRadius:10,
//                 borderTopLeftRadius:10,
//                 paddingHorizontal:10,
//                 maxHeight: deviceHeight * 0.4
//             }}>
           
//             {this.renderTitle()}
//             {this.renderContent()}
//             </View>
//             </View>
//             </Modal>
//         }}
//         )
         
//     }
// }