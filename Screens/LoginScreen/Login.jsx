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
} from "react-native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const SignIn = () => {
    console.log("User", `${email}, ${password}`);
    setEmail("");
    setPassword("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Log in</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
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

          <Pressable style={styles.buttonMy} onPress={SignIn}>
            <Text style={styles.nameButton}>Sign in</Text>
          </Pressable>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 110,
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
});

export default Login;
