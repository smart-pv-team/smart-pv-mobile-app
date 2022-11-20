import React, { useLayoutEffect, useState } from "react";
import { View, Text, StatusBar } from "react-native";
import {
  Chart,
  VerticalAxis,
  HorizontalAxis,
  Line,
  Area,
} from "react-native-responsive-linechart";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppStyles from "../../AppStyles";
import styles from "./styles";

export default function ConsumerDeviceScreen({ route, navigation }) {
  const { name, measuredEnergy, ipAddress, farmId, id } = route.params;
  const [latestMeasurement, setLatestMeasurement] = useState();
  const [farmName, setFarmName] = useState();
  const [measurements, setMeasurements] = useState([]);

  const currentDate = new Date();
  const fromDate = new Date(currentDate);
  fromDate.setDate(fromDate.getDate() - 7);

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
  };

  const getChartData = async () => {
    console.log("FROM DATE: ", fromDate);
    const response = await fetch(
      `https://smart-pv.herokuapp.com/measurement/devices/${id}/range?startDate=${fromDate.toISOString()}&endDate=${currentDate.toISOString()}`,
      { method: "GET" }
    );

    const responseJson = await response.json();
    console.log(response.status);
    console.log("Length: ", responseJson.length);

    const tempData = [];
    for (var i = 0; i < responseJson.length; i++) {
      tempData.push({ x: i, y: responseJson[i].measurement });
    }

    if (tempData.length > 4000) {
      setMeasurements(tempData.slice(0, 4000));
    } else {
      setMeasurements(tempData);
    }
  };

  useLayoutEffect(() => {
    getLatestMeasurement();
    getFarmName();
    getChartData();
    console.log("UseLayoutEffect");
  }, []);

  const setFromDate = (subtractDays = 0, subtractMonths = 0) => {
    fromDate.setMonth(currentDate.getMonth() - subtractMonths);
    fromDate.setDate(currentDate.getDate() - subtractDays);
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.graph}>
        <Chart
          viewport={{ size: { width: 100 } }}
          style={{ height: 260, width: "100%", backgroundColor: "#eee" }}
          xDomain={{ min: 0, max: 160000 }}
          yDomain={{ min: -20000, max: 30000 }}
          xLabels={"jan"}
          yLabels={["OFF", "ON"]}
          padding={{ left: 25, top: 10, bottom: 30, right: 20 }}
        >
          <VerticalAxis
            tickCount={2}
            // tickValues={[0, 1]}
            tickValues={[0]}
            theme={{
              labels: {
                // label: { rotation: -20 },
                label: { fontSize: 8, fontWeight: "500" },
                // formatter: (v) => yLabels[v],
              },
            }}
          />
          <HorizontalAxis
            tickCount={Math.floor(measurements.length / 100)}
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
              style={[styles.button, oneMonthBorder]}
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
                  borderLeftWidth: 0,
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

            <View style={styles.detailedInfo}>
              <View
                style={{
                  flex: 0.7,
                  backgroundColor: "#EBEBEB",
                }}
              >
                <View style={[styles.cell]}>
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
                <View style={[styles.cell]}>
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
                  backgroundColor: "#EBEBEB",
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
                  <Text>{latestMeasurement || ""}</Text>
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
                  <Text>0</Text>
                </View>
                <View
                  style={[
                    styles.cell,
                    {
                      backgroundColor: "#EBEBEB",
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
                      backgroundColor: "white",
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
  );
}
