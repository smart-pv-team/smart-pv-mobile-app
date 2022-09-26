import React, { useState } from "react";
import {
  Text,
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import ConsumerDeviceMiniature from "../../components/ConsumerDeviceMiniature/ConsumerDeviceMiniature";
import styles from "./styles";

export default function ConsumerDevicesScreen({ navigation }) {
  const [devices, setDevices] = useState([
    { deviceName: "Air conditioner", key: "1" },
    { deviceName: "Smart fridge", key: "2" },
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
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <FlatList
        data={devices}
        numColumns={2}
        renderItem={({ item }) => (
          <ConsumerDeviceMiniature
            style={{ backgroundColor: "black" }}
            deviceStatus={item.deviceStatus}
            deviceName={item.powerConsumption}
          />
          // <Image
          //   style={{ width: 100, height: 100 }}
          //   source={require("../../../assets/ac-unit.webp")}
          // />
        )}
      ></FlatList>
    </View>
  );
}
