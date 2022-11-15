import React, { useState } from "react";
import { View, Text, StatusBar } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { ScrollView } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  Chart,
  VerticalAxis,
  HorizontalAxis,
  Line,
  Area,
} from "react-native-responsive-linechart";
import AppStyles from "../../AppStyles";
import styles from "./styles";

export default function ConsumerDeviceScreen({ route, navigation }) {
  const data1 = [
    { x: -2, y: 1 },
    { x: -2, y: 0 },
    { x: -1, y: 0 },
    { x: 3, y: 0 },
    { x: 3, y: 1 },
    { x: 8, y: 1 },
    { x: 8, y: 0 },
    { x: 9, y: 0 },
    { x: 9, y: 1 },
    { x: 10, y: 1 },
  ];

  console.log(route.params);
  const { name, ipAddress, isOn, controlParameters } = route.params;

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

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.graph}>
        <Chart
          viewport={{ size: { width: 10 } }}
          style={{ height: 260, width: "100%", backgroundColor: "#eee" }}
          xDomain={{ min: -2, max: 10 }}
          yDomain={{ min: -0.05, max: 1.05 }}
          xLabels={"jan"}
          yLabels={["OFF", "ON"]}
          padding={{ left: 25, top: 10, bottom: 30, right: 20 }}
        >
          <VerticalAxis
            // tickCount={2}
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
                from: { color: "red", opacity: 0.1 },
                to: { color: "red", opacity: 0.1 },
              },
            }}
            data={data1}
          />
          <Line
            data={data1}
            smoothing="none"
            theme={{ stroke: { color: "red", width: 1 } }}
          />
          {/* <Line
            data={data2}
            smoothing="cubic-spline"
            theme={{ stroke: { color: "blue", width: 1 } }}
          /> */}
        </Chart>
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
              onPress={() => updateButtonStyle(0)}
            >
              <Text style={oneWeekStyle}>1 DAY</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={[styles.button, oneMonthBorder]}
              onPress={() => updateButtonStyle(1)}
            >
              <Text style={oneMonthStyle}>1 WEEK</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  borderLeftWidth: 0,
                  borderBottomRightRadius: 9,
                  borderTopRightRadius: 9,
                },
                threeMonthsBorder,
              ]}
              onPress={() => updateButtonStyle(2)}
            >
              <Text style={threeMonthsStyle}>1 MONTH</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, width: "100%" }}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 7,
            paddingVertical: 10,
          }}
        >
          <View style={styles.deviceInfo}>
            <View style={styles.deviceName}>
              <Text style={{ fontSize: 20, fontWeight: "500" }}>
                {name.length > 25 ? name.substr(0, 25) + "..." : name}
              </Text>
              <Text>NAZWA FARMY</Text>
            </View>

            <View style={{ flex: 4, flexDirection: "row" }}>
              <View
                style={{
                  flex: 0.7,
                  backgroundColor: AppStyles.color.primaryColor,
                }}
              >
                <View
                  style={[
                    styles.cell,
                    { backgroundColor: AppStyles.color.primaryColor },
                  ]}
                >
                  <Text style={{ fontWeight: "600" }}>DEVICE STATUS</Text>
                </View>
                <View
                  style={[
                    styles.cell,
                    { backgroundColor: AppStyles.color.secondaryColor },
                  ]}
                >
                  <Text style={{ fontWeight: "600" }}>ACTIVE TASK</Text>
                </View>
                <View
                  style={[
                    styles.cell,
                    { backgroundColor: AppStyles.color.primaryColor },
                  ]}
                >
                  <Text style={{ fontWeight: "600" }}>CONSUMPTION</Text>
                </View>
                <View
                  style={[
                    styles.cell,
                    { backgroundColor: AppStyles.color.secondaryColor },
                  ]}
                >
                  <Text style={{ fontWeight: "600" }}>IP ADDRESS</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: AppStyles.color.secondaryColor,
                }}
              >
                <View
                  style={[
                    styles.cell,
                    {
                      backgroundColor: AppStyles.color.primaryColorLighter,
                      borderRightWidth: 0,
                    },
                  ]}
                >
                  <Text>{isOn ? "ON" : "OFF"}</Text>
                </View>
                <View
                  style={[
                    styles.cell,
                    {
                      backgroundColor: AppStyles.color.secondaryColorLighter,
                      borderRightWidth: 0,
                    },
                  ]}
                >
                  <Text>Freezing</Text>
                </View>
                <View
                  style={[
                    styles.cell,
                    {
                      backgroundColor: AppStyles.color.primaryColorLighter,
                      borderRightWidth: 0,
                    },
                  ]}
                >
                  <Text>{controlParameters.powerConsumption} kWh</Text>
                </View>
                <View
                  style={[
                    styles.cell,
                    {
                      backgroundColor: AppStyles.color.secondaryColorLighter,
                      borderRightWidth: 0,
                    },
                  ]}
                >
                  <Text>{ipAddress}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>

    //farmName, deviceName, ipAddress, isOn, workingHours, powerConsumption, min hysteresis, max hysteresis
  );
}
