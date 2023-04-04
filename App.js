import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Registration from "./Screens/Auth/RegistrationScreen/Registration";
import Login from "./Screens/Auth/LoginScreen/Login";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home/Home";
import Map from "./Screens/Home/PostsScreen/MapScreen/MapScreen";
import Comments from "./Screens/Home/PostsScreen/CommentsScreen/CommentsScreen";
import { store, persistor } from "./redux/reduxStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { useSelector } from "react-redux";
import { getEmail } from "./redux/authSelectors";

const Stack = createNativeStackNavigator();

const NavigationBox = () => {
  const user = useSelector(getEmail);
  console.log(user);

  return (
    <NavigationContainer>
      {user ? (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen name="Comments" component={Comments} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="Registration"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registration" component={Registration} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App = () => {
  const [isReady, setIsReady] = useState(false);

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

  return (
    <>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        {!isReady ? <View style={styles.container} /> : <NavigationBox />}
        {/* </PersistGate> */}
      </Provider>
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
