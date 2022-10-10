import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  profile: {
    alignItems: "center",
    paddingBottom: 12,
    paddingTop: 10,
    // backgroundColor: "#EBF8FF",
    // backgroundColor: "#93A661",
    backgroundColor: "#78B460",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    borderWidth: 1.5,
    borderColor: "black",
  },
  profileText: {
    fontSize: 15,
    paddingTop: 10,
  },
  settingsLabel: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 9,
    height: 40,
    position: "absolute",
    left: 10,
    bottom: 15,
    right: 10,
    backgroundColor: "#F5F5F5",
  },
  settingText: {
    paddingLeft: 35,
  },
});

export default styles;
