import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Button,
} from "react-native";
import AppButton from "../components/AppButton";
import Colors from "../Config/Colors";
function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/image5.jpg")}
    >
      <View
        style={{
          alignItems: "center",
          position: "absolute",
          top: 70,
        }}
      >
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text
          style={{ fontSize: 24, fontWeight: "bold", color: Colors.lightcolor }}
        >
          {" "}
          These are jst the screens which i have made specially to demonstrate
          my skillset thank you
        </Text>
      </View>

      <AppButton
        onPress={() => navigation.navigate("LoginScreen")}
        title={"Click here to go on Login Screen"}
      />
      <AppButton title={"Click here to go on Login Screen"} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default WelcomeScreen;
