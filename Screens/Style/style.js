import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerLogin: {
    paddingTop: 30,
    paddingBottom: 110,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    borderRadius: 30,
    marginTop: "auto",
    },
  containerRegister: {
    paddingTop: 90,
    paddingBottom: 45,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    borderRadius: 30,
    marginTop: "auto",
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    marginBottom: 30,
    color: "#212121",
  },
  input: {
    height: 50,
    padding: 16,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    borderRadius: 10,
  },
  buttonMy: {
    height: 50,
    padding: 16,
    borderRadius: 100,
    backgroundColor: "#ff6c00",
    marginBottom:15,
  },
  nameButton: {
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0.01,
    lineHeight: 15,
    color: "#212121",
    },
    imageAvatar: {},
  imageAdd: {
    position: "absolute",
    bottom: -100,
    right: -13,
  },
  containerForAvatar: {
    marginBottom: 30,
    marginTop: -150,
    position: "relative",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 15,
  },
    link: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    letterSpacing: 0.01,
    marginBottom: 30,
    color: "#1B4371",
  }
});


export default styles