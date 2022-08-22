import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 20,
    flexDirection: "column",
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
  deviceInfo: {
    flex: 2,
  },
  deviceButtons: {
    flex: 1,
  },
  deviceButton: {},
});

export default styles;
