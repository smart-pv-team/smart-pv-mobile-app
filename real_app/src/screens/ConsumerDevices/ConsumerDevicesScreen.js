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
  const [testDevices, setTestDevices] = useState();
  const tempDevices = [];
  useLayoutEffect(() => {
    const fetchData = async () => {
      const devicesResponse = await fetch(
        "https://smart-pv.herokuapp.com/consumption/devices",
        { method: "GET" }
      );
      const deviceIds = await devicesResponse.json();

      const fetchDevice = async (id) => {
        const deviceResponse = await fetch(
          `https://smart-pv.herokuapp.com/consumption/devices/${id}`,
          { method: "GET" }
        );

        const device = await deviceResponse.json();
        tempDevices.push(device);
        console.log(tempDevices.length);
      };

      deviceIds.forEach((id) => {
        fetchDevice(id).catch(console.error);
      });
      const response = await fetch(
        "http://192.168.43.205:3010/consumer/devices", //ipconfig to get IP address - localhost is being used by expo
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
      setTestDevices(tempDevices);
    };

    fetchData().catch(console.error);
  }, []);

  const [devices, setDevices] = useState();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 6 }} />
      <Button
        title="PRESS ME"
        onPress={() => {
          console.log(testDevices[0]);
        }}
      ></Button>
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
