import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    flex: 2,
    flexDirection: "row",
  },
  twoSmaller: {
    flex: 1,
  },
  oneTall: {
    flex: 1,
  },
  lowerContainer: {
    flex: 1,
    backgroundColor: "purple",
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#d9d9d9",
    borderRadius: 15,
    margin: 7,
    overflow: "hidden",
  },
  smallContainer: {
    flex: 1,
    borderRadius: 15,
    margin: 7,
    borderWidth: 1.5,
    borderColor: "#d9d9d9",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    justifyContent: "center",
    alignItems: "center",
    height: 130,
    width: 130,
    borderRadius: 65,
    borderColor: "blue",
    borderWidth: 5,
  },
  text: {},
  tallContainer: {
    flex: 1,
    borderRadius: 15,
    margin: 7,
    borderWidth: 1.5,
    borderColor: "#d9d9d9",
    backgroundColor: "white",
    alignItems: "center",
    overflow: "hidden",
  },
  containerTitle: { height: "10%", paddingTop: 8 },
  infoContent: { flex: 1, width: "100%", paddingTop: 15, overflow: "hidden" },
  infoItem: { flex: 1, padding: 15 },
});

export default styles;
