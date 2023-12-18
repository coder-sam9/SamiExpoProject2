import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, View, TouchableOpacity } from "react-native";
import AppCard from "../components/AppCard";
import AppScreen from "../components/AppScreen";
import ListItem from "../components/ListItem";
import ListingsApi from "../api/Listings";
import ListItemSeparator from "../components/ListItemSeparator";
import AppButton from "../components/AppButton";
import AppNavigation from "../navigation/AppNavigation";
const offlineData = [
  {
    id: 1,
    title: "Designer wear shoes",
    images: [{ fileName: "shoes1" }],
    categoryId: 5,
    price: 100,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 2,
    title: "Canon 400D (Great Condition)",
    images: [{ fileName: "camera1" }],
    price: 300,
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 3,
    title: "Nikon D850 for sale",
    images: [{ fileName: "camera2" }],
    price: 350,
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 4,
    title: "Sectional couch - Delivery available",
    description: "No rips no stains no odors",
    images: [{ fileName: "image1" }],
    categoryId: 1,
    price: 950,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 5,
    title: "Brown leather shoes",
    images: [{ fileName: "shoes2" }],
    categoryId: 5,
    price: 50,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
];

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    loadListings();
  }, []);
  const loadListings = async () => {
    const response = await ListingsApi.getListings();
    // console.log(response);
    if (response.ok) setListings(response.data);
    else {
      console.log("Error fetching data");
      setListings(offlineData);
    }
  };
  return (
    <AppScreen style={{ backgroundColor: "red" }}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ListingDetails", { listingId: item.id })
              }
            >
              <AppCard
                imageURL={item.images[0].url}
                title={item.title}
                price={item.price}
              />
            </TouchableOpacity>
          </View>
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2e6c4",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
});

export default ListingsScreen;
