import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import AppCard from "../components/AppCard";
import ListItem from "../components/ListItem";
import listingsApi from "../api/Listings";
import userApi from "../api/userCalls";
import Listings from "../api/Listings";
import AppScreen from "../components/AppScreen";
function ListingDetailsScreen({ route }) {
  const { listingId } = route.params;
  const [cardData, setCardData] = useState(null);
  const [userData, setUserData] = useState(null);
  const getDetails = async () => {
    const response = await listingsApi.getListing(listingId);
    if (response.ok) {
      const userInfo = await userApi.getUser(response.data.userId);
      setCardData(response.data);
      // console.log(userInfo.data);
      setUserData(userInfo.data);
    } else console.log("Error fetching data");
  };
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <AppScreen>
      {cardData ? (
        <AppCard
          title={cardData.title}
          price={cardData.price}
          imageURL={cardData.images[0].url}
        />
      ) : (
        <></>
      )}
      {userData ? (
        <ListItem
          title={userData.name}
          subTitle={userData.listings + " listings"}
          image={require("../assets/image3.jpg")}
        />
      ) : (
        <></>
      )}
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
});

export default ListingDetailsScreen;
