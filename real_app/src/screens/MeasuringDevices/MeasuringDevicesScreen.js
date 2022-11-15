import React, { useState, useLayoutEffect } from "react";
import {
  Text,
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import MeasuringDeviceMin from "../../components/MeasuringDeviceMin/MeasuringDeviceMin";
import MeasuringDeviceMiniature from "../../components/MeasuringDeviceMiniature/MeasuringDeviceMiniature";
import styles from "./styles";

export default function MeasuringDeviceScreen({ navigation }) {
  const [devices, setDevices] = useState([]);
  const tempDevices = [];
  const promises = [];

  const asyncGetDevice = (deviceId) => {
    return new Promise((resolve) => {
      fetch(`https://smart-pv.herokuapp.com/measurement/devices/${deviceId}`, {
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
      "https://smart-pv.herokuapp.com/measurement/devices",
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
    <View style={styles.container}>
      <View style={{ height: 6 }} />
      <View style={styles.devicesList}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={devices}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ paddingBottom: 17 }}
              onPress={() => {
                navigation.navigate("MeasuringDevice", item);
              }}
            >
              <MeasuringDeviceMin
                deviceName={item.name}
                deviceStatus={item.name}
                production={item.measuredEnergy}
              />
              {/* </View> */}
            </TouchableOpacity>
          )}
          overScrollMode={"never"}
        />
      </View>
    </View>
  );
}
