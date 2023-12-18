import React, { useState } from "react";
import { TextInput, Text, View, Platform } from "react-native";
import AppScreen from "./AppScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../Config/Colors";
import Colors from "../Config/Colors";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View
      style={{
        flexDirection: "row",
        borderRadius: 25,
        backgroundColor: "#c0c0c0",
        // width: 300,

        padding: 15,
        alignItems: "center",
        marginVertical: 5,
      }}
    >
      <MaterialCommunityIcons name={icon} size={25} color={Colors.primary} />
      <TextInput
        style={{
          color: "black",
          fontSize: 18,
          paddingLeft: 20,
          fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        }}
        {...otherProps}
      />
    </View>
  );
}

export default AppTextInput;
