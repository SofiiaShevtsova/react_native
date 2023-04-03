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

const Comments = ({ route }) => {
  const [commentsList, setCommentsList] = useState([]);
  const [comment, setComment] = useState("");
  const image = route.params.image;

  const onPublish = () => {
    const date = new Date().toDateString();
    setCommentsList((prev) => [...prev, { comment, date }]);
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
