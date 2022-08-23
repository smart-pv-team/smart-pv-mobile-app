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
  ]);

  const renderDevice = ({ item }) => {
    <TouchableOpacity
      onPress={() => navigation.navigate("MeasuringDevice", item)}
    >
      <View style={styles.container}>
        <Image style={styles.deviceImage} source={{ uri: item.image }}></Image>
        <Text>{item.deviceName}</Text>
      </View>
    </TouchableOpacity>;
  };

  // return (
  //   <View>
  //     <StatusBar></StatusBar>
  //     <FlatList numColumns={1} data={devices} renderItem={renderDevice} />
  //   </View>
  // );
  return (
    <View>
      <StatusBar></StatusBar>
      <FlatList
        data={devices}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("MeasuringDevice", item)}
          >
            <MeasuringDeviceMiniature></MeasuringDeviceMiniature>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
