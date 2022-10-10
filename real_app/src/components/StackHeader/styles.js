import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // borderBottomColor: "#b3b3b3",
    borderRadius: 1,
    borderBottomWidth: 1.5,
    // backgroundColor: "#B5C689",
    // backgroundColor: "#A3B86C",
    // backgroundColor: "#829356",
    // backgroundColor: "#93A661",
    backgroundColor: "#78B460",
  },
  icon: {
    position: "absolute",
    left: 13,
    // color: "white",
  },
  headerText: {
    fontSize: 23,
    fontFamily: "sans-serif-condensed",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    // color: "white",
  },
});

export default styles;
