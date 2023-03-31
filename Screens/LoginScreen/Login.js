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
import styles from "../Style/styleAuthPages";
import ContainerAuth from "../../Components/ContainerAuth";

const Login = ({ navigation, user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(true);

  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const SignIn = () => {
    console.log("User", `${email}, ${password}`);
    user(email)
    setEmail("");
    setPassword("");
  };
  const showPassword = () => setShowPass(!showPass);

  return (
    <ContainerAuth>
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
          <Pressable onPress={() => navigation.navigate("Registration")}>
            <Text style={styles.link}>If you are not registered. Sign up!</Text>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </ContainerAuth>
  );
};

export default Login;
