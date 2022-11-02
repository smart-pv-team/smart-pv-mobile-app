import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  Image,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import MeasuringDevicesScreen from "../MeasuringDevices/MeasuringDevicesScreen";
import styles from "./styles";
import {
  Chart,
  VerticalAxis,
  HorizontalAxis,
  Line,
} from "react-native-responsive-linechart";
import { ScrollView } from "react-native-gesture-handler";

export default function HomeScreen({ navigation }) {
  const [circleWidth, setCircleWidth] = useState();
  const [circleHeight, setCircleHeight] = useState();
  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <View style={styles.upperContainer}>
        <View style={styles.twoSmaller}>
          <View style={styles.smallContainer}>
            <View style={styles.circle}>
              {/* <View> */}
              <Text style={[styles.text, { fontSize: 40, fontWeight: "" }]}>
                2
              </Text>
            </View>
            <View style={{ paddingTop: 8 }}>
              <Text style={[styles.text, { fontSize: 18, fontWeight: "" }]}>
                Active devices
              </Text>
            </View>
          </View>
          <View style={styles.smallContainer}></View>
        </View>
        <View style={styles.oneTall}>
          <View style={styles.tallContainer}></View>
        </View>
      </View>
      <View style={styles.lowerContainer}></View>
    </View>
  );
}
