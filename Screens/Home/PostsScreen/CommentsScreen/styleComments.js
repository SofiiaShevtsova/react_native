import { StyleSheet } from "react-native";

const stylesComment = StyleSheet.create({
  commentContainerUser: {
    position: "relative",
    marginBottom: 15,
    marginTop: 15,
    marginRight: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: 10,
    padding: 20,
    width: "90%",
  },
    commentContainer: {
    position: "relative",
    marginBottom: 15,
    marginTop: 15,
    marginLeft: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: 10,
    padding: 20,
    width: "90%",
  },

  userImage: {
    position: "absolute",
    top: -5,
    left: -15,
    borderRadius: 20,
  },
    userImageUser: {
    position: "absolute",
    top: -5,
    right: -15,
    borderRadius: 20,
  },
  commentText: {
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
    marginBottom: 10,
  },
  commentDateUser: {
    fontFamily: "Roboto-Regular",
    fontSize: 10,
    lineHeight: 12,
    color: "#BDBDBD",
    textAlign: "right",
  },
    commentDate: {
    fontFamily: "Roboto-Regular",
    fontSize: 10,
    lineHeight: 12,
    color: "#BDBDBD",
    textAlign: "left",
  },

});

export default stylesComment;
