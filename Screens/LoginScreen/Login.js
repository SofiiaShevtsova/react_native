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
  const [showPass, setShowPass] = useState(true);

  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const SignIn = () => {
    console.log("User", `${email}, ${password}`);
    setEmail("");
    setPassword("");
  };
  const showPassword = () => setShowPass(!showPass);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.containerLogin}>
        <Text style={styles.title}>Log in</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TextInput
            placeholder="Email"
            placeholderTextColor="#BDBDBD"
            style={styles.input}
            value={email}
            onChangeText={emailHandler}
          />
          <View style={styles.containerPassword}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#BDBDBD"
              style={styles.input}
              value={password}
              secureTextEntry={showPass}
              onChangeText={passwordHandler}
            />
            <Pressable style={styles.passwordShow} onPress={showPassword}>
              <Text style={styles.nameButton}>Show</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
        <Pressable style={styles.buttonMy} onPress={SignIn}>
          <Text style={styles.nameButton}>Sign in</Text>
        </Pressable>
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
