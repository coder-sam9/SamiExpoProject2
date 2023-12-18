import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import Colors from "../Config/Colors";
// import Swipeable from "react-native-gestures-handler/Swipeable";

function ListItem({ title, subTitle }) {
  return (
    <View
      style={{
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: Colors.other2,
      }}
    >
      <View style={{ justifyContent: "center", paddingLeft: 5 }}>
        <Image
          style={styles.profile}
          source={require("../assets/image1.jpg")}
        ></Image>
      </View>

      <View>
        <Text style={styles.name}> {title} </Text>
        <Text style={styles.msg}>{subTitle} </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  profile: {
    width: 60,
    height: 60,

    borderRadius: 35,
  },
  name: {
    fontSize: 23,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  info: {
    width: 30,
    height: 70,

    flex: 1,
    borderRadius: 10,
  },
  msg: {
    fontSize: 15,
    color: "white",
  },
});
export default ListItem;
