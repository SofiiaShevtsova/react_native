import ContainerAll from "../../../Components/ContainerAll";
import React, { useState, useEffect } from "react";
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
import { Camera, CameraType } from "expo-camera";
import * as Location from "expo-location";
import * as MediaLibrary from "expo-media-library";

const CreatePosts = ({ navigation }) => {
  const [image, setImage] = useState("");
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [placeName, setPlaceName] = useState("");
  const [place, setPlace] = useState("");
  const [status, requestPermission] = useState(null);
  const [mainLocation, setMainLocation] = useState({
    latitude: "",
    longitude: "",
  });


  console.log(mainLocation);
  const onAddImage = async () => {
    let location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };

    setMainLocation({ latitude, longitude });
    const url = `http://api.geonames.org/findNearbyPlaceNameJSON?lat=${latitude}&lng=${longitude}&username=alenaushakova`;
    try {
      const response = await fetch(url);
      const result = await response.json();

      const position = `${result.geonames[0].name}, ${result.geonames[0].countryName}`;
      setPlace(position);
    } catch (error) {
      console.error(error);
    }

    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(photo.uri);
      setImage(photo.uri);
    }
  };

  const onPublish = async () => {
    const post = { image, place, mainLocation, placeName };
    navigation.navigate("Publications", { post });
    setPlace("");
    setImage("");
    setPlaceName("");
    setMainLocation(null);
  };

  const clearPost = () => {
    setPlace("");
    setImage("");
    setPlaceName("");
    setMainLocation(null);
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      requestPermission(status === "granted");
    })();
  }, []);
    useEffect(() => {
(async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      requestPermission(status === "granted");
    })();
  }, []);


  return (
    <ContainerAll>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View>
            {!image ? (
              <Camera
                style={styles.camera}
                ref={(ref) => setCameraRef(ref)}
                type={type}
              >
                <Pressable
                  style={styles.snapBtn}
                  onPress={() => {
                    setType((current) =>
                      current === CameraType.back
                        ? CameraType.front
                        : CameraType.back
                    );
                  }}
                >
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
            ) : (
              <View>
                <Image
                  source={{ uri: `${image}` }}
                  style={{ width: "100%", height: 240 }}
                />
              </View>
            )}
            <Text style={styles.imageText}>
              {!image ? "Add image" : "Update image"}
            </Text>
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
            <Pressable
              style={image ? styles.publishBtn : styles.publishBtnDis}
              onPress={onPublish}
              disabled={!image ? true : false}
            >
              <Text
                style={image ? styles.publishBtnText : styles.publishBtnTextDis}
              >
                Publish
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      {image && (
        <Pressable style={styles.deleteBtn} onPress={clearPost}>
          <MaterialCommunityIcons
            name="cup"
            color="rgba(33, 33, 33, 0.8)"
            size={30}
          />
        </Pressable>
      )}
    </ContainerAll>
  );
};

export default CreatePosts;
