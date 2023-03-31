import ContainerAll from "../../Components/ContainerAll";
// import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import styles from "../Home/styleHomePages";


const Posts = () => {

  return (
    <ContainerAll>
            <View style={styles.userContainer}>
        <View>
          <Image
            source={require("../../images/add-min.png")}
            style={{ width: 60, height: 60 }}
          />
        </View>
        <View>
          <Text style={styles.userName}>User name</Text>
          <Text style={styles.userEmail}>User email</Text>
        </View>
      </View>

    </ContainerAll>
  );
};

export default Posts;
