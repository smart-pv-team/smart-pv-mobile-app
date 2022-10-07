import React, { useState } from "react";
import { View, Text, StatusBar, Image } from "react-native";
import styles from "./styles";

export default function ConsumerDeviceScreen({ route, navigation }) {
  const { deviceName, powerConsumption, image, deviceStatus, key } =
    route.params;

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={{ flex: 2 }}>
        <Image
          style={styles.deviceImage}
          source={require("../../../assets/ac-unit.webp")}
        />
      </View>
      <View style={styles.graph}>
        <Text>Place for graph</Text>
      </View>
      <View>
        <Text>
          {deviceName} {deviceStatus}
        </Text>
      </View>
    </View>
  );
}
