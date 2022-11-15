import React from "react";
import { LogBox, View, Text } from "react-native";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/navigation/Drawer";

import LoginScreen from "./src/screens/Login/LoginScreen";

export default function App() {
  global.a = "global value";
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

// export default function App() {
//   return <LoginScreen></LoginScreen>;
// }

registerRootComponent(App);
