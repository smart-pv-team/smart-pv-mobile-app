import React, { useState, useLayoutEffect } from "react";
import {
  Text,
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import ConsumerDeviceMin from "../../components/ConsumerDeviceMin/ConsumerDeviceMin";
import styles from "./styles";

export default function ConsumerDevicesScreen({ navigation }) {
  useLayoutEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://192.168.1.14:3010/consumer/devices", //ipconfig to get IP address - localhost is being used by expo
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      setDevices(json["devices"]);
    };

    fetchData().catch(console.error);
  }, []);

  const [devices, setDevices] = useState();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 6 }} />
      <FlatList
        data={devices}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ width: "50%" }}
            onPress={() => {
              navigation.navigate("ConsumerDevice", item);
            }}
          >
            <ConsumerDeviceMin
              deviceStatus={item.deviceStatus}
              deviceName={item.deviceName}
              powerConsumption={item.powerConsumption}
              style={{}}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
