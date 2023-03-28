import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import Registration from "./Screens/RegistrationScreen/Registration";
import Login from "./Screens/LoginScreen/Login";

export default App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./images/BG-min.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Registration />
        {/* <Login /> */}
      </ImageBackground>
    </View>
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
