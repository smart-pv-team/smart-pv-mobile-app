import React from "react";
import { LogBox, View, Text } from "react-native";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/navigation/Drawer";

// LogBox.ignoreLogs(["EventEmitter.removeListener"]);

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

// function App() {
//   // return (
//   //   <View>
//   //     <Text>lalal</Text>
//   //   </View>
//   // );
//   return <NavigationContainer></NavigationContainer>;
// }

registerRootComponent(App);
