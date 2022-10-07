import React, { useState } from "react";
import { Text, View, Button, Image, StatusBar } from "react-native";
import StackHeader from "../../components/StackHeader/StackHeader.js";
import styles from "./styles.js";

//the whole device info view should be substituted by a custom component

export default function MeasuringDeviceScreen({ route, navigation }) {
  const { deviceName, powerProduction, image, deviceStatus, key } =
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
        <Text style={{ color: "white" }}>
          Place for graph with e.g. device's activity
        </Text>
      </View>
      <View style={styles.deviceInfo}>
        <View style={styles.infoColumn}>
          <Text>Name: {deviceName}</Text>
          <Text>Status: {deviceStatus}</Text>
        </View>
        <View style={styles.infoColumn}>
          <Text>Production: {powerProduction}</Text>
          <Text>Time on: 13,5h</Text>
        </View>
      </View>
      <View style={styles.deviceButtons}>
        <Button title="Info" style={styles.deviceButton} />
        <Button title="Edit" style={styles.deviceButton} />
      </View>
    </View>
  );
}
