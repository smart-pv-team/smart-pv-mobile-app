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
  const [devices, setDevices] = useState([
    { deviceName: "Device1", powerConsumption: 2, key: "1" },
    { deviceName: "Device2", powerConsumption: 5, key: "2" },
  ]);

  return (
    <View>
      <Button
        title="Measuring devices"
        onPress={() => navigation.navigate("MeasuringDevices")}
      />
      <Button
        title="Consumer devices"
        onPress={() => navigation.navigate("ConsumerDevices")}
      />
    </View>
  );
}
