import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  deviceImage: {
    flex: 1,
    resizeMode: "contain",
  },
  briefInfo: {
    flex: 1,
    flexDirection: "row",
    // maxHeight: 100,
  },
});

export default styles;
