//A measuring devices screen will be a scrollable list of devices.
//This list will consist of little block miniatures describing the device
//briefly. When you touch the block you'll be transported into a specific
//Measuring Device Screen.
import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";

export default function MeasuringDeviceMiniature() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Image
          style={styles.deviceImage}
          source={require("../../../assets/ac-unit.webp")}
        ></Image>
      </View>
      <View style={styles.briefInfo}>
        <View>
          <Text>lalal</Text>
          <Text>lalal</Text>
        </View>
        <View>
          <Text>lalal</Text>
          <Text>lalal</Text>
        </View>
      </View>
    </View>
  );
}
