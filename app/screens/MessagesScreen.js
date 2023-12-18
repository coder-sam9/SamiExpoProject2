import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import AppScreen from "../components/AppScreen";
// import Swipeable from "react-native-gesture-handler/Swipeable";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

function MessagesScreen(props) {
  const [refreshing, setRefreshing] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "1",
      title: "Mohammed Irfan",
      description: "3 Listings",
      image: require("../assets/image3.jpg"),
    },
    {
      id: "2",
      title: "Mark Zuckerberg",
      description: "5 Listings",
      image: require("../assets/image3.jpg"),
    },
    {
      id: "3",
      title: "Shahnawaz",
      description: "4 Listings",
      image: require("../assets/image3.jpg"),
    },
    {
      id: "4",
      title: "Newton",
      description: "20 Listings",
      image: require("../assets/image3.jpg"),
    },
  ]);

  return (
    <AppScreen style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("ok")}
            renderRightActions={() => (
              <ListItemDeleteAction
                onPress={() => {
                  console.log("Item.id:" + item.id);
                  setMessages(messages.filter(messages.id !== item.id));
                }}
              />
            )}
          />
        )}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: "1",
              title: "Mohammed Irfan",
              description: "300 Listings",
              image: require("../assets/image3.jpg"),
            },
            {
              id: "2",
              title: "Mark Zuckerberg",
              description: "500 Listings",
              image: require("../assets/image3.jpg"),
            },
            {
              id: "3",
              title: "Shahnawaz",
              description: "5 Listings",
              image: require("../assets/image3.jpg"),
            },
            {
              id: "4",
              title: "newton",
              description: "5 Listings",
              image: require("../assets/image3.jpg"),
            },
          ])
        }
        ItemSeparatorComponent={ListItemSeparator}
      />
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    padding: 15,
  },
});
export default MessagesScreen;
