import ContainerAuth from "../../../Components/ContainerAuth";
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
import { useDispatch } from "react-redux";
import { logInUser } from "../../../redux/Auth/authOperation";
import styles from "../Style/styleAuthPages";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const dispatch = useDispatch();

  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);
  const showPassword = () => setShowPass(!showPass);

  const SignIn = () => {
    const user = { email, password };
    dispatch(logInUser(user));

    setEmail("");
    setPassword("");
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleFocus = () => {
    setIsShowKeyboard(true);
  };


  return (
    <ContainerAuth>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <View style={{...styles.containerLogin, marginBottom: isShowKeyboard ? -230 : 0}}>
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
                onFocus={handleFocus}
            />
            <View style={styles.containerPassword}>
              <TextInput
                placeholder="Password"
                placeholderTextColor="#BDBDBD"
                style={styles.input}
                value={password}
                secureTextEntry={showPass}
                onChangeText={passwordHandler}
                onFocus={handleFocus}
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
