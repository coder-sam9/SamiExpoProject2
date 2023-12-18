import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  Button,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import AppScreen from "../components/AppScreen";
import Colors from "../Config/Colors";
import LottieView from "lottie-react-native";
import ListItemSeparator from "../components/ListItemSeparator";

import ListItem from "../components/ListItem";
import useAuth from "../auth/useAuth";
import ImageInput from "../components/ImageInput";
import AppButton from "../components/AppButton";
function Account({ navigation }) {
  const { logout } = useAuth();
  const logoutalert = () => {
    Alert.alert(
      "Logout",
      " Are you sure to logout? IF YO ARE CHECKING ITS DEMO THEN DONT CLICK YES BCZ ITS ALREADY NOT LOGED IT",
      [
        {
          text: "yes",
          onPress: logout,
        },
        { text: "No, I believe on the app" },
      ]
    );
  };
  return (
    <AppScreen>
      <View style={styles.Profile}>
        <View
          style={{
            backgroundColor: Colors.secondary,
            borderRadius: 35,
            height: 70,
            width: 70,
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "yellow",
            shadowOffset: {
              width: -50,
              height: -18,
            },
            shadowOpacity: 1,
            shadowRadius: 8,
            elevation: 6,
          }}
        >
          <FontAwesome name="user-circle-o" size={24} color="black" />
        </View>
        <Text>Mohammed Sami Uddin</Text>
      </View>
      <View style={{ height: 10 }}></View>
      <View>
        <ListItem
          title={"Listings posted by you"}
          subTitle={"10 and one is uploading"}
        />
        <View style={{ height: 10 }}></View>
        <TouchableOpacity onPress={() => navigation.navigate("MessagesScreen")}>
          <ListItem
            title={"Messages"}
            subTitle={"im interested when can you deliver it?"}
          />
        </TouchableOpacity>
        <View style={{ height: 10 }}></View>
        <TouchableOpacity onPress={logoutalert}>
          <ListItem
            title={"Logout"}
            subTitle={
              "we appologise you are leaving us, dont hesitate to rejoined us "
            }
          />
        </TouchableOpacity>
      </View>
      <View>
        <AppButton
          onPress={() => navigation.navigate("WhatsappScreen")}
          title={"Click here to on the sample screens"}
        />
      </View>
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  Profile: {
    backgroundColor: "#009BBE",
    height: 100,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  options: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: -18,
    },
    shadowOpacity: 10,
    shadowRadius: 8,
    elevation: 6,
  },
});
export default Account;
