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
  const [devices, setDevices] = useState([]);
  const tempDevices = [];
  const promises = [];

  const asyncGetDevice = (deviceId) => {
    return new Promise((resolve) => {
      fetch(`https://smart-pv.herokuapp.com/consumption/devices/${deviceId}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((responseJson) => tempDevices.push(responseJson))
        .then(() => {
          resolve();
        });
    });
  };

  const fetchData = async () => {
    const devicesResponse = await fetch(
      "https://smart-pv.herokuapp.com/consumption/devices",
      { method: "GET" }
    );

    const deviceIds = await devicesResponse.json();

    for (var i = 0; i < deviceIds.length; i++) {
      promises.push(asyncGetDevice(deviceIds[i]));
    }

    Promise.all(promises).then(() => {
      setDevices(tempDevices);
    });
  };

  useLayoutEffect(() => {
    fetchData();
  }, []);

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
              deviceStatus={item.isOn}
              deviceName={item.name}
              powerConsumption={item.controlParameters.powerConsumption}
              style={{}}
            />
          </TouchableOpacity>
        )}
        overScrollMode={"never"}
      />
    </View>
  );
}
