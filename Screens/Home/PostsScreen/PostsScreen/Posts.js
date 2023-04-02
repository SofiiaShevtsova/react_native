import ContainerAll from "../../../Components/ContainerAll";
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
import styles from "../styleHomePages";
import { useEffect, useState } from "react";

const Posts = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  console.log("route.params", route.params);
  useEffect(() => {
    if (route.params) {
      return;
    }
    setPosts((prevState) => [...prevState, route.params]);
  }, [route.params]);

  return (
    <ContainerAll>
      <View style={styles.userContainer}>
        <View>
          <Image
            source={require("../../../images/add-min.png")}
            style={{ width: 60, height: 60 }}
          />
        </View>
        <View>
          <Text style={styles.userName}>User name</Text>
          <Text style={styles.userEmail}>User email</Text>
        </View>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item, ind) => ind.toString()}
        renderItem={({ item }) => (
          <Image
            source={{ uri: `${item}` }}
            style={{ width: 60, height: 60 }}
          />
        )}
      />
    </ContainerAll>
  );
};

export default Posts;
