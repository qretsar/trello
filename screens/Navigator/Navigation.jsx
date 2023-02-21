import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserContext } from "../../context/userContext";
import LoginScreen from "../AuthScreens/LoginScreen";
import Boards from "../UserScreens/Boards/Boards";
import Board from "../UserScreens/Board/Board";
import { getDataFromAsyncStorage } from "../../util/auth/localStorageAuth";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Navigation = () => {
  // Create a new StackNavigator
  const Stack = createNativeStackNavigator();
  // Get user from UserContext
  const { user, setUser } = useContext(UserContext);
  //Get user from AsyncStorage
  const handleIsUserLoggedIn = (async) => {
    getDataFromAsyncStorage("user").then((data) => {
      if (data) {
        console.log("data from async storage", data);
        // Set user to data
        setUser(data);
      }
    });
  };
  // When component is mounted, get user from AsyncStorage
  useEffect(() => {
    // delete user from AsyncStorage
    // AsyncStorage.removeItem("user");
    handleIsUserLoggedIn();
  }, []);
  // Render
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user === null ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          <>
            <Stack.Screen name="Home" component={Boards} />
            <Stack.Screen name="Board" component={Board} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
