import ContainerAll from "../../../Components/ContainerAll";
import { Text, View, FlatList, Image } from "react-native";
import styles from "./Post/stylePosts";
import { useEffect, useState } from "react";
import OnePost from "./Post/OnePost";
import { useSelector, useDispatch } from "react-redux";
import { getEmail, getAvatar, getName } from "../../../redux/Auth/authSelectors";

const Posts = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  const name = useSelector(getName);
  const avatar = useSelector(getAvatar);
  const email = useSelector(getEmail);

  useEffect(() => {
    if (route.params === undefined) {
      return;
    } else setPosts((prevState) => [...prevState, route.params]);
  }, [route.params]);
  return (
    <ContainerAll>
      <View style={styles.userContainer}>
        <View style={styles.userImage}>
          {avatar !== "" && (
            <Image
              source={{ uri: `${avatar}` }}
              style={{ width: 60, height: 60 }}
            />
          )}
        </View>
        <View>
          <Text style={styles.userName}>{name}</Text>
          <Text style={styles.userEmail}>{email}</Text>
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
