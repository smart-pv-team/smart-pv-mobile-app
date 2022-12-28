import React, { useState } from "react";
import { LogBox, View, Text } from "react-native";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/navigation/Drawer";
// import "./src/global.js";

import LoginScreen from "./src/screens/Login/LoginScreen";

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <NavigationContainer>
      {<Navigator isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />}
      {/* {!isSignedIn && <LoginScreen setIsSignedIn={setIsSignedIn} />} */}
    </NavigationContainer>
  );
}

// export default function App() {
//   return <LoginScreen></LoginScreen>;
// }

registerRootComponent(App);
