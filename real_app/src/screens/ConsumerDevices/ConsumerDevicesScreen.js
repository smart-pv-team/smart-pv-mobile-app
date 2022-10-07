import React, { useState } from "react";
import {
  Text,
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import ConsumerDeviceMin from "../../components/ConsumerDeviceMin/ConsumerDeviceMin";
import ConsumerDeviceMiniature from "../../components/ConsumerDeviceMiniature/ConsumerDeviceMiniature";
import styles from "./styles";

export default function ConsumerDevicesScreen({ navigation }) {
  const [devices, setDevices] = useState([
    {
      deviceName: "Air conditioner",
      deviceStatus: "on",
      powerConsumption: 40.5,
      key: "1",
    },
    {
      deviceName: "Smart fridge",
      deviceStatus: "off",
      powerConsumption: 35.2,
      key: "2",
    },
    {
      deviceName: "Heat pump",
      powerConsumption: 15.8,
      deviceStatus: "off",
      key: "3",
    },
    {
      deviceName: "Power container",
      deviceStatus: "on",
      powerConsumption: 45.8,
      key: "4",
    },
    {
      deviceName: "Heat pump",
      deviceStatus: "off",
      powerConsumption: 15.8,
      key: "5",
    },
    {
      deviceName: "Power container",
      deviceStatus: "on",
      powerConsumption: 45.8,
      key: "6",
    },
    {
      deviceName: "Heat pump",
      deviceStatus: "off",
      powerConsumption: 15.8,
      key: "7",
    },
  ]);

  // return (
  //   <View style={styles.container}>
  //     <StatusBar></StatusBar>
  //     <View style={styles.devicesList}>
  //       <FlatList
  //         showsVerticalScrollIndicator={false}
  //         data={devices}
  //         renderItem={({ item }) => (
  //           <TouchableOpacity
  //             onPress={() => {
  //               navigation.navigate("ConsumerDevice", item);
  //             }}
  //           >
  //             <ConsumerDeviceMiniature
  //               powerConsumption={item.powerConsumption}
  //               deviceStatus={item.status}
  //             />

  //             {/* <View style={{ backgroundColor: "red" }}> */}
  //             {/* <MeasuringDeviceMiniature
  //               powerProduction={item.powerProduction}
  //               deviceStatus={item.status}
  //               style={{ flex: 1 }}
  //             ></MeasuringDeviceMiniature> */}
  //             {/* </View> */}
  //           </TouchableOpacity>
  //         )}
  //       />
  //     </View>
  //   </View>
  // );

  // return (
  //   <View style={{ flex: 1, alignItems: "center" }}>
  //     <FlatList
  //       data={devices}
  //       numColumns={2}
  //       renderItem={({ item }) => (
  //         <ConsumerDeviceMiniature
  //           style={{ backgroundColor: "black" }}
  //           deviceStatus={item.deviceStatus}
  //           deviceName={item.powerConsumption}
  //         />
  //       )}
  //     ></FlatList>
  //   </View>
  // );

  return (
    <View style={{ flex: 1 }}>
      {/* <View style={{flex: 1}}> */}

      <FlatList
        data={devices}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ width: "50%" }}
            onPress={() => {
              navigation.navigate("ConsumerDevice", item);
            }}
          >
            <ConsumerDeviceMin
              deviceStatus={item.deviceStatus}
              deviceName={item.deviceName}
              powerConsumption={item.powerConsumption}
              style={{}}
            />
          </TouchableOpacity>
        )}
      />
      {/* </View> */}
      {/* <View
        style={{ flex: 1, width: "50%", height: 100, backgroundColor: "red" }}
      /> */}
    </View>
  );
}
