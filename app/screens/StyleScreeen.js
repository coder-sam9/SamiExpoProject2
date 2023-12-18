import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

function StyleScreeen(props) {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View style={styles.boxstyle}></View>
      <View style={styles.boxstyle1}></View>
      <View style={styles.boxstyle2}></View>
      <View style={styles.boxstyle3}></View>
      <View style={styles.boxstyle4}></View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  boxstyle: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    borderColor: "blue",
    borderWidth: 20,
    margin: 20,
  },
  boxstyle1: {
    width: 100,
    height: 100,
    backgroundColor: "yellow",
    borderColor: "blue",
    borderWidth: 20,
  },
  boxstyle2: {
    width: 100,
    height: 100,
    backgroundColor: "brown",
    borderColor: "blue",
    borderWidth: 20,
    borderRadius: 50,
  },
  boxstyle3: {
    width: 100,
    height: 100,
    backgroundColor: "brown",
    borderColor: "gold",
    borderWidth: 20,
    borderRadius: 20,
    borderTopLeftRadius: 20,
  },
  boxstyle4: {
    width: 100,
    height: 100,
    backgroundColor: "#b82c89",
    borderColor: "gold",
    borderWidth: 20,
    borderRadius: 20,
    borderTopLeftRadius: 20,
  },
});

export default StyleScreeen;
