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
import {
  Chart,
  VerticalAxis,
  HorizontalAxis,
  Line,
  Area,
} from "react-native-responsive-linechart";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import AppStyles from "../../AppStyles";

export default function HomeScreen({ navigation }) {
  const [circleWidth, setCircleWidth] = useState();
  const [circleHeight, setCircleHeight] = useState();

  const activeDevices = [
    { name: "Device1", id: 1 },
    { name: "Device2", id: 2 },
    { name: "Device3", id: 3 },
    // { name: "Device4", id: 4 },
    // { name: "Device5", id: 5 },
    // { name: "Device6", id: 6 },
    // { name: "Device7", id: 7 },
    // { name: "Device8", id: 8 },
  ];

  const data1 = [
    { x: -2, y: 1 },
    { x: -1, y: 0 },
    { x: 3, y: 0 },
    { x: 8, y: 1 },
    { x: 9, y: 0 },
    { x: 10, y: 1 },
  ];

  const renderDevice = ({ item }) => {
    const backgroundColor = item.id % 2 == 1 ? "#f7f7f7" : "white";
    return (
      <View style={[styles.infoItem, { backgroundColor: backgroundColor }]}>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <View style={styles.upperContainer}>
        <View style={styles.twoSmaller}>
          <View style={styles.smallContainer}>
            <View style={styles.circle}>
              <Text style={[styles.text, { fontSize: 40, fontWeight: "" }]}>
                3
              </Text>
            </View>
            <View style={{ paddingTop: 8 }}>
              <Text style={[styles.text, { fontSize: 18, fontWeight: "" }]}>
                Active devices
              </Text>
            </View>
          </View>
          <View style={styles.smallContainer}>
            <View style={styles.circle}>
              <Text style={[styles.text, { fontSize: 18, fontWeight: "600" }]}>
                3954,32 kW
              </Text>
            </View>
            <View style={{ paddingTop: 8 }}>
              <Text style={[styles.text, { fontSize: 18, fontWeight: "" }]}>
                Production
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.oneTall}>
          <View style={styles.tallContainer}>
            <View style={styles.containerTitle}>
              <Text style={{ fontSize: 20 }}>Information</Text>
            </View>
            <View style={styles.infoContent}>
              <FlatList
                data={activeDevices}
                renderItem={renderDevice}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                overScrollMode={"never"}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <Chart
          viewport={{ size: { width: 10 } }}
          style={styles.chart}
          xDomain={{ min: -2, max: 10 }}
          yDomain={{ min: -0.05, max: 1.05 }}
          xLabels={"jan"}
          padding={{ left: 25, top: 10, bottom: 30, right: 20 }}
        >
          <VerticalAxis tickCount={2} />
          <HorizontalAxis
            tickCount={3}
            theme={{
              axis: { stroke: { color: "#aaa", width: 2 } },
              ticks: { stroke: { color: "#aaa", width: 2 } },
              labels: {
                label: { rotation: 50 },
                formatter: (v) => v.toFixed(1),
              },
            }}
          />
          <Area
            theme={{
              gradient: {
                from: { color: AppStyles.color.primaryColor, opacity: 0.75 },
                to: { color: AppStyles.color.primaryColor, opacity: 0.1 },
              },
            }}
            data={data1}
          />
          <Line
            data={data1}
            smoothing="none"
            theme={{
              stroke: { color: AppStyles.color.primaryColor, width: 1 },
            }}
          />
        </Chart>
        <Text style={styles.chartTitle}>Total measurements</Text>
      </View>
    </View>
  );
}
