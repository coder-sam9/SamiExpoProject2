import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
const Stack = createStackNavigator();

function Authnavigation(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default Authnavigation;
