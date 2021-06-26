import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class FacebookScreen extends React.Component {
  render(){
    return(
      <View style={styles.screen}>
       
       <Text style={styles.fbtext}>
       Facebook
       </Text>

       </View>
    )
  }
}
const styles = StyleSheet.create({

  screen:{
    flex:1,
    marginLeft:120,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignIteam:'center'
  },
  fbtext:{
    color:'blue',
    fontWeight:'20',
    fontSize:20,
    justifyContent:'center',
    alignIteam:'center'
  }

})