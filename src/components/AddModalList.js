import React from "react";
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "./Colors";

export default class AddModalList extends React.Component {
  backgroundColors = [
    "#252A31",
    "#006CFF",
    "#B678FF",
    "#FFE761",
    "#F45E6D",
    "#61DEA4",
    "#BCD2F3",
  ];

  state = {
    name: "",
  };

  renderColors() {
    return this.backgroundColors.map((color) => {
      return (
        <TouchableOpacity
          key={color}
          style={[styles.colorSelect, , { backgroundColor: color }]}
          onPress={() => this.setState({ color })}
        />
      );
    });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding ">
        <TouchableOpacity
          style={{ position: "absolute", top: 50, left: 32 }}
          onPress={this.props.closeModal}
        >
          <Text style={{ color: Colors.blue, fontSize: 18 }}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ position: "absolute", top: 50, right: 32 }}
          onPress={this.props.closeModal}
        >
          <Text style={{ color: Colors.blue, fontSize: 18, fontWeight: "700" }}>
            Done
          </Text>
        </TouchableOpacity>

        <View style={{ alignSelf: "stretch", marginHorizontal: 32 }}>
          <Text style={styles.title}>Category Name:</Text>
          <TextInput
            style={styles.input}
           
            onChangeText={(text) => this.setState({ name: text })}
          />
            <Text style={styles.colortit}>Color</Text>
          <View style={styles.ngjyrat}>{this.renderColors()}</View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  title: {
    fontSize: 24,
    fontWeight: "400",
    color: Colors.black,
    alignSelf: "center",
    marginBottom: 16,
    opacity: 0.3,
    marginTop: -115,
  },
  colortit:{
    fontSize: 24,
    fontWeight: "400",
    color: Colors.black,
    alignSelf: "center",
    marginBottom: -36,
    opacity: 0.3,
    marginTop: 18,
  },

  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.blue,
    borderRadius: 10,
    height: 50,
    marginTop: 8,
    paddingHorizontal: 16,
    fontSize: 18,
    backgroundColor: "#FAFAFA",
    
  },
  colorSelect: {
    width: 33,
    height: 33,
    borderRadius: 25,
  },
  ngjyrat: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 46,
    backgroundColor: "#FAFAFA",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.blue,
    borderRadius: 10,
    height: 301,
    height: 60,
    alignItems: 'center'
   
   
  
    
  },
});
