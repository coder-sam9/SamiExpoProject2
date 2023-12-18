import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import AppTextInput from "../Components/AppTextInput";

function ExamScreen(props) {
  const [currency1, setCurrency1] = useState();
  const [currency2, setCurrency2] = useState();

  return (
    <SafeAreaView
      style={{
        justifyContent: "center",

        alignItems: "center",
        flex: 1,
        marginTop: 40,
      }}
    >
      <View
        style={{
          margin: 5,
          borderRadius: 15,
          //   height: 50,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ebb725",
          padding: 8,
          paddingBottom: 5,
          borderWidth: 2,
          borderColor: "blue",
          fontSize: 30,
        }}
      >
        <Text style={{ fontSize: 20 }}> USD and INR converter</Text>
      </View>
      <View
        style={{
          justifyContent: "center",

          alignItems: "center",

          width: "95%",
          //   backgroundColor: "yellow",
          padding: 10,

          marginBottom: 10,
          borderRadius: 10,
          //   height: 200,
          borderWidth: 2,
          borderColor: "blue",
        }}
      >
        <AppTextInput
          icon={"currency-usd-circle"}
          placeholder=" USD"
          onChangeText={setCurrency1}
          keyboardType="numeric"
          widthh={"99%"}
          backGrounndColour="#f6f7fb"
          iconColor={"blue"}
        />
      </View>
      <View
        style={{
          justifyContent: "center",

          alignItems: "center",
          width: "95%",
          // backgroundColor: "yellow",
          padding: 10,

          marginBottom: 40,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: "blue",
        }}
      >
        <AppTextInput
          icon={"currency-inr"}
          placeholder={"INR"}
          onChangeText={setCurrency2}
          keyboardType="numeric"
          widthh={"99%"}
          backGrounndColour="#f6f7fb"
          iconColor={"blue"}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          Alert.alert(
            "Calculated",
            "Your given value of INR = " +
              currency2 / 75 +
              "USD" +
              "\n" +
              "Your given value of USD=" +
              currency1 * 74 +
              "INR"
          );
        }}
        style={{
          margin: 5,
          borderRadius: 15,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          fontSize: 30,
          width: "95%",
          backgroundColor: "#ebb725",
          borderWidth: 3,
          borderColor: "blue",
        }}
      >
        <Text style={{ fontSize: 20, color: "white" }}> Calculate</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default ExamScreen;
