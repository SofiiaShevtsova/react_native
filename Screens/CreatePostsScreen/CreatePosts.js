import ContainerAll from "../../Components/ContainerAll";
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
import styles from "./styleCreatePosts";

const CreatePosts = () => {
  const [image, setImage] = useState("");
  const [placeName, setPlaceName] = useState("");
  const [place, setPlace] = useState("");

  const onAddImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (result.canceled) {
      return;
    }
    setImage(result.assets[0].uri);
  };

  const onPublish = () => {
    console.log(`Place ${placeName} in ${place}`);
    setPlace("");
    setImage("");
    setPlaceName("");
  };

  return (
    <ContainerAll>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          {!image ? (
            <Pressable onPress={onAddImage}>
              <View>
                <Image
                  source={require("../../images/add-min.png")}
                  style={{ width: "100%", height: 240 }}
                />
              </View>
            </Pressable>
          ) : (
            <View>
              <Image
                source={{ uri: `${image}` }}
                style={{ width: "100%", height: 240 }}
              />
            </View>
          )}
          <Text style={styles.imageText}>Add image</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <TextInput
              placeholder="Place"
              placeholderTextColor="#BDBDBD"
              style={styles.input}
              value={placeName}
              onChangeText={(text) => {
                setPlaceName(text);
              }}
            />
            <TextInput
              placeholder="Сoordinates"
              placeholderTextColor="#BDBDBD"
              style={styles.input}
              value={place}
              onChangeText={(text) => {
                setPlace(text);
              }}
            />
          </KeyboardAvoidingView>
          <Pressable style={styles.publishBtn} onPress={onPublish}>
            <Text>Publish</Text>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
      <Pressable style={styles.deleteBtn}>
        <Image
          source={require("../../images/grid-min.png")}
          style={{ width: 40, height: 40 }}
        />
      </Pressable>
    </ContainerAll>
  );
};

export default CreatePosts;
