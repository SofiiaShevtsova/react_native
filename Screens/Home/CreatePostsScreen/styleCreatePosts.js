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
    marginTop: 32,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    padding: 16,
  },
  publishBtnDis: {
    width: "100%",
    marginTop: 32,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    padding: 16,
  },
  publishBtnText: {
    color: "#ffffff",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
  },
  publishBtnTextDis: {
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
  },
  deleteBtn: {
    display: "flex",
    position: "absolute",
    bottom: 10,
    left:'35%',
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    paddingVertical:5,
  },
  camera: {
    width: "100%",
    height: 240,
    padding: 20,
    display: "flex",
    flexDirection: "column",
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
