import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

function TextScreen(props) {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text style={styles.txtstyle}>
        this is the text visible on the screen
      </Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  txtstyle: {
    fontSize: 26,
    fontStyle: "italic",
    textTransform: "capitalize",
    color: "#db14ad",
  },
});

export default TextScreen;
