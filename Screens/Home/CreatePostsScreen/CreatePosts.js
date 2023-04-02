import ContainerAll from "../../../Components/ContainerAll";
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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Camera } from "expo-camera";

const CreatePosts = () => {
  const [image, setImage] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [placeName, setPlaceName] = useState("");
  const [place, setPlace] = useState("");

  const onAddImage = async () => {
    console.log(cameraRef);

    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync().then(async() => {
        console.log(photo);
        await MediaLibrary.createAssetAsync(photo.uri);
      });
    }
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
          {/* {!image ? (
            <Pressable onPress={onAddImage}>
              <View>
                <Image
                  source={require("../../../images/add-min.png")}
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
          )} */}
          <Camera style={styles.camera} ref={(ref) => setCameraRef(ref)} type={type}>
            <Pressable style={styles.snapBtn} onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
              <MaterialCommunityIcons
                name="sync"
                color="rgba(33, 33, 33, 0.8)"
                size={50}
              />
            </Pressable>
                        <Pressable style={styles.snapBtn} onPress={onAddImage}>
              <MaterialCommunityIcons
                name="camera"
                color="rgba(33, 33, 33, 0.8)"
                size={50}
              />
            </Pressable>
          </Camera>
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
        <MaterialCommunityIcons
          name="cup"
          color="rgba(33, 33, 33, 0.8)"
          size={30}
        />
      </Pressable>
    </ContainerAll>
  );
};

export default CreatePosts;
