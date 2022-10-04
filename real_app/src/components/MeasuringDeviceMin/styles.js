import { StyleSheet } from "react-native";

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "row",
//     height: 110,
//     width: "100%",
//     borderColor: "black",
//     borderWidth: 2,
//     alignItems: "center",
//     borderRadius: 9,
//   },
//   deviceIcon: { height: 50, width: 90, resizeMode: "contain", flex: 1 },
//   deviceInfo: { flex: 1, flexDirection: "row" },
//   absoluteText: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   status: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: "gray",
//     borderColor: "black",
//     borderWidth: 0.5,
//     position: "absolute",
//     top: 0,
//     left: 50,
//     right: 0,
//     bottom: 0,
//   },
// });

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
