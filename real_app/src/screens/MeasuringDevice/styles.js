import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 20,
    // justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "gray",
  },
  deviceImage: {
    flex: 1,
    // width: 100,
    // height: 100,
    resizeMode: "contain",
  },
  graph: {
    flex: 1,
    width: "100%",
    backgroundColor: "black",
  },
  deviceInfo: {
    flex: 2,
    flexDirection: "row",
    borderColor: "#555",
    borderWidth: 1,
  },
  infoColumn: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    paddingTop: 20,
    paddingLeft: 20,
  },
  deviceButtons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  deviceButton: {},
});

export default styles;
