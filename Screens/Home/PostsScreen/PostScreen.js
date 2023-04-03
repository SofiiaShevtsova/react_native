import ContainerAll from "../../../Components/ContainerAll";
import { Text, View, FlatList, Image } from "react-native";
import styles from "./Post/stylePosts";
import { useEffect, useState } from "react";
import OnePost from "./Post/OnePost";

const Posts = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params === undefined) {
      return;
    } else setPosts((prevState) => [...prevState, route.params]);
  }, [route.params]);
  return (
    <ContainerAll>
      <View style={styles.userContainer}>
        <View style={styles.userImage}>
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
      {posts.length > 0 && (
        <FlatList
          data={posts}
          keyExtractor={(item, ind) => ind.toString()}
          renderItem={({ item }) => (
            <OnePost postOne={item} navigation={navigation} />
          )}
        />
      )}
    </ContainerAll>
  );
};

export default Posts;
