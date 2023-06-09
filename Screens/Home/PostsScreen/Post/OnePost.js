import { View, Image, Pressable, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./stylePosts";

const OnePost = ({ postOne, navigation }) => {
  const { image, place, location, name, comments, like, owner, date, id } =
    postOne;
  return (
    <View style={styles.post}>
      <View style={styles.postImage}>
        <Image
          source={{ uri: `${image}` }}
          style={{ width: "100%", height: 240 }}
        />
      </View>
      <Text style={styles.postName}>{name || "Not Found"}</Text>
      <View style={styles.navBoxMapCom}>
        <Pressable
          style={styles.btnNav}
          onPress={() =>
            navigation.navigate("Comments", { image, comments, id })
          }
        >
          <MaterialCommunityIcons name="comment" color="#BDBDBD" size={24} />
          <Text style={styles.comment}>{`${comments.length}`}</Text>
        </Pressable>
        <Pressable
          style={styles.btnNav}
          onPress={() => navigation.navigate("Map", location)}
        >
          <MaterialCommunityIcons name="marker" color="#BDBDBD" size={24} />
          <Text style={styles.location}>{place || "Not Found"}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default OnePost;
