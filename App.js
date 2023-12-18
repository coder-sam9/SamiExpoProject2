import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import AppLoading from "expo-app-loading";
import AuthNavigation from "./app/navigation/Authnavigation";
import AppNavigation from "./app/navigation/AppNavigation";
import authContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import { NavigationContainer } from "@react-navigation/native";

export default function App({ navigation }) {
  const [isReady, setIsReady] = useState(false);
  const [user, setUser] = useState(null);
  const restoreUser = async () => {
    try {
      const userStorage = await authStorage.getUser();
      if (userStorage) {
        setUser(userStorage);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const removeUser = async () => {
    try {
      const userStorage = await authStorage.removeToken();
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };
  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );

  return (
    <authContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        {user ? <AppNavigation /> : <AuthNavigation />}
      </NavigationContainer>
    </authContext.Provider>
  );
}
