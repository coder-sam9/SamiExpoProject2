import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

function AppCard({ title, imageURL, price }) {
  return (
    <View
      style={{
        // flex: 1,
        borderRadius: 15,
        justifyContent: "center",
        width: "100%",
        overflow: "hidden",
        shadowOffset: 20,
        shadowColor: "black",
        shadowOpacity: 1,
      }}
    >
      <Image
        style={{
          width: "100%",
          height: 200,
        }}
        source={{ uri: imageURL }}
      />
      <View style={{ backgroundColor: "#f2e6c4" }}>
        <Text> {title} </Text>
        <Text
          style={{
            paddingLeft: 5,
          }}
        >
          ₹{price}
        </Text>
      </View>
    </View>
  );
}

export default AppCard;
