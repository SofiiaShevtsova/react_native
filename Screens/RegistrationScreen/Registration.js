import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
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
import styles from "../Style/style";

const Registration = ({ onClicked }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);

  const nameHandler = (text) => setName(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const onSignUp = () => {
    console.log("User", `${name}, ${email}, ${password}`);
    setName("");
    setEmail("");
    setPassword("");
  };

  const onAddAvatar = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    console.log(result);

    if (result.canceled) {
      return;
    }
    setImage(result.assets[0].uri);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.containerRegister}>
        <View style={styles.containerForAvatar}>
          {!image ? (
            <Pressable onPress={onAddAvatar}>
              <Image
                source={require("../../images/add-min.png")}
                style={{ ...styles.imageAdd, width: 25, height: 25 }}
              />
            </Pressable>
          ) : (
            <Image
              source={{ uri: `${image}` }}
              style={{ width: 120, height: 120 }}
            />
          )}
        </View>
        <Text style={styles.title}>Registration</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TextInput
            placeholder="Username"
            style={styles.input}
            value={name}
            onChangeText={nameHandler}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={emailHandler}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            value={password}
            secureTextEntry={true}
            onChangeText={passwordHandler}
          />

          <Pressable style={styles.buttonMy} onPress={onSignUp}>
            <Text style={styles.nameButton}>Sign up</Text>
          </Pressable>
        </KeyboardAvoidingView>
        <Pressable onPress={onClicked}>
          <Text style={styles.link}>If you are registered. Log in!</Text>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Registration;
