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
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useDispatch } from "react-redux";
import { registerNewUser } from "../../../redux/Auth/authOperation";
import addImages from "../../../utils/addImage";
import styles from "../Style/styleAuthPages";

const Registration = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [showPass, setShowPass] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const dispatch = useDispatch();

  const nameHandler = (text) => setName(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);
  const showPassword = () => setShowPass(!showPass);

  const onSignUp = () => {
    const user = { email, password, name, image };
    dispatch(registerNewUser(user));
    setImage("");
    setName("");
    setEmail("");
    setPassword("");
  };

  const onAddAvatar = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    if (result.canceled) {
      return;
    }

    addImages(result.assets[0].uri, "avatar/", setImage);
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
        <View
          style={{
            ...styles.containerRegister,
            marginBottom: isShowKeyboard ? -160 : 0,
          }}
        >
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
            <Image
              source={{ uri: `${image}` }}
              style={{ ...styles.containerForAvatar, width: 120, height: 120 }}
            />
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
              onFocus={handleFocus}
            />
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
