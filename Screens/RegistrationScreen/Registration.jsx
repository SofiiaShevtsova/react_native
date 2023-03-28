import React, { useState } from "react";
import {
  StyleSheet,
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

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (text) => setName(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const onSignUp = () => {
    console.log("User", `${name}, ${email}, ${password}`);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.containerForAvatar}>
          <Image
            source={{ uri: "https://reactjs.org/logo-og.png" }}
            style={{ ...styles.imageAvatar, width: 120, height: 120 }}
          />
          <Image
            source={require("../../images/add-min.png")}
            style={{ ...styles.imageAdd, width: 25, height: 25 }}
          />
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
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 90,
    paddingBottom: 45,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    borderRadius: 30,
    marginTop: "auto",
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    marginBottom: 30,
    color: "#212121",
  },
  input: {
    height: 50,
    padding: 16,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    borderRadius: 10,
  },
  buttonMy: {
    height: 50,
    padding: 16,
    borderRadius: 100,
    backgroundColor: "#ff6c00",
  },
  nameButton: {
    fontFamily: "Roboto",
    textAlign: "center",
    letterSpacing: 0.01,
    lineHeight: 15,
    color: "#212121",
  },
  imageAvatar: {
    backgroundColor: "#F6F6F6",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 15,
  },
  imageAdd: {
    position: "absolute",
    bottom: 14,
    right: 115,
  },
  containerForAvatar: {
    marginBottom: 30,
    marginTop: -150,
    position: "relative",
  },
});

export default Registration;
