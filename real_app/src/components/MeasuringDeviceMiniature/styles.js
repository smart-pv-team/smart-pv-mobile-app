import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  spaceBetween: {
    padding: 5,
  },
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    flexDirection: "column",
    paddingTop: 0,
    padding: 10,
    // backgroundColor: "#888",
    borderRadius: 9,
    borderColor: "#333",
    borderWidth: 1,
  },
  imageContainer: {
    flex: 1,
    height: 130,
  },
  deviceImage: {
    flex: 1,
    resizeMode: "contain",
  },
  briefInfo: {
    flex: 1,
    flexDirection: "row",
    // maxHeight: 100,
  },
});

export default styles;
