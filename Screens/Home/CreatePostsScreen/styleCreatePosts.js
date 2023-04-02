import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imageText: {
    marginTop: 8,
    marginBottom: 15,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  input: {
    width: "100%",
    borderBottomColor: "red",
    height: 20,
    marginTop: 32,
  },
  publishBtn: {
    width: "100%",
    height: 20,
    marginTop: 32,
  },
  deleteBtn: {
    display: "flex",
    position: "absolute",
    bottom: 30,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  camera: {
    width: "100%",
    height: 240,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
    alignItems: "center",
    justifyContent: "flex-end",
  },
    snapBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

});

export default styles;
