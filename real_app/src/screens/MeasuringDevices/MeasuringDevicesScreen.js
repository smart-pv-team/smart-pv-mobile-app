import React, { useState } from "react";
import {
  Text,
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import MeasuringDeviceMiniature from "../../components/MeasuringDeviceMiniature/MeasuringDeviceMiniature";
import styles from "./styles";

export default function MeasuringDeviceScreen({ navigation }) {
  const [devices, setDevices] = useState([
    {
      deviceName: "Device1",
      powerProduction: 2,
      image: "../../../assets/as-unit.webp",
      status: "On",
      key: "1",
    },
    {
      deviceName: "Device2",
      powerProduction: 5,
      image: "../../../assets/as-unit.webp",
      status: "On",
      key: "2",
    },
    {
      deviceName: "Device3",
      powerProduction: 5,
      image: "../../../assets/as-unit.webp",
      status: "Off",
      key: "3",
    },
    {
      deviceName: "Device4",
      powerProduction: 5,
      image: "../../../assets/as-unit.webp",
      status: "Off",
      key: "4",
    },
    {
      deviceName: "Device5",
      powerProduction: 5,
      image: "../../../assets/as-unit.webp",
      status: "On",
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
              onPress={() => {
                navigation.navigate("MeasuringDevice", item);
              }}
            >
              {/* <View style={{ backgroundColor: "red" }}> */}
              <MeasuringDeviceMiniature
                deviceName={item.deviceName}
                deviceStatus={item.status}
                style={{ flex: 1 }}
              ></MeasuringDeviceMiniature>
              {/* </View> */}
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
