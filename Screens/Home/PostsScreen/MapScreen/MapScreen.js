import MapView, {Marker} from "react-native-maps";
import { StyleSheet } from "react-native";

const Map = () => {
  return (
      <MapView style={styles.mapContainer}>
        <Marker coordinate={{ latitude: 50.516339, longitude: 30.602185 } } title="travel photo"/>
      </MapView>
  );
};


const styles = StyleSheet.create({
  mapContainer: {
    width: "100%",
    height: '100%',
    marginHorizontal:5,
  },
});



export default Map;
