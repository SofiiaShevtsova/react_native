import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import Registration from "./Screens/RegistrationScreen/Registration";
import Login from "./Screens/LoginScreen/Login";
import * as Font from "expo-font";
// import { AppLoading } from "expo";


export default App = () => {
  const [login, setLogin] = useState(true);
  const [isReady, setIsReady] = useState(false);

  const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });
  setIsReady(true)
};


  useEffect(() => {
    loadFonts()
  }, []);

  const onClick = () => setLogin(!login);
  return (
    <>
      {!isReady ? (
        <View style={styles.container}/>
      ) : (
        <View style={styles.container}>
          <ImageBackground
            source={require("./images/BG-min.png")}
            resizeMode="cover"
            style={styles.image}
          >
            {login ? (
              <Registration onClicked={onClick} />
            ) : (
              <Login onClicked={onClick} />
            )}
          </ImageBackground>
        </View>
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
