import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import Header from "./component/Header.js";
import Barang from "./component/Barang";

class App extends Component {
  render(){
    return(
      <View style={{flex:1}}>
          <Header data="SELAMAT DATANG"/>
          <Barang/>
        </View>
    )
  }
}

export default App;
