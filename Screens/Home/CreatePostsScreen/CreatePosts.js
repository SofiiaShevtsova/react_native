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
import { Camera, CameraType } from "expo-camera";
import * as Location from "expo-location";

const CreatePosts = ({ navigation }) => {
  const [image, setImage] = useState("");
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [placeName, setPlaceName] = useState("");
  const [place, setPlace] = useState("");
  const [status, requestPermission] = Camera.useCameraPermissions();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [statusLoc, requestPermissionLoc] = Location.useBackgroundPermissions();

  const onAddImage = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(photo.uri);
      setImage(photo.uri);
    }
  };

  const onPublish = () => {
    console.log(`Place ${placeName} in ${place}`);
    navigation.navigate("Publications", { image });
    setPlace("");
    setImage("");
    setPlaceName("");
  };

  if (status === null) {
    return <View />;
  }
  if (status === false) {
    return <Text>No access to camera</Text>;
  }

  useEffect(() => {
    (async () => {
      if (statusLoc !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  if (errorMsg) {
    setPlace(errorMsg);
  } else if (location) {
    setPlace(JSON.stringify(location));
  }

  return (
    <ContainerAll>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
