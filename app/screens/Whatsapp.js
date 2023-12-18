import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import Feed2 from "../navigation/Feed2";

function Whatsapp({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "flex-start",
        flexDirection: "column",
        backgroundColor: "grey",
        marginTop: 40,
      }}
    >
      <View
        style={{
          width: "50%",
          height: 80,
          backgroundColor: "#0e0e0e",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            padding: 10,
          }}
        >
          Whatsapps
        </Text>

        <View
          style={{
            width: "100%",
            height: 80,
            backgroundColor: "green",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <FontAwesome name="search" size={24} color="black" />

          <SimpleLineIcons name="options-vertical" size={24} color="black" />
        </View>
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "flex-end",
          height: 50,
          backgroundColor: "green",
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingTop: 20,
        }}
      >
        <FontAwesome name="camera" size={24} color="white" />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Chats
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Status
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Calls
        </Text>
      </View>
      <ScrollView
        style={{
          flex: 1,
        }}
        horizontal="True"
      >
        <TouchableOpacity onPress={() => navigation.navigate("WelcomeScreen")}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={styles.profile}>
              <FontAwesome name="user-circle-o" size={24} color="black" />
            </View>
            <View style={styles.chats}>
              <Text style={styles.txts}>this is a touchable component</Text>
              <Text style={styles.msg}>
                plz click here to go to another sample screen
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.profile}>
            <FontAwesome name="user-circle-o" size={24} color="black" />
          </View>
          <View style={styles.chats}>
            <Text style={styles.txts}>this is chat2</Text>
            <Text style={styles.msg}>this is the msg</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.profile}>
            <FontAwesome name="user-circle-o" size={24} color="black" />
          </View>
          <View style={styles.chats}>
            <Text style={styles.txts}>this is chat3</Text>
            <Text style={styles.msg}>this is the msg</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.profile}>
            <FontAwesome name="user-circle-o" size={24} color="black" />
          </View>
          <View style={styles.chats}>
            <Text style={styles.txts}>this is chat4</Text>
            <Text style={styles.msg}>this is the msg</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.profile}>
            <FontAwesome name="user-circle-o" size={24} color="black" />
          </View>
          <View style={styles.chats}>
            <Text style={styles.txts}>this is chat5</Text>
            <Text style={styles.msg}>this is the msg</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.profile}>
            <FontAwesome name="user-circle-o" size={24} color="black" />
          </View>
          <View style={styles.chats}>
            <Text style={styles.txts}>this is chat6</Text>
            <Text style={styles.msg}>this is the msg</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.profile}>
            <FontAwesome name="user-circle-o" size={24} color="black" />
          </View>
          <View style={styles.chats}>
            <Text style={styles.txts}>this is chat7</Text>
            <Text style={styles.msg}>this is the msg</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.profile}>
            <FontAwesome name="user-circle-o" size={24} color="black" />
          </View>
          <View style={styles.chats}>
            <Text style={styles.txts}>this is chat8</Text>
            <Text style={styles.msg}>this is the msg</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.profile}>
            <FontAwesome name="user-circle-o" size={24} color="black" />
          </View>
          <View style={styles.chats}>
            <Text style={styles.txts}>this is chat9</Text>
            <Text style={styles.msg}>this is the msg</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.profile}>
            <FontAwesome name="user-circle-o" size={24} color="black" />
          </View>
          <View style={styles.chats}>
            <Text style={styles.txts}>this is chat10</Text>
            <Text style={styles.msg}>this is the msg</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.profile}>
            <FontAwesome name="user-circle-o" size={24} color="black" />
          </View>
          <View style={styles.chats}>
            <Text style={styles.txts}>this is chat11</Text>
            <Text style={styles.msg}>this is the msg</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={styles.profile}>
            <FontAwesome name="user-circle-o" size={24} color="black" />
          </View>
          <View style={styles.chats}>
            <Text style={styles.txts}>this is chat12</Text>
            <Text style={styles.msg}>this is the msg</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  chats: {
    width: "80%",
    height: 70,
    backgroundColor: "#4287f5",
  },
  profile: {
    width: "20%",
    height: 70,
    backgroundColor: "#4287f5",
    justifyContent: "center",
    alignItems: "center",
  },
  txts: {
    fontSize: 23,
    fontStyle: "italic",
    fontWeight: "bold",
    // position: "absolute",
  },
  msg: {
    fontSize: 15,
    color: "white",
  },
});

export default Whatsapp;
