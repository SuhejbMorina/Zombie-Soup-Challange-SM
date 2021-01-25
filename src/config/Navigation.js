import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Logo from '../components/Logo'; 
import Form from '../components/Form'; 
import RForm from '../components/RForm';
import Signup from "../pages/Signup";
import Login  from "../pages/Login";
import TodoList from '../pages/TodoList';

const LoginRegisterStack = createStackNavigator();

const LoginRegisterStackScreen = () => (
  
  <LoginRegisterStack.Navigator headerMode='none'>
    <LoginRegisterStack.Screen name="Login" component={Login} />
    <LoginRegisterStack.Screen name="Signup" component={Signup} />
    <LoginRegisterStack.Screen name="TodoList" component={TodoList} />
  </LoginRegisterStack.Navigator>

);

export default () => (
  <NavigationContainer>
    <LoginRegisterStackScreen />
  </NavigationContainer>
);
