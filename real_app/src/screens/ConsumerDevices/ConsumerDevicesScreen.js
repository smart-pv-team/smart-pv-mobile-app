import React, { useState, useLayoutEffect } from "react";
import {
  Text,
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import ConsumerDeviceMin from "../../components/ConsumerDeviceMin/ConsumerDeviceMin";
import styles from "./styles";

export default function ConsumerDevicesScreen({ navigation }) {
  const [testDevices, setTestDevices] = useState([]);
  const tempDevices = [];
  useLayoutEffect(() => {
    const addDevice = async (device) => {
      tempDevices.push(device);
      return tempDevices;
    };

    const fetchData = async () => {
      const devicesResponse = await fetch(
        "https://smart-pv.herokuapp.com/consumption/devices",
        { method: "GET" }
      );
      const deviceIds = await devicesResponse.json();

      for (var i = 0; i < deviceIds.length; i++) {
        const deviceResponse = await fetch(
          `https://smart-pv.herokuapp.com/consumption/devices/${deviceIds[i]}`,
          { method: "GET" }
        );

        const device = await deviceResponse.json();
        const newDevices = await addDevice(device);
        console.log(i);
        setTestDevices(newDevices);
        console.log("after");
      }

      // deviceIds.forEach(async (id) => {
      //   const deviceResponse = await fetch(
      //     `https://smart-pv.herokuapp.com/consumption/devices/${id}`,
      //     { method: "GET" }
      //   );
      // });

      // const fetchDevices = async () => {
      //   deviceIds.forEach(async (id) => {
      //     const deviceResponse = await fetch(
      //       `https://smart-pv.herokuapp.com/consumption/devices/${id}`,
      //       { method: "GET" }
      //     );
      //     const device = await deviceResponse.json();

      //     const a = async (device) => {
      //       console.log("in");
      //       tempDevices.push(device);
      //       console.log("LENGTH: ", tempDevices.length);
      //       return tempDevices;
      //     };

      //     console.log("before");
      //     const r = await a(device);
      //     // console.log(r);
      //     console.log("after");
      //     setTestDevices(r);
      //     console.log("after");
      //   });

      //   console.log("after");
      //   // setTestDevices(tempDevices);
      //   console.log("after after");
      //   // return tempDevices;
      // };
      // fetchDevices().catch(console.error);
      // console.log("AFTER");

      // const fetchDevice = async (id) => {
      //   const deviceResponse = await fetch(
      //     `https://smart-pv.herokuapp.com/consumption/devices/${id}`,
      //     { method: "GET" }
      //   );

      //   const device = await deviceResponse.json();
      //   tempDevices.push(device);
      //   setTestDevices(tempDevices);
      //   console.log(tempDevices.length);
      // };

      // deviceIds.forEach((id) => {
      //   fetchDevice(id).catch(console.error);
      // });

      // const response = await fetch(
      //   "http://192.168.43.205:3010/consumer/devices", //ipconfig to get IP address - localhost is being used by expo
      //   {
      //     method: "GET",
      //     headers: {
      //       Accept: "application/json",
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );
      // const json = await response.json();
      // setDevices(json["devices"]);
    };

    fetchData().catch(console.error);
  }, []);

  const [devices, setDevices] = useState();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 6 }} />
      <Button
        title="PRESS ME"
        onPress={() => {
          console.log(testDevices.length);
          setTestDevices(testDevices);
          // console.log(testDevices[0]);
          // console.log(testDevices[0].controlParameters.powerConsumption);
        }}
      ></Button>
      <FlatList
        data={testDevices}
        extraData={this.state.refresh}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ width: "50%" }}
            onPress={() => {
              navigation.navigate("ConsumerDevice", item);
            }}
          >
            <ConsumerDeviceMin
              deviceStatus={item.isOn}
              deviceName={item.name}
              powerConsumption={item.controlParameters.powerConsumption}
              style={{}}
            />
          </TouchableOpacity>
        )}
        overScrollMode={"never"}
      />
    </View>
  );
}
