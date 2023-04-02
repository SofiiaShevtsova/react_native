import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import Registration from "./Screens/Auth/RegistrationScreen/Registration";
import Login from "./Screens/Auth/LoginScreen/Login";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home/Home";
// import { AppLoading } from "expo";

const Stack = createNativeStackNavigator();

export default App = () => {
  const [isReady, setIsReady] = useState(false);
  const [user, setUser] = useState(true);

  const loadFonts = async () => {
    await Font.loadAsync({
      "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
      "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    });
    setIsReady(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);
  const LoginScreen = () => {
    return <Login user={setUser} />;
  };

  const RegisterScreen = () => {
    return <Registration user={setUser} />;
  };

  return (
    <>
      {!isReady ? (
        <View style={styles.container} />
      ) : (
        <NavigationContainer>
          {user ? (
            <Home user={setUser} />
          ) : (
            <Stack.Navigator
              initialRouteName="Registration"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Registration" component={RegisterScreen} />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
