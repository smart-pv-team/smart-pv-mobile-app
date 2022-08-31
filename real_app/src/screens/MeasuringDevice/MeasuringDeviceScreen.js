import React, { useState } from "react";
import { Text, View, Button, Image, StatusBar } from "react-native";
import styles from "./styles.js";

//the whole device info view should be substituted by a custom component

export default function MeasuringDeviceScreen() {
  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
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
          <Text>Name: Measuring1</Text>
          <Text>Status: On</Text>
        </View>
        <View style={styles.infoColumn}>
          <Text>Production: 20</Text>
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
