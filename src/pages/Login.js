
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import Logo from '../components/Logo';



export default function Login({navigation}) {
  return (
    
    <View style={styles.container}>
      <Logo style={styles.logoStyle}/>
    
      <Text
        style={{
          fontSize: 18,
          textAlign: "center",
          color: "#252A31",
          opacity: 0.3,
          
        }}
      >
        Email
      </Text>
      <TextInput style={styles.inputBox1} />
      <Text
        style={{
          fontSize: 18,
          textAlign: "center",
          color: "#252A31",
          opacity: 0.3,
         
        }}
      >
        Password
      </Text>
      
      <TextInput style={styles.inputBox2} secureTextEntry={true} />
      <TouchableOpacity style={styles.logBtn}>
        <Text style={styles.buttonTxt}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.regBtn}   onPress={() => navigation.push('Signup')}>
        <Text style={styles.buttonTxt}>Register</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 150,
    },
    inputBox1: {
      width: 301,
      borderWidth: 1,
      borderColor: "#BCD2F3",
      backgroundColor: "#FAFAFA",
      height: 41,
      borderRadius: 10,
      marginVertical: 7,
      
    },
    inputBox2: {
      width: 301,
      borderWidth: 1,
      borderColor: "#BCD2F3",
      backgroundColor: "#FAFAFA",
      height: 41,
      borderRadius: 10,
      marginVertical: 7,
      
    },
    logBtn: {
      width: 301,
      height: 50,
      backgroundColor: "#61DEA4",
      borderRadius: 10,
      marginTop: 70,
     
    },
    regBtn: {
      width: 301,
      height: 50,
      backgroundColor: "#006CFF",
      borderRadius: 10,
      marginVertical: 15,
      marginBottom: 140,
    },
    buttonTxt: {
      fontSize: 18,
      color: "#fff",
      textAlign: "center",
      paddingVertical: 13,
    },
  });
  