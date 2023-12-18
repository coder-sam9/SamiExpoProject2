import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../Config/Colors";
import AppIcon from "./AppIcon";

function PickerItem({ icon, backgroundColor, onPress, name }) {
  return (
    <TouchableOpacity
      style={{ padding: 10, alignItems: "center" }}
      onPress={onPress}
    >
      <AppIcon name={icon} size={100} backgroundColor={Colors.other1} />
      <Text style={{ fontSize: 16 }}>{name}</Text>
    </TouchableOpacity>
  );
}

export default PickerItem;
