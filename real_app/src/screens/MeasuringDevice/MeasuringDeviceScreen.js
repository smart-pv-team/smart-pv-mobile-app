import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  Button,
  FlatList,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import {
  Chart,
  VerticalAxis,
  HorizontalAxis,
  Line,
  Area,
} from "react-native-responsive-linechart";
import { ScrollView } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppStyles from "../../AppStyles";
import styles from "./styles";

export default function ConsumerDeviceScreen({ route, navigation }) {
  const { name, measuredEnergy, ipAddress, farmId, id } = route.params;
  const [latestMeasurement, setLatestMeasurement] = useState();
  const [farmName, setFarmName] = useState();
  const [measurements, setMeasurements] = useState([]);

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

  const getLatestMeasurement = async () => {
    const response = await fetch(
      `https://smart-pv.herokuapp.com/measurement/devices/${id}/last`,
      { method: "GET" }
    );
    const responseJson = await response.json();
    setLatestMeasurement(responseJson.measurement);
  };

  const getFarmName = async () => {
    const response = await fetch(
      `https://smart-pv.herokuapp.com/management/farms/${farmId}`,
      { method: "GET" }
    );
    const responseJson = await response.json();
    setFarmName(responseJson.name);
    console.log(farmName);
  };

  const getChartData = async (from, to) => {
    const response = await fetch(
      `https://smart-pv.herokuapp.com/measurement/devices/${id}/range?startDate=${from}&endDate=${to}`,
      { method: "GET" }
    );
    const responseJson = await response.json();
    console.log("Length: ", responseJson.length);

    const tempData = [];
    for (var i = 0; i < responseJson.length; i++) {
      tempData.push({ x: i, y: responseJson[i].measurement });
    }

    setMeasurements(tempData);
  };

  useLayoutEffect(() => {
    getLatestMeasurement();
    getFarmName();

    const date = new Date();
    console.log(date);
    // var date = new Date().getTimezoneOffset();
    // console.log(date);
  }, []);

  const data1 = [
    { x: 1, y: 0.5 },
    { x: 2, y: 0.5 },
  ];

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.graph}>
        <Chart
          viewport={{ size: { width: 100 } }}
          style={{ height: 260, width: "100%", backgroundColor: "#eee" }}
          xDomain={{ min: 0, max: 700 }}
          yDomain={{ min: -20000, max: 30000 }}
          xLabels={"jan"}
          yLabels={["OFF", "ON"]}
          padding={{ left: 25, top: 10, bottom: 30, right: 20 }}
        >
          <VerticalAxis
            // tickCount={2}
            // tickValues={[0, 1]}
            theme={{
              labels: {
                // label: { rotation: -20 },
                label: { fontSize: 8, fontWeight: "500" },
                // formatter: (v) => yLabels[v],
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
          {measurements.length != 0 && (
            <Area
              theme={{
                gradient: {
                  from: { color: "red", opacity: 0.1 },
                  to: { color: "red", opacity: 0.1 },
                },
              }}
              data={measurements}
            />
          )}
          {measurements.length != 0 && (
            <Line
              data={measurements}
              smoothing="none"
              theme={{ stroke: { color: "red", width: 1 } }}
            />
          )}
          {/* <Line
            data={data2}
            smoothing="cubic-spline"
            theme={{ stroke: { color: "blue", width: 1 } }}
          /> */}
        </Chart>

        {/* {testData.length != 0 && (
          <LineChart
            viewport={{ size: { width: 0.5 } }}
            // data={{
            //   labels: labels,
            //   datasets: [
            //     {
            //       data: data,
            //     },
            //   ],
            // }}
            data={{ datasets: [{ data: testData }] }}
            fromZero={false}
            width={Dimensions.get("window").width}
            height={260}
            // yAxisLabel="$"
            yAxisSuffix="kWh"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              // backgroundColor: "#e26a00",
              backgroundGradientFrom: AppStyles.color.secondaryColor,
              backgroundGradientTo: AppStyles.color.secondaryColor,
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(100, 255, 100, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726",
              },
            }}
            bezier
            style={{
              marginTop: 0,
              marginVertical: 8,
              borderBottomWidth: 0.5,
            }}
          />
        )} */}
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
              // onPress={() => updateButtonStyle(0)}
              onPress={() =>
                getChartData(
                  "2022-11-14T16:52:44.963Z",
                  "2022-11-15T16:52:44.963Z"
                )
              }
            >
              <Text style={oneWeekStyle}>1 WEEK</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={[styles.button, oneMonthBorder]}
              onPress={() => updateButtonStyle(1)}
            >
              <Text style={oneMonthStyle}>1 MONTH</Text>
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
              <Text style={threeMonthsStyle}>3 MONTHS</Text>
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
              <Text style={{ fontSize: 20, fontWeight: "500" }}>{name}</Text>
              {farmName != null && <Text>{farmName.toUpperCase()}</Text>}
              {farmName == null && <Text>{farmId}</Text>}
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
                    {
                      backgroundColor: AppStyles.color.primaryColor,
                    },
                  ]}
                >
                  <Text style={styles.firstColumnText}>
                    LATEST MEASUEREMENT
                  </Text>
                </View>
                <View
                  style={[
                    styles.cell,
                    { backgroundColor: AppStyles.color.secondaryColor },
                  ]}
                >
                  <Text style={styles.firstColumnText}>24 HOUR MAX</Text>
                </View>
                <View
                  style={[
                    styles.cell,
                    { backgroundColor: AppStyles.color.primaryColor },
                  ]}
                >
                  <Text style={styles.firstColumnText}>24 HOUR MIN</Text>
                </View>
                <View
                  style={[
                    styles.cell,
                    { backgroundColor: AppStyles.color.secondaryColor },
                  ]}
                >
                  <Text style={styles.firstColumnText}>IP ADDRESS</Text>
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
                  <Text>{latestMeasurement || ""}</Text>
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
                  <Text>0</Text>
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
                  <Text>10</Text>
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
