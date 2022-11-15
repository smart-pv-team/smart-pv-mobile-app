import React, { useEffect, useState } from "react";
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
import { ScrollView } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppStyles from "../../AppStyles";
import styles from "./styles";

export default function ConsumerDeviceScreen({ route, navigation }) {
  const { name, measuredEnergy, ipAddress, farmId, id } = route.params;
  const [latestMeasurement, setLatestMeasurement] = useState();
  const [farmName, setFarmName] = useState();

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

  const getLatestMeasurement = async () => {
    try {
      const response = await fetch(
        `https://smart-pv.herokuapp.com/measurement/devices/${id}/last`,
        { method: "GET" }
      );
      const responseJson = await response.json();
      setLatestMeasurement(responseJson.measurement);
    } catch (error) {
      console.error(error);
    }
  };

  const getFarmName = async () => {
    try {
      const response = await fetch(
        `https://smart-pv.herokuapp.com/management/farms/${farmId}`,
        { method: "GET" }
      );
      const responseJson = await response.json();
      setLatestMeasurement(responseJson.measurement);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLatestMeasurement();
    getFarmName();
    var date = new Date().getTime();
    console.log(date);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.graph}>
        <LineChart
          data={{
            labels: labels,
            datasets: [
              {
                data: data,
              },
            ],
          }}
          fromZero={true}
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
              <Text>{farmName || ""}</Text>
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
                  <Text style={{ fontWeight: "600" }}>LATEST MEASUEREMENT</Text>
                </View>
                <View
                  style={[
                    styles.cell,
                    { backgroundColor: AppStyles.color.secondaryColor },
                  ]}
                >
                  <Text style={{ fontWeight: "600" }}>24 HOUR MAX</Text>
                </View>
                <View
                  style={[
                    styles.cell,
                    { backgroundColor: AppStyles.color.primaryColor },
                  ]}
                >
                  <Text style={{ fontWeight: "600" }}>24 HOUR MIN</Text>
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
