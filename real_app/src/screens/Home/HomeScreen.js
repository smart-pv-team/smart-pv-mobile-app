import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  Image,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import MeasuringDevicesScreen from "../MeasuringDevices/MeasuringDevicesScreen";
import styles from "./styles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar></StatusBar>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View>
          <Text>HOME SCREEN</Text>
        </View>
      </View>
    </View>
  );
}
