import React, { useState } from "react";
import { View, ImageBackground } from "react-native";
import { StyleSheet } from "react-native";

const ContainerAuth = ({ children }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/BG-min.png")}
        resizeMode="cover"
        style={styles.image}
      >
        {children}
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

export default ContainerAuth;
