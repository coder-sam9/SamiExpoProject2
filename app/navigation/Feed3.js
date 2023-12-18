import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import listingEditScreen from "../screens/listingEditScreen";
const Stack = createStackNavigator();

const Feed3 = () => (
  <Stack.Navigator>
    <Stack.Screen name="Listings2" component={listingEditScreen} />
  </Stack.Navigator>
);

export default Feed3;
