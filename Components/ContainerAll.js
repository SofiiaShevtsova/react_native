import React, { useState } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";

const ContainerAll = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
});

export default ContainerAll;
