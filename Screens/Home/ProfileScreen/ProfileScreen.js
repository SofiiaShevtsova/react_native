import ContainerAuth from "../../../Components/ContainerAuth";
import { Text, View, Pressable, Image, FlatList } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import {
  getAvatar,
  getName,
  getUserId,
} from "../../../redux/Auth/authSelectors";
import { getPosts } from "../../../redux/Posts/postsSelectors";
import { logOutUser } from "../../../redux/Auth/authOperation";
import OnePost from "../PostsScreen/Post/OnePost";
import styles from "./styleProfile";

const Profile = ({ navigation }) => {
  const postsAll = useSelector(getPosts);
  const name = useSelector(getName);
  const avatar = useSelector(getAvatar);
  const id = useSelector(getUserId);

  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logOutUser());
  };

  const posts = postsAll.filter((it) => it.owner === id);

  return (
    <ContainerAuth>
      <View style={styles.profileContainer}>
        {avatar !== "" && (
          <Image
            source={{ uri: `${avatar}` }}
            style={{ ...styles.userImage, width: 120, height: 120 }}
          />
        )}
        <Pressable onPress={logoutUser} style={styles.logoutBtn}>
          <MaterialCommunityIcons
            name="login"
            color="rgba(33, 33, 33, 0.8)"
            size={30}
          />
        </Pressable>

        <Text style={styles.nameUser}>{name}</Text>
        {posts.length > 0 && (
          <FlatList
            data={posts}
            keyExtractor={(item, ind) => ind.toString()}
            renderItem={({ item }) => (
              <OnePost postOne={item} navigation={navigation} />
            )}
          />
        )}
      </View>
    </ContainerAuth>
  );
};

export default Profile;
