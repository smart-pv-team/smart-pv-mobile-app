import React, { useState } from "react";
import {
  Text,
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";

export default function ConsumerDevicesScreen({ navigation }) {
  const [devices, setDevices] = useState([
    { deviceName: "Air conditioner", key: "1" },
    { deviceName: "Smart fridge", key: "2" },
  ]);

  return (
    <View>
      <StatusBar></StatusBar>
      <FlatList
        data={devices}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ConsumerDevice", item)}
          >
            <Text>{item.deviceName}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
