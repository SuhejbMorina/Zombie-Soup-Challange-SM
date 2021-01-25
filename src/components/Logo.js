import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Logo() {
  return (
    <View style={styles.container}>
    <Image
    style={{width: 128, height: 128, position: 'absolute'}}
    source={require('../images/logo-white.png')}
   />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
   
})


  
