import { StyleSheet } from "react-native";
import AppStyles from "../../AppStyles";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  // deviceImage: {
  //   // height: "100%",
  //   width: "100%",
  //   height: undefined,
  //   // width: undefined,
  //   aspectRatio: 1,
  //   resizeMode: "contain",
  // },
  deviceImage: { resizeMode: "contain", height: 200 },
  graph: {
    flex: 1,
    width: "100%",
    // backgroundColor: "lightblue",
    // justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    width: "97%",
    // backgroundColor: "red",
    justifyContent: "center",
    paddingTop: 4,
  },
  button: {
    // width: Dimensions.get("screen").width / 3 - 3,
    height: 40,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  deviceInfo: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    paddingTop: 4,
    borderColor: "#555",
    borderWidth: 1,
    borderRadius: 9,
    overflow: "hidden",
  },
  deviceName: {
    alignItems: "center",
    flex: 1,
  },
  cell: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderRightWidth: 1,
  },
});

export default styles;
