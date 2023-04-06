import React, { useState } from "react";
import { View, ImageBackground } from "react-native";
import { StyleSheet } from "react-native";


const EmptyList = () => {
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
    height: "100%",
    width:"100%"
  },
});


export default EmptyList;
