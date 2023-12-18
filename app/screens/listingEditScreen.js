import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import AppPicker from "../components/AppPicker";
import AppButton from "../components/AppButton";
import listingsApi from "../api/Listings";
import * as yup from "yup";
import ImageInput from "../components/ImageInput";
import * as Location from "expo-location";
import AppTextInput from "../components/AppTextInput";
import UploadScreen from "./UploadScreen";
import { Formik } from "formik";
const ValidationSchema = yup.object().shape({
  title: yup.string().required().min(1).label("Title"),
  price: yup.number().required().min().label("price"),
  description: yup.string().label("Description"),
  category: yup.object().required().nullable().label("Category"),
  images: yup.array().min(1, "PLease slect atleast one pic for the buyers"),
});
function listingEditScreen(props) {
  const [categories, setCategories] = useState(null);
  const [progress, setProgress] = useState();
  const [location, setLocation] = useState();
  const [UploadVisible, setUploadVisible] = useState();

  //Hold category to pass to the backend
  const createListing = async (values) => {
    setProgress(0);
    setUploadVisible(true);
    const response = await listingsApi.addListing(
      { ...values, location },
      (progress) => setProgress(progress)
    );
    // console.log(response);
    if (!response.ok) {
      setUploadVisible(false);
      return alert("can't save plz try later");
    } else {
      setUploadVisible(false);
    }
  };
  const getCategories = async () => {
    const response = await listingsApi.getCategories();
    //console.log(response);
    if (response.ok) {
      setCategories(response.data);
    } else console.log("Error fetching data Categories on ListingEdit");
  };
  useEffect(() => {
    getCategories();
    getLocation();
  }, []);
  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted")
      console.log("Permission for location is not granted");
    else {
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});
      setLocation({ latitude, longitude });
      console.log({ latitude, longitude });
    }
  };

  //Hold category to pass to the backend
  const [category, setCategory] = useState(null);
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1, padding: 10 }}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={UploadVisible}
      />
      <Formik
        initialValues={{
          title: "",
          price: "",
          categoryId: "",
          description: "",
          images: [],
        }}
        onSubmit={(values) => createListing(values)}
      >
        {({
          handleChange,
          setFieldValue,
          handleSubmit,
          values,
          errors,
          inValid,
        }) => (
          <>
            <ImageInput />
            <AppTextInput
              placeholder="Title"
              onChangeText={handleChange("title")}
              value={values.title}
            />
            {errors.title && (
              <Text style={{ fontSize: 14, color: "red" }}>{errors.title}</Text>
            )}
            <AppTextInput
              placeholder="Price"
              onChangeText={handleChange("price")}
              value={values.price}
            />
            <AppTextInput
              placeholder="Description"
              onChangeText={handleChange("description")}
              value={values.description}
            />

            <AppPicker
              icon="apps"
              selectedItem={category}
              placeholder="Categories"
              items={categories}
              onSelectItem={(item) => {
                setCategory(item), setFieldValue("categoryId", item.id);
              }}
            />
            <AppButton onPress={handleSubmit} title={"Post Listings"} />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
}

export default listingEditScreen;
