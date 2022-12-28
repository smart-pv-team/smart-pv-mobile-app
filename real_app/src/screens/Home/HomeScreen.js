import React, { useState, useLayoutEffect } from "react";
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
  const [production, setProduction] = useState(0);
  const [activeDevicesNum, setActiveDevicesNum] = useState(0);
  const [devicesNum, setDevicesNum] = useState(0);
  const [workingHours, setWorkingHours] = useState(0);
  const promises = [];
  var tempDevices = [];
  var tempHours = 0;

  const data1 = [
    { x: -2, y: 1 },
    { x: -1, y: 0 },
    { x: 3, y: 0 },
    { x: 8, y: 1 },
    { x: 9, y: 0 },
    { x: 10, y: 1 },
  ];

  const asyncGetDevice = (deviceId) => {
    return new Promise((resolve) => {
      fetch(`https://smart-pv.herokuapp.com/consumption/devices/${deviceId}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((responseJson) => {
          tempDevices.push(responseJson);
          // console.log(responseJson);
          tempHours += responseJson["workingHours"];
        })
        .then(() => {
          resolve();
        });
    });
  };

  const fetchData = async () => {
    const farmResponse = await fetch(
      "https://smart-pv.herokuapp.com/management/farms",
      { method: "GET" }
    );
    const farmId = await farmResponse.json();

    const productionResponse = await fetch(
      `https://smart-pv.herokuapp.com/measurement/farms/${farmId}/statistics/sum`,
      { method: "GET" }
    );

    const production = await productionResponse.json();
    setProduction(production);

    const devicesIdResponse = await fetch(
      `https://smart-pv.herokuapp.com/consumption/devices`,
      { method: "GET" }
    );

    const deviceIds = await devicesIdResponse.json();

    for (var i = 0; i < deviceIds.length; i++) {
      promises.push(asyncGetDevice(deviceIds[i]));
    }

    tempHours = 0;
    Promise.all(promises).then(() => {
      setActiveDevicesNum(tempDevices.filter((x) => x.isOn).length);
      setWorkingHours(tempHours);
    });

    setDevicesNum(deviceIds.length);
  };

  useLayoutEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <View style={styles.upperContainer}>
        <View style={styles.upperSmall}>
          <TouchableOpacity
            style={styles.smallContainer}
            onPress={() => {
              navigation.navigate("ActiveDevices");
            }}
          >
            <View style={styles.circle}>
              <Text style={[styles.text, { fontSize: 40, fontWeight: "" }]}>
                {activeDevicesNum}
              </Text>
            </View>
            <View style={{ paddingTop: 8 }}>
              <Text style={[styles.text, { fontSize: 18, fontWeight: "" }]}>
                Active devices
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.smallContainer}
            onPress={() => {
              navigation.navigate("AllDevices");
            }}
          >
            <View style={styles.circle}>
              <Text style={[styles.text, { fontSize: 40, fontWeight: "" }]}>
                {devicesNum}
              </Text>
            </View>
            <View style={{ paddingTop: 8 }}>
              <Text style={[styles.text, { fontSize: 18, fontWeight: "" }]}>
                All devices
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.lowerSmall}>
          <View style={styles.longContainer}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={[
                  styles.circle,
                  { height: 140, width: 140, borderRadius: 70 },
                ]}
              >
                <Text
                  style={[styles.text, { fontSize: 16, fontWeight: "600" }]}
                >
                  {(production / 1000).toFixed(2)} kWh
                </Text>
              </View>
              <View style={{ paddingTop: 8 }}>
                <Text style={[styles.text, { fontSize: 18, fontWeight: "" }]}>
                  Total production
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={[
                  styles.circle,
                  { height: 140, width: 140, borderRadius: 70 },
                ]}
              >
                <Text style={[styles.text, { fontSize: 30, fontWeight: "" }]}>
                  {workingHours}
                </Text>
              </View>
              <View style={{ paddingTop: 8 }}>
                <Text style={[styles.text, { fontSize: 18, fontWeight: "" }]}>
                  Total hours
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* <View style={styles.upperContainer}>
        <View style={styles.twoSmaller}>
          <TouchableOpacity
            style={styles.smallContainer}
            onPress={() => {
              navigation.navigate("ActiveDevices");
            }}
          >
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
          </TouchableOpacity>
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
      </View> */}
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
