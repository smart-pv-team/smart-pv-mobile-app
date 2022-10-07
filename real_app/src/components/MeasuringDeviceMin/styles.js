import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 110,
    width: "100%",
    borderColor: "black",
    borderWidth: 2,
    alignItems: "center",
    borderRadius: 9,
  },
  minorContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  deviceIcon: { height: 50, width: 50, resizeMode: "contain", flex: 1 },
  status: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 0.5,
  },
});

export default styles;
