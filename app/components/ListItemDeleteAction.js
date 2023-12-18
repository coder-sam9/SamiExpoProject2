import React from "react";
import { View, TouchableWithoutFeedback, onPress } from "react-native";
import Colors from "../Config/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItemDeleteAction(props) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{ width: 70, backgroundColor: "center", alignItems: "center" }}
      >
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={Colors.dark}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ListItemDeleteAction;
