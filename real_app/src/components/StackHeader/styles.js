import { StyleSheet } from "react-native";
import AppStyles from "../../AppStyles";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // borderBottomColor: "#b3b3b3",
    borderRadius: 1,
    borderBottomWidth: 1,
    // backgroundColor: "#B5C689",
    // backgroundColor: "#A3B86C",
    // backgroundColor: "#829356",
    // backgroundColor: "#93A661",
    backgroundColor: AppStyles.color.primaryColor,
  },
  icon: {
    position: "absolute",
    left: 13,
    // color: "white",
  },
  headerText: {
    fontSize: 23,
    // fontFamily: "sans-serif-condensed",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    // color: "white",
  },
});

export default styles;
