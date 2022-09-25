import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#b3b3b3",
    borderRadius: 1,
    borderBottomWidth: 1,
  },
  headerText: {
    fontSize: 23,
    fontFamily: "sans-serif-condensed",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    left: 20,
  },
});

export default styles;
