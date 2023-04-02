import ContainerAll from "../../Components/ContainerAll";
// import React, { useState } from "react";
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
import MapView, {Marker} from "react-native-maps";

const Map = () => {
  return (
    <ContainerAll>
      <MapView>
        <Marker coordinate={{ latitude: 50.516339, longitude: 30.602185 } } title="travel photo"/>
      </MapView>
    </ContainerAll>
  );
};

export default Map;
