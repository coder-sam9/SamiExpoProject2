import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../Config/Colors";
function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={Colors.other1}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
    borderColor: Colors.white,
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 10,
    bottom: 20,
  },
});

export default NewListingButton;
