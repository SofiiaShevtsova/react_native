import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  userContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  userImage: {
    backgroundColor: "#212121",
    borderRadius: 16,
    overflow: "hidden",
  },
  userName: {
    fontFamily: "Roboto-Medium",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  userEmail: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
  },
  post: {
    paddingVertical: 15,
  },
  postImage: {
    backgroundColor: "#212121",
    borderRadius: 8,
    marginBottom: 8,
    overflow: "hidden",
  },
  postName: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    marginBottom: 8,
  },
  navBoxMapCom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnNav: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  comment: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  location: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textDecorationLine: "underline",
    color: "#212121",
  },
  inputComment: {
    position: "relative",
    width: "100%",
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    height: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  addCommentBtn: {
    position: "absolute",
    right: 10,
    top:5,
    backgroundColor: "#FF6C00",
    borderRadius: 50,
  },
});

export default styles;
