import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MessagesScreen from "../screens/MessagesScreen";
import WhatsappScreen from "../screens/Whatsapp";
import WelcomeScreen from "../screens/WelcomeScreen";
import Account from "../screens/Account";
import LoginScreen from "../screens/LoginScreen";
const Stack = createStackNavigator();

const Feed2 = () => (
  <Stack.Navigator screenOPtions={{ headerShown: true }}>
    <Stack.Screen name="Listings2" component={Account} />
    <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
    <Stack.Screen name="WhatsappScreen" component={WhatsappScreen} />
    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
  </Stack.Navigator>
);
export default Feed2;
