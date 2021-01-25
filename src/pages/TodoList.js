import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Modal,
  ViewPropTypes,
} from "react-native";
import Colors from "../components/Colors";
import { AntDesign } from "@expo/vector-icons";
import TempData from "../components/TempData";
import ToDolistat from "../components/ToDolistat";
import Note from "../components/Note";
import AddModalList from "../components/AddModalList";

export default class TodoList extends React.Component {
  
  constructor(props) {
    super(props);

    this.states = {
      noteArray: [
        { note: "Start making a presentation " },
        { note: "Pay for rent" },
        { note: "Buy a milk " },
        { note: "Don’t forget to pick up Mickael from school" },
        { note: "Buy a chocolate for Charlotte" },
      ],
      noteText: "",
    };
  }
  state = {
    addTodoVisible: false,
  };

  toggleAddTodoModal() {
    this.setState({ addTodoVisible: !this.state.addTodoVisible });
  }

  render() {
    let notes = this.states.noteArray.map((val, key) => {
      return <Note key={key} keyval={key} val={val} />;
    });

    return (
      <View style={styles.container}>
         <Modal
          animationType="slide"
          visible={this.state.addTodoVisible}
          onRequestClose={() => this.toggleAddTodoModal()}
        >
          <AddModalList closeModal={() => this.toggleAddTodoModal()} />
        </Modal>
        <View style={styles.header}>
          <Text style={styles.title}>Today</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>{notes}</ScrollView>

       
        <View
          style={{
            height: 485,
            paddingLeft: 50,
            marginBottom: -145,
            
          }}
        >
          <Text style={{ fontSize: 16, color: "#252A31", opacity: 0.3 }}>
            Lists
          </Text>
          <FlatList
            data={TempData}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => <ToDolistat list={item} />}
          />
        </View>

   
          <TouchableOpacity
            style={styles.addBtn}
            onPress={() => this.toggleAddTodoModal()}
          >
            <AntDesign name="plus" size={32} color={Colors.blue} />
          </TouchableOpacity>
        </View>
   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    
    marginTop: -30,
  },
  header: {
    marginTop: 20,
    marginRight: 180,
  },
  title: {
    fontSize: 38,
    fontWeight: "600",
    color: Colors.black,
    marginVertical: 12,
    marginBottom: 20,
  },

  addBtn: {
    width: 64,
    height: 64,

    marginLeft: 280,
    borderRadius: 35,

    backgroundColor: "#fff",

    alignItems: "center",
    justifyContent: "center",
  },
});
