import { LinearGradient } from "expo-linear-gradient";
import React, { useLayoutEffect, useState } from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
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
  const {
    name,
    measuredEnergy,
    ipAddress,
    farmId,
    id,
    creationDate,
    deviceModel,
  } = route.params;
  const [latestMeasurement, setLatestMeasurement] = useState();
  const [farmName, setFarmName] = useState();
  const [measurements, setMeasurements] = useState([]);

  // const yLabels = ["OFF", "ON"];
  const [domainMinY, setDomainMinY] = useState(-10000);
  const [domainMaxY, setDomainMaxY] = useState(10);

  const [xLabels, setXLabels] = useState([]);

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
  // const [oneWeek]

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
    const tempDates = [];
    for (var i = 0; i < responseJson.length; i++) {
      if (i % 10 == 0) {
        tempData.push({ x: i, y: responseJson[i].measurement });
      }
      if (i % 10 == 0) tempDates.push(responseJson[i].date);
    }

    if (tempData.length > 4000) {
      setMeasurements(tempData.slice(0, 4000));
      setXLabels(tempDates.slice(0, 4000 / 10));
      console.log("LABELS1: ", xLabels.length);
    } else {
      setMeasurements(tempData);
      setXLabels(tempDates);
      console.log("LABELS2: ", xLabels.length);
    }
    console.log(domainMaxY, domainMinY);
    setDomainMaxY(Math.max(...measurements.map((o) => o.y)) + 1);
    setDomainMinY(
      Math.min(...measurements.map((o) => o.y).filter((o) => o.y != 1)) - 1
    );
  };

  useLayoutEffect(() => {
    getLatestMeasurement();
    getFarmName();
    if (measurements.length == 0) {
      getChartData();
    }
    console.log("UseLayoutEffect");
  }, []);

  const setFromDate = (subtractDays = 0, subtractMonths = 0) => {
    fromDate.setMonth(currentDate.getMonth() - subtractMonths);
    fromDate.setDate(currentDate.getDate() - subtractDays);
  };

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
          viewport={{ size: { width: 100 } }}
          style={{ height: 260, width: "100%" }}
          xDomain={{ min: 0, max: 4000 }}
          yDomain={{ min: -30000, max: 10000 }}
          // xLabels={"jan"}
          yLabels={["OFF", "ON"]}
          padding={{ left: 25, top: 10, bottom: 20, right: 20 }}
        >
          <VerticalAxis
            tickCount={2}
            // tickValues={[0, 1]}
            tickValues={[0]}
            theme={{
              labels: {
                // label: { rotation: -20 },
                label: { fontSize: 8, fontWeight: "500" },
                formatter: (v) => v.toFixed(1),
              },
            }}
          />
          <HorizontalAxis
            tickCount={Math.floor(xLabels.length / 10)} //TODO must be the same in the formatter
            // tickCount={4}
            // tickValues={[2]}
            // tickCount={20}
            includeOriginTick={false}
            theme={{
              axis: { stroke: { color: "#aaa", width: 2 } },
              ticks: { stroke: { color: "#aaa", width: 2 } },
              labels: {
                label: { rotation: 0 },
                formatter: (v) => xLabels[Math.floor(v / 10)], //TODO - have to make the ticks land on the actual data points and not "randomly"
              },
            }}
          />
          {measurements.length != 0 && (
            <Area
              theme={{
                gradient: {
                  from: { color: "#227BEA", opacity: 0.75 },
                  to: { color: "#227BEA", opacity: 0.1 },
                },
              }}
              data={measurements}
            />
          )}
          {measurements.length != 0 && (
            <Line
              data={measurements}
              smoothing="none"
              theme={{ stroke: { color: "#227BEA", width: 1 } }}
            />
          )}
          {/* <Line
            data={data2}
            smoothing="cubic-spline"
            theme={{ stroke: { color: "blue", width: 1 } }}
          /> */}
        </Chart>
        <Text style={styles.chartTitle}>Energy produced</Text>
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
              <View style={[styles.deviceName]}>
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
                    <Text style={styles.firstColumnText}>TOTAL PRODUCTION</Text>
                  </View>
                  <View style={[styles.cell]}>
                    <Text style={styles.firstColumnText}>FARM</Text>
                  </View>
                  <View
                    style={[
                      styles.cell,
                      { backgroundColor: AppStyles.color.secondaryColor },
                    ]}
                  >
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
                    <Text>
                      {(latestMeasurement / 1000).toFixed(2) || ""} [kWh]
                    </Text>
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
                    <Text>{(measuredEnergy / 1000).toFixed(2)} [kWh]</Text>
                  </View>
                  <View
                    style={[
                      styles.cell,
                      {
                        // backgroundColor: "#EBEBEB",
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
                        backgroundColor: "white",
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
