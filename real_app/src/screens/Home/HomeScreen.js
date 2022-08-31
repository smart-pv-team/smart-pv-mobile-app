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
    <View>
      <StatusBar></StatusBar>
      <Text>HOME SCREEN</Text>
    </View>
  );
}
