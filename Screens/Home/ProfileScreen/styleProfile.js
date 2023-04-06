import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  profileContainer: {
    position: "relative",
    marginTop: 200,
    backgroundColor: "#ffffff",
    borderRadius: 30,
    padding: 15,
  },
  userImage: {
    position: "absolute",
    top: -60,
    left: "35%",
    borderRadius: 20,
  },
  nameUser: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    color: "#212121",
    marginBottom: 30,
    textAlign: "center",
  },
  logoutBtn: {
    marginLeft: "auto",
    marginBottom: 45,
  },
});

export default styles;
