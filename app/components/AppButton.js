import React from "react";
import { Button, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from "../Config/Colors";
import AppScreen from "./AppScreen";

function AppButton({ onPress, title }) {
  return (
    <AppScreen>
      <TouchableOpacity
        style={styles.buttonStyle}
        title={title}
        onPress={onPress}
      >
        <Text style={styles.txtStyle}>{title}</Text>
      </TouchableOpacity>
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  buttonStyle: {
    width: "100%",
    backgroundColor: Colors.primary,
    padding: 20,
    borderRadius: 30,
    justifyContent: "center",
    paddingLeft: 10,
    alignItems: "center",
  },
  txtStyle: {
    fontSize: 20,
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppButton;
