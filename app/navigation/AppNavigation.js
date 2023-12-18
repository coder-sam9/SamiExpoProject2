import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FeedNavigator from "./FeedNavigator";
import NewListingButton from "./NewListingButton";
import Feed2 from "./Feed2";
import ListingEditScreen from "../screens/listingEditScreen";
import Feed3 from "./Feed3";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

function AppNavigation(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="home"
              color={focused ? "black" : "#8EC7DB"}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="upload"
        component={ListingEditScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={focused ? "black" : "#8EC7DB"}
              size={size * 2}
            />
          ),
        }}
      />

      <Tab.Screen
        name="account"
        component={Feed2}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="account"
              color={focused ? "black" : "#8EC7DB"}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigation;
