import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  profile: {
    alignItems: "center",
    paddingBottom: 12,
    paddingTop: 10,
    backgroundColor: "#EBF8FF",
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
