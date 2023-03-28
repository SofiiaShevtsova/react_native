import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styles from "../Style/style";

const Login = ({ onClicked }) => {
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
      <View style={styles.containerLogin}>
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
        <Pressable onPress={onClicked}>
          <Text style={styles.link} onClick={onClicked}>
            If you are not registered. Sign up!
          </Text>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
