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
      powerConsumption: 2,
      image: "../../../assets/as-unit.webp",
      key: "1",
    },
    {
      deviceName: "Device2",
      powerConsumption: 5,
      image: "../../../assets/as-unit.webp",
      key: "2",
    },
    {
      deviceName: "Device2",
      powerConsumption: 5,
      image: "../../../assets/as-unit.webp",
      key: "3",
    },
    {
      deviceName: "Device2",
      powerConsumption: 5,
      image: "../../../assets/as-unit.webp",
      key: "4",
    },
    {
      deviceName: "Device2",
      powerConsumption: 5,
      image: "../../../assets/as-unit.webp",
      key: "5",
    },
  ]);

  const renderDevice = ({ item }) => {
    <TouchableOpacity
      onPress={() => navigation.navigate("MeasuringDevice", item)}
    >
      <View style={styles.miniatureContainer}>
        <Image style={styles.deviceImage} source={{ uri: item.image }}></Image>
        <Text>{item.deviceName}</Text>
      </View>
    </TouchableOpacity>;
  };

  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <View style={styles.devicesList}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={devices}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("MeasuringDevice", item)}
            >
              {/* <View style={{ backgroundColor: "red" }}> */}
              <MeasuringDeviceMiniature
                powerConsumption={item.powerConsumption}
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
