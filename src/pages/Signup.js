import { StatusBar } from 'expo-status-bar';
import React from 'react';


import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';

import Logo from '../components/Logo';



export default function Signup({ navigation }) {
  return (
    <View style={styles.container}>
      <Logo />
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
          marginTop: 7,
        }}
      >
        Password
      </Text>
      <TextInput style={styles.inputBox2} secureTextEntry={true} />
      <Text
        style={{
          fontSize: 18,
          textAlign: "center",
          color: "#252A31",
          opacity: 0.3,
          marginTop: 7,
        }}
      >
       Confirm Password
      </Text>
      <TextInput style={styles.inputBox2} secureTextEntry={true} />
      
      <TouchableOpacity style={{ width: 301,
      height: 50,
      backgroundColor: "#006CFF",
      borderRadius: 10,
      marginBottom: 50,
      marginTop: 140,}}>
        <Text style={styles.buttonTxt}   onPress={() => navigation.push('TodoList')}>Register</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
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
    buttonTxt: {
      fontSize: 18,
      color: "#fff",
      textAlign: "center",
      paddingVertical: 13,
    },
    

  });
  