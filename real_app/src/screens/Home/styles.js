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
    // backgroundColor: "orange",
  },
  lowerContainer: {
    flex: 1,
    backgroundColor: "red",
  },
  smallContainer: {
    flex: 1,
    borderRadius: 15,
    margin: 7,
    backgroundColor: "green",
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
    backgroundColor: "orange",
  },
});

export default styles;
