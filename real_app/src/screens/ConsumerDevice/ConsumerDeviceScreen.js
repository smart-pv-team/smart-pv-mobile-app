import React, { useState, useLayoutEffect } from "react";
import { View, Text, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  Chart,
  VerticalAxis,
  HorizontalAxis,
  Line,
  Area,
} from "react-native-responsive-linechart";
import { LinearGradient } from "expo-linear-gradient";
import AppStyles from "../../AppStyles";
import styles from "./styles";

export default function ConsumerDeviceScreen({ route, navigation }) {
  const [farmName, setFarmName] = useState("");
  const [activityMeasurement, setActivityMeasurements] = useState([]);

  const data1 = [
    { x: 0, y: 1 },
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 3, y: 0 },
    { x: 3, y: 1 },
    { x: 8, y: 1 },
    { x: 8, y: 0 },
    { x: 9, y: 0 },
    { x: 9, y: 1 },
    { x: 10, y: 1 },
    { x: 15, y: 1 },
    { x: 15, y: 0 },
    { x: 20, y: 0 },
    { x: 20, y: 1 },
    { x: 30, y: 1 },
  ];

  // console.log(route.params);
  const {
    name,
    deviceModel,
    workingHours,
    isOn,
    controlParameters,
    creationDate,
    farmId,
  } = route.params;

  const [labels, setLabels] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
  ]);

  const [data, setData] = useState([
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
  ]);

  const [oneWeekStyle, setOneWeekStyle] = useState({ color: "gray" });
  const [oneMonthStyle, setOneMonthStyle] = useState({ color: "black" });
  const [threeMonthsStyle, setThreeMonthsStyle] = useState({ color: "black" });

  const [oneWeekBorder, setOneWeekBorder] = useState({ borderColor: "gray" });
  const [oneMonthBorder, setOneMonthBorder] = useState({
    borderColor: "black",
  });
  const [threeMonthsBorder, setThreeMonthsBorder] = useState({
    borderColor: "black",
  });

  const buttonBorderSetters = [
    setOneWeekBorder,
    setOneMonthBorder,
    setThreeMonthsBorder,
  ];

  const buttonTextSetters = [
    setOneWeekStyle,
    setOneMonthStyle,
    setThreeMonthsStyle,
  ];

  const updateButtonStyle = (buttonNum) => {
    for (var i = 0; i < buttonBorderSetters.length; i++) {
      var styleColor = i != buttonNum ? "black" : "gray";
      buttonBorderSetters[i]({ borderColor: styleColor });
      buttonTextSetters[i]({ color: styleColor });
    }
  };

  const yLabels = ["OFF", "ON"];

  const getFarmName = async () => {
    const response = await fetch(
      `https://smart-pv.herokuapp.com/management/farms/${farmId}`,
      { method: "GET" }
    );
    const responseJson = await response.json();
    setFarmName(responseJson.name);
  };

  useLayoutEffect(() => {
    getFarmName();
    console.log(
      workingHours,
      isOn,
      controlParameters,
      creationDate,
      farmId,
      controlParameters.lastStatusChange
    );
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar />
      {/* <LinearGradient
        colors={["white", "#969696"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={{ flex: 1, width: "100%" }}
      > */}
      <View style={styles.graph}>
        <Chart
          viewport={{ size: { width: 10 } }}
          style={{ height: 260, width: "100%" }}
          xDomain={{ min: 0, max: 30 }}
          yDomain={{ min: -0.05, max: 1.05 }}
          xLabels={"jan"}
          yLabels={["OFF", "ON"]}
          padding={{ left: 25, top: 10, bottom: 20, right: 20 }}
        >
          <VerticalAxis
            tickValues={[0, 1]}
            theme={{
              labels: {
                // label: { rotation: -20 },
                label: { fontSize: 8, fontWeight: "500" },
                formatter: (v) => yLabels[v],
              },
            }}
          />
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
                from: { color: "#227BEA", opacity: 0.5 },
                to: { color: "#227BEA", opacity: 0.1 },
              },
            }}
            data={data1}
          />
          <Line
            data={data1}
            smoothing="none"
            theme={{ stroke: { color: "#227BEA", width: 1 } }}
          />
          {/* <Line
            data={data2}
            smoothing="cubic-spline"
            theme={{ stroke: { color: "blue", width: 1 } }}
          /> */}
        </Chart>
        <Text style={styles.chartTitle}>Device activity</Text>
      </View>
      <LinearGradient
        colors={[AppStyles.color.backgroundColor, "#969696"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={{
          flex: 1.5,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            width: "100%",
            alignItems: "center",
          }}
        >
          <View style={styles.buttons}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={[
                  styles.button,
                  {
                    borderRightWidth: 0,
                    borderBottomLeftRadius: 9,
                    borderTopLeftRadius: 9,
                  },
                  oneWeekBorder,
                ]}
                onPress={() => {
                  updateButtonStyle(0);
                  setFromDate(7, 0);
                  getChartData();
                }}
              >
                <Text style={oneWeekStyle}>1 WEEK</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={[
                  styles.button,
                  { borderWidth: 1, borderRightWidth: 0 },
                  oneMonthBorder,
                ]}
                onPress={() => {
                  updateButtonStyle(1);
                  setFromDate(0, 1);
                  getChartData();
                }}
              >
                <Text style={oneMonthStyle}>1 MONTH</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={[
                  styles.button,
                  {
                    // borderLeftWidth: 0,
                    borderBottomRightRadius: 9,
                    borderTopRightRadius: 9,
                  },
                  threeMonthsBorder,
                ]}
                onPress={() => {
                  updateButtonStyle(2);
                  setFromDate(0, 3);
                  getChartData();
                }}
              >
                <Text style={threeMonthsStyle}>3 MONTHS</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              width: "99%",
              paddingHorizontal: 7,
              paddingBottom: 7,
              paddingTop: 20,
            }}
          >
            <View style={styles.deviceInfo}>
              <View style={styles.deviceName}>
                <Text style={{ fontSize: 20, fontWeight: "500" }}>{name}</Text>
                <Text>{deviceModel.toUpperCase()}</Text>
              </View>

              <View style={styles.detailedInfo}>
                <View
                  style={{
                    flex: 0.7,
                    // backgroundColor: AppStyles.color.primaryColor,
                    // backgroundColor: "#EBEBEB",
                  }}
                >
                  <View style={[styles.cell]}>
                    <Text style={styles.firstColumnText}>STATUS</Text>
                  </View>
                  <View
                    style={[
                      styles.cell,
                      { backgroundColor: AppStyles.color.secondaryColor },
                    ]}
                  >
                    <Text style={styles.firstColumnText}>WORKING HOURS</Text>
                  </View>
                  <View style={[styles.cell]}>
                    <Text style={styles.firstColumnText}>CONSUMPTION</Text>
                  </View>
                  <View
                    style={[
                      styles.cell,
                      { backgroundColor: AppStyles.color.secondaryColor },
                    ]}
                  >
                    <Text style={styles.firstColumnText}>FARM</Text>
                  </View>
                  <View style={[styles.cell]}>
                    <Text style={styles.firstColumnText}>CREATION DATE</Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    // backgroundColor: "#EBEBEB",
                  }}
                >
                  <View
                    style={[
                      styles.cell,
                      {
                        borderRightWidth: 0,
                      },
                    ]}
                  >
                    {isOn && <Text>ON - for {4} hours</Text>}
                    {!isOn && (
                      <Text>
                        Last active{" "}
                        {controlParameters.lastStatusChange
                          .split("T")[0]
                          .replace("-", "/")
                          .replace("-", "/")}
                      </Text>
                    )}
                    {/* <Text>{latestMeasurement || ""}</Text> */}
                  </View>
                  <View
                    style={[
                      styles.cell,
                      {
                        backgroundColor: "white",
                        borderRightWidth: 0,
                      },
                    ]}
                  >
                    <Text>{workingHours}</Text>
                  </View>
                  <View
                    style={[
                      styles.cell,
                      {
                        borderRightWidth: 0,
                      },
                    ]}
                  >
                    <Text>{controlParameters.powerConsumption} [kW]</Text>
                  </View>
                  <View
                    style={[
                      styles.cell,
                      {
                        backgroundColor: "white",
                        borderRightWidth: 0,
                      },
                    ]}
                  >
                    {farmName != null && <Text>{farmName.toUpperCase()}</Text>}
                    {farmName == null && <Text>{farmId}</Text>}
                  </View>
                  <View
                    style={[
                      styles.cell,
                      {
                        borderRightWidth: 0,
                      },
                    ]}
                  >
                    <Text>
                      {creationDate
                        .split("T")[0]
                        .replace("-", "/")
                        .replace("-", "/")}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
