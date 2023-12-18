import React, { useEffect, useState, useRef } from "react";
import * as ImagePicker from "expo-image-picker";
import {
  Alert,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../Config/Colors";
import { useFormikContext } from "formik";

function ImageInput({}) {
  const { values, setFieldValue } = useFormikContext();
  const scrollView = useRef();
  const [imageUri, setImageUri] = useState(null);
  //Multiple images
  const [imageUris, setImageUris] = useState([]);

  const requestPermission = async () => {
    const response = await ImagePicker.getCameraPermissionsAsync();
    const response1 = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!response.granted) console.log("Permission not granted");
    if (!response1.granted) console.log("Permission for file not granted");
  };
  useEffect(() => {
    requestPermission();
  }, []);
  const handleRemove = (uri) => {
    Alert.alert("Delete", "Are you sure you want to delete this image?", [
      {
        text: "Yes",
        onPress: () => {
          setFieldValue(
            "images",
            values.images.filter((imageUri) => imageUri !== uri)
          );
        },
      },
      { text: "No" },
    ]);
  };

  const handlePress = async () => {
    // Alert.alert("upload", "How you want to take this image?", [
    //   {
    //     text: "local",
    //     onPress: async () => {
    //       const result = await ImagePicker.launchImageLibraryAsync({
    //         mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //         quality: 0.5,
    //         allowsEditing: true,
    //         allowsMultipleSelection: true,
    //       });
    //     },
    //   },
    //   {
    //     text: "camera",
    //     onPress: async () => {
    //       const result1 = await ImagePicker.launchCameraAsync({
    //         mediaTypes: ImagePicker.MediaTypeOptions.Images,
    //         quality: 0.5,
    //       });
    //     },
    //   },
    // ]);
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
      allowsEditing: true,
      allowsMultipleSelection: true,
    });
    if (!result.cancelled) {
      setFieldValue("images", [...values.images, result.uri]);
    }
  };
  return (
    <View style={{ flexDirection: "row" }}>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        {values.images.map((imgUri) => {
          return (
            <TouchableWithoutFeedback
              onPress={() => handleRemove(imgUri)}
              key={imgUri}
            >
              <View style={styles.container}>
                <Image source={{ uri: imgUri }} style={styles.image} />
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
          <MaterialCommunityIcons
            color={Colors.other2}
            name="camera"
            size={40}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 5,
    backgroundColor: Colors.primary,
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    marginVertical: 10,
    overflow: "hidden",
    width: 100,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
export default ImageInput;
