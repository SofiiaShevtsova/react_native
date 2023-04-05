import ContainerAll from "../../../../Components/ContainerAll";
import {
  Text,
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Image,
} from "react-native";
import styles from "../Post/stylePosts";
import { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../../../../redux/Posts/postsOperation";
import { getAvatar } from "../../../../redux/Auth/authSelectors";

const Comments = ({ route }) => {
  const [commentsList, setCommentsList] = useState(route.params.comments);
  const [comment, setComment] = useState("");
  const image = route.params.image;
  const id = route.params.id;
  const userAvatar = useSelector(getAvatar);

  const dispatch = useDispatch();

  const onPublish = () => {
    const date = new Date().toDateString();
    const list = [...commentsList, { comment, date, userAvatar }]
    setCommentsList(list);
    dispatch(updatePost({ id, comments:list }));
    setComment("");
  };
  return (
    <ContainerAll>
      <View style={styles.postImage}>
        {image && (
          <Image
            source={{ uri: `${image}` }}
            style={{ width: "100%", height: 240 }}
          />
        )}
      </View>
      {commentsList.length > 0 && (
        <FlatList
          data={commentsList}
          keyExtractor={(item, ind) => ind.toString()}
          renderItem={({ item }) => (
            <>
              <Image
                source={{ uri: `${item.userAvatar}` }}
                style={{ width: 20, height: 20 }}
              />
              <Text>{item.comment}</Text>
              <Text>{item.date}</Text>
            </>
          )}
        />
      )}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={styles.inputComment}>
            <TextInput
              placeholder="Comment"
              placeholderTextColor="#BDBDBD"
              style={styles.input}
              value={comment}
              onChangeText={(text) => {
                setComment(text);
              }}
            />
            <Pressable
              style={styles.addCommentBtn}
              onPress={onPublish}
              disabled={!comment ? true : false}
            >
              <MaterialCommunityIcons
                name="arrow-up"
                color="#ffffff"
                size={30}
              />
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ContainerAll>
  );
};

export default Comments;
