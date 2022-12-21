import React, { useState, useLayoutEffect } from "react";
import { View, Text, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./styles";
import AppStyles from "../../AppStyles";

export default function FarmScreen({ route, navigation }) {
  const [farm, setFarm] = useState();

  const asyncGetDevice = (deviceId) => {
    return new Promise((resolve) => {
      fetch(`https://smart-pv.herokuapp.com/management/farms`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((responseJson) => tempDevices.push(responseJson))
        .then(() => {
          resolve();
        });
    });
  };

  const fetchFarm = async (farmId) => {
    const farmResponse = await fetch(
      `https://smart-pv.herokuapp.com/management/farms/${farmId}`,
      {
        method: "GET",
      }
    );

    const farmJson = await farmResponse.json();
    setFarm(farmJson);
    console.log(farmJson);
  };

  const fetchData = async () => {
    const farmsResponse = await fetch(
      "https://smart-pv.herokuapp.com/management/farms",
      { method: "GET" }
    );

    const farmsIds = await farmsResponse.json();

    console.log(farmsIds[0]);

    fetchFarm(farmsIds[0]);
  };

  useLayoutEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar />
      <LinearGradient
        colors={[AppStyles.color.backgroundColor, "#969696"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={{
          flex: 1.5,
          width: "100%",
          alignItems: "center",
        }}
      >
        {farm != null && (
          <View style={styles.farmContainer}>
            <View style={styles.farmHeader}>
              <Text style={styles.headerText}>
                {farm["name"].toUpperCase()}
              </Text>
            </View>
            <View style={styles.farmInfo}>
              <View style={styles.firstColumn}>
                <View style={styles.cell}>
                  <Text style={styles.firstColumnText}>DESCRIPTION</Text>
                </View>
                <View
                  style={[
                    styles.cell,
                    { backgroundColor: AppStyles.color.secondaryColor },
                  ]}
                >
                  <Text style={styles.firstColumnText}>ENERGY THRESHOLD</Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.firstColumnText}>ALGORITHM</Text>
                </View>
                <View
                  style={[
                    styles.cell,
                    { backgroundColor: AppStyles.color.secondaryColor },
                  ]}
                >
                  <Text style={styles.firstColumnText}>DEVICES IDLE TIME</Text>
                </View>
                <View style={styles.cell}>
                  <Text style={styles.firstColumnText}>MEASUREMENT PERIOD</Text>
                </View>
              </View>
              <View style={styles.secondColumn}>
                <View style={[styles.cell, { borderRightWidth: 0 }]}>
                  <Text>{farm["description"]}</Text>
                </View>
                <View
                  style={[
                    styles.cell,
                    { borderRightWidth: 0 },
                    { backgroundColor: AppStyles.color.secondaryColor },
                  ]}
                >
                  <Text>{farm["energyLimit"]} [kW]</Text>
                </View>
                <View style={[styles.cell, { borderRightWidth: 0 }]}>
                  <Text>{farm["algorithmType"].replace("_", " ")}</Text>
                </View>
                <View
                  style={[
                    styles.cell,
                    { borderRightWidth: 0 },
                    { backgroundColor: AppStyles.color.secondaryColor },
                  ]}
                >
                  {parseFloat(farm["minutesBetweenDeviceStatusSwitch"]) <=
                    1.0 && (
                    <Text>
                      {farm["minutesBetweenDeviceStatusSwitch"]} minute
                    </Text>
                  )}
                  {parseFloat(farm["minutesBetweenDeviceStatusSwitch"]) >
                    1.0 && (
                    <Text>
                      {farm["minutesBetweenDeviceStatusSwitch"]} minutes
                    </Text>
                  )}
                </View>
                <View style={[styles.cell, { borderRightWidth: 0 }]}>
                  {parseFloat(farm["minutesToAverageMeasurement"]) > 1.0 && (
                    <Text>{farm["minutesToAverageMeasurement"]} minutes</Text>
                  )}
                  {parseFloat(farm["minutesToAverageMeasurement"]) <= 1.0 && (
                    <Text>{farm["minutesToAverageMeasurement"]} minute</Text>
                  )}
                </View>
              </View>
            </View>
          </View>
        )}
      </LinearGradient>
    </View>
  );
}
