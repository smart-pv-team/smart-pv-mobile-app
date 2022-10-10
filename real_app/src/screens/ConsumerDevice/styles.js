import { StyleSheet } from "react-native";

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
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
  deviceInfo: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    padding: 20,
    borderColor: "#555",
    borderWidth: 2,
  },
});

export default styles;
