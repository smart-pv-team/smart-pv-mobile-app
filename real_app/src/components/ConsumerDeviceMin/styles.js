import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: 200,
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 9,
    borderColor: "#333",
    borderWidth: 1,
  },
  deviceInfo: {
    flex: 1,
    alignItems: "center",
  },
  deviceIcon: { width: 50, resizeMode: "contain", flex: 1 },
  minorContainer: {
    height: 45,
    alignItems: "center",
    backgroundColor: "#78B460",
    width: "100%",
  },
  status: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 0.5,
  },
});

export default styles;
