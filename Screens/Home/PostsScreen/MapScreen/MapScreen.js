import MapView, { Marker } from "react-native-maps";
import { StyleSheet } from "react-native";

const Map = ({ route }) => {
  const location = route.params;
  return (
    <MapView
      style={styles.mapContainer}
      initialRegion={{
        ...location,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker coordinate={{ ...location }} title="travel photo" />
    </MapView>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    width: "100%",
    height: "100%",
    marginHorizontal: 5,
  },
});

export default Map;
