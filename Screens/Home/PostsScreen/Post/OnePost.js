import { View, Image, Pressable, Text } from "react-native";
import styles from "./stylePosts";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const OnePost = ({ postOne, navigation }) => {
  const {post:{image, place, placeName, placeLocation}} = postOne
  return (
        <View style={styles.post}>
          <View style={styles.postImage}>
            <Image
              source={{ uri: `${image}` }}
              style={{ width: "100%", height: 240 }}
            />
          </View>
          <Text style={styles.postName}>{placeName || "Not Found"}</Text>
          <View style={styles.navBoxMapCom}>
            <Pressable style={styles.btnNav} onPress={() => navigation.navigate("Comments", {image})}>
              <MaterialCommunityIcons
                name="comment"
                color="#BDBDBD"
                size={24}
              />
              <Text style={styles.comment}>0</Text>
            </Pressable>
            <Pressable style={styles.btnNav} onPress={() => navigation.navigate("Map")}>
              <MaterialCommunityIcons
                name="marker"
                color="#BDBDBD"
                size={24}
              />
              <Text style={styles.location}>{ place || "Not Found" }</Text>
            </Pressable>
          </View>
        </View>
  );
};

export default OnePost;
