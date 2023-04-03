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
import styles from "../Style/styleAuthPages";
import ContainerAuth from "../../../Components/ContainerAuth";

const Registration = ({ navigation, user }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [showPass, setShowPass] = useState(true);

  const nameHandler = (text) => setName(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const onSignUp = () => {
    console.log("User", `${name}, ${email}, ${password}`);
    setName("");
    setEmail("");
    setPassword("");
    user(email)
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
  const showPassword = () => setShowPass(!showPass);

  return (
    <ContainerAuth>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.containerRegister}>
          {!image ? (
            <Pressable onPress={onAddAvatar}>
              <View style={styles.containerForAvatar}>
                <Image
                  source={require("../../../images/add-min.png")}
                  style={{ ...styles.imageAdd, width: 25, height: 25 }}
                />
              </View>
            </Pressable>
          ) : (
            <View style={styles.containerForAvatar}>
              <Image
                source={{ uri: `${image}` }}
                style={{ width: 120, height: 120 }}
              />
            </View>
          )}
          <Text style={styles.title}>Registration</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <TextInput
              placeholder="Username"
              placeholderTextColor="#BDBDBD"
              style={styles.input}
              value={name}
              onChangeText={nameHandler}
            />
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
          <Pressable style={styles.buttonMy} onPress={onSignUp}>
            <Text style={styles.nameButton}>Sign up</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.link}>If you are registered. Log in!</Text>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </ContainerAuth>
  );
};

export default Registration;