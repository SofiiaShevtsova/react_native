import ContainerAll from "../../../Components/ContainerAll";
import { Text, View, FlatList, Image } from "react-native";
import styles from "./Post/stylePosts";
import { useEffect } from "react";
import OnePost from "./Post/OnePost";
import { useSelector, useDispatch } from "react-redux";
import {
  getEmail,
  getAvatar,
  getName,
} from "../../../redux/Auth/authSelectors";
import { getAllPosts } from "../../../redux/Posts/postsOperation";
import { getPosts, isChanged } from "../../../redux/Posts/postsSelectors";

const Posts = ({ navigation }) => {
  const posts = useSelector(getPosts);
  const name = useSelector(getName);
  const avatar = useSelector(getAvatar);
  const email = useSelector(getEmail);
  const changed = useSelector(isChanged)

  const dispatch = useDispatch();

  useEffect(() => {
    if(changed){dispatch(getAllPosts());}
  }, [changed]);

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
