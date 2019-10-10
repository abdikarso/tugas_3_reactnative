import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

class Barang extends Component {
  constructor(props){
    super(props);
    this.state = {
      jumlah:0,
    }
  }

  handleTambah = () => {
    this.setState({
      jumlah : this.state.jumlah + 1
    });
  };
  handleKurang = () => {
    if (this.state.jumlah > 0) {
      this.setState({
        jumlah : this.state.jumlah - 1
      });
    } else {
      Alert.alert("Jumlah tidak boleh Kurang dari 0")
    }
  };

  render(){
    return(
      <View style={{flex:3, backgroundColor:"white"}}>

      <View style={{flex:2, flexDirection:"row"}}>
      <Text style={{flex:3}}></Text>
        <Text style={{flex:1}}>Jumlah : {this.state.jumlah}</Text>
        </View>

          <Text style={{flex:2, textAlign:"center"}}>Silahkan Tekan Tombol Di Bawah</Text>

        <View style={{flex:1, flexDirection:"row"}}>

        <Text style={{flex:1}}></Text>

        <TouchableOpacity style={{flex:2, backgroundColor:"red", width:50, height:35}} onPress={this.handleTambah}>
          <View style={{alignItems:"center", justifyContent:"center"}}>
          <Text style={{color:"white", fontSize:30}}>+</Text>
            </View>
        </TouchableOpacity>

          <Text style={{flex:1}}></Text>

          <TouchableOpacity style={{flex:2, backgroundColor:"green", width:50, height:35}} onPress={this.handleKurang}>
            <View style={{alignItems:"center", justifyContent:"center"}}>
            <Text style={{color:"white", fontSize:30}}>-</Text>
              </View>
          </TouchableOpacity>

          <Text style={{flex:1}}></Text>

            </View>
            <View style={{flex:20, flexDirection:"row", paddingTop:50}}>
            <Text style={{flex:1}}></Text>
              <Text style={{flex:1, color:"blue", fontSize:50, textAlign:"center"}}>{this.state.jumlah}</Text>
            <Text style={{flex:1}}></Text>
            </View>
          </View>
    )
  }
}
//Abdi
export default Barang;
