import React, { useState } from "react";
import { Text, View, Button, Image, StatusBar } from "react-native";
import styles from "./styles.js";

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
      <View style={styles.deviceInfo}>
        <Text>Hi</Text>
        <Text>Hello</Text>
      </View>
      <View style={styles.deviceButtons}>
        <Button title="Info" style={styles.deviceButton} />
        <Button title="Edit" style={styles.deviceButton} />
      </View>
    </View>
  );
}
