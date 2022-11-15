import { StyleSheet } from "react-native";
import AppStyles from "../../AppStyles";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  deviceImage: { resizeMode: "contain", height: 200 },
  graph: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    width: "97%",
    justifyContent: "center",
    paddingTop: 4,
  },
  button: {
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
  firstColumnText: {
    fontWeight: "600",
    textAlign: "center",
  },
});

export default styles;
