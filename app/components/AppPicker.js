import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  View,
  Text,
  StyleSheet,
  Modal,
  FlatList,
  Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../Config/Colors";
import AppScreen from "./AppScreen";

import PickerItem from "../components/PickerItem";

function AppPicker({ items, placeholder, onSelectItem, selectedItem, icon }) {
  const [ModalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <MaterialCommunityIcons
            name="apps"
            size={25}
            color="blue"
            style={{ paddingLeft: 10 }}
          />
          <Text style={{ paddingLeft: 10, fontSize: 20 }}>
            {selectedItem ? selectedItem.name : placeholder}
          </Text>
          <MaterialCommunityIcons
            style={{ paddingLeft: 200 }}
            name="chevron-down"
            size={35}
            color="red"
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal
        visible={ModalVisible}
        animationType="slide"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <AppScreen>
          <FlatList
            data={items}
            numColumns={3}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <PickerItem
                name={item.name}
                icon={item.icon}
                backgroundColor={item.backgroundColor}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
          <View
            style={{
              width: "100%",
              backgroundColor: Colors.secondary,
              flexDirection: "row",
            }}
          >
            <MaterialCommunityIcons
              style={{ paddingLeft: 50 }}
              name="chevron-down"
              size={45}
              color="red"
              onPress={() => setModalVisible(false)}
            />
            <MaterialCommunityIcons
              style={{ paddingLeft: 50 }}
              name="chevron-down"
              size={45}
              color="red"
              onPress={() => setModalVisible(false)}
            />
            <MaterialCommunityIcons
              name="chevron-down"
              size={45}
              color="red"
              onPress={() => setModalVisible(false)}
              style={{ paddingLeft: 50, height: 30 }}
            />
            <MaterialCommunityIcons
              style={{ paddingLeft: 50 }}
              name="chevron-down"
              size={45}
              color="red"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </AppScreen>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 25,
    marginVertical: 10,
  },
});

export default AppPicker;
