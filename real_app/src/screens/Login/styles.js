import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "pink",
  },
  inputField: {
    backgroundColor: "#f0f0f0",
    borderRadius: 50,
    paddingLeft: 10,
    // paddingVertical:
  },
  appLogoContainer: {
    height: 100,
    width: 100,
    flex: 1,
    // backgroundColor: "red",
  },
  appLogo: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: "contain",
    // backgroundColor: "red",
  },
  appLogoView: {},
  loginButton: {
    width: 300,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    // backgroundColor: "#FF1493",
    backgroundColor: "#78B460",
  },
});

export default styles;
