import React from "react";
import { LogBox, View, Text } from "react-native";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/navigation/Drawer";

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

registerRootComponent(App);
