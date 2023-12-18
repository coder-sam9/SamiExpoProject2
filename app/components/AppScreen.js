import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  View,
} from "react-native";
import Constants from "expo-constants";

function AppScreen({ children }) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}
const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
});
export default AppScreen;
