import React, { useState } from "react";
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
  const [devices, setDevices] = useState([
    {
      deviceName: "Device1",
      powerProduction: 23244,
      image: "../../../assets/as-unit.webp",
      status: "on",
      key: "1",
    },
    {
      deviceName: "Device2",
      powerProduction: 52303,
      image: "../../../assets/as-unit.webp",
      status: "on",
      key: "2",
    },
    {
      deviceName: "Device3",
      powerProduction: 52340,
      image: "../../../assets/as-unit.webp",
      status: "off",
      key: "3",
    },
    {
      deviceName: "Device4",
      powerProduction: 5,
      image: "../../../assets/as-unit.webp",
      status: "off",
      key: "4",
    },
    {
      deviceName: "Device5",
      powerProduction: 5,
      image: "../../../assets/as-unit.webp",
      status: "on",
      key: "5",
    },
  ]);

  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <View style={styles.devicesList}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={devices}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ paddingBottom: 7 }}
              onPress={() => {
                navigation.navigate("MeasuringDevice", item);
              }}
            >
              {/* <View style={{ backgroundColor: "red" }}> */}
              {/* <MeasuringDeviceMiniature
                deviceName={item.deviceName}
                deviceStatus={item.status}
                style={{ flex: 1 }}
              ></MeasuringDeviceMiniature> */}
              <MeasuringDeviceMin
                deviceName={item.deviceName}
                deviceStatus={item.status}
                production={item.powerProduction}
              />
              {/* </View> */}
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
