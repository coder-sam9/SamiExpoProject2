import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import AppScreen from "./AppScreen";

function Txtinput(props) {
  const [name, setName] = useState("");

  return (
    <AppScreen
      style={{
        flex: 1,

        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "grey",
      }}
    >
      <TextInput
        placeholder={"enter your text"}
        style={{
          paddingTop: 40,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 5,
          paddingLeft: 5,
          backgroundColor: "grey",
        }}
        onChangeText={(text) => setName(text)}
        value={name}
      >
        <Text style={{ fontSize: 30, marginTop: 10 }}>{name} </Text>
      </TextInput>
    </AppScreen>
  );
}

export default Txtinput;
