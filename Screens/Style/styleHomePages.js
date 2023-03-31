import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  userContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
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
  containerNav: {
    display: "flex",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    gap: 30,
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
  },
});

export default styles;
