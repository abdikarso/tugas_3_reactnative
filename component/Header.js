import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Barang from "./Barang.js"

class Header extends Component {
  constructor(props){
    super(props);
    }
  render(){
    return(
        <View style={{flex:1, backgroundColor:"#6cff65", alignItems:"center", justifyContent:"center"}}>
          <Text style={{color:"white", fontSize:15}}>Tugas 3 React Native</Text>
          <Text style={{color:"purple", fontSize:25}}>{this.props.data}</Text>
          </View>
    )
  }
}

export default Header;
