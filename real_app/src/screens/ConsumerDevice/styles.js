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
    alignItems: "center",
    // backgroundColor: "lightblue",
    // justifyContent: "center",
  },
  chartTitle: {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    top: -2,
    color: "gray",
    fontSize: 12,
  },
  buttons: {
    flexDirection: "row",
    width: "97%",
    // backgroundColor: "red",
    justifyContent: "center",
    paddingTop: 10,
  },
  button: {
    // width: Dimensions.get("screen").width / 3 - 3,
    height: 40,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: "white",
  },
  // deviceInfo: {
  //   flex: 1,
  //   flexDirection: "column",
  //   width: "100%",
  //   paddingTop: 4,
  //   borderColor: "#555",
  //   borderWidth: 1,
  //   borderRadius: 9,
  //   overflow: "hidden",
  // },
  deviceInfo: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    paddingTop: 8,
    // borderColor: "gray",
    // borderWidth: 1,
    borderRadius: 9,
    overflow: "hidden",
    backgroundColor: "white",
  },
  detailedInfo: {
    flex: 5,
    flexDirection: "row",
    // borderTopWidth: 1,
    borderTopColor: "#8C8C8C",
    backgroundColor: "#F5F5F5",
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
    borderColor: "#989898",
  },
  firstColumnText: {
    fontWeight: "500",
    textAlign: "center",
  },
});

export default styles;
