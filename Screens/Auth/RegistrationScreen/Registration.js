import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useDispatch } from "react-redux";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase/config";
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
import { registerNewUser } from "../../../redux/Auth/authOperation";
import ContainerAuth from "../../../Components/ContainerAuth";
import styles from "../Style/styleAuthPages";

const Registration = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [showPass, setShowPass] = useState(true);

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
    const currentImage = new Promise((res, rej) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = (event) => {
        res(xhr.response);
      };
      xhr.open("GET", result.assets[0].uri, true);
      xhr.send();
    }).then((res) => {
      const metadata = {
        contentType: "image/*",
      };
      const storageRef = ref(storage, "images/" + res._data.name);
      const uploadTask = uploadBytesResumable(storageRef, res, metadata);
      uploadTask.on(
        "upload",
        (snapshot) => {},
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImage(downloadURL);
          });
        }
      );
    });
  };

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
