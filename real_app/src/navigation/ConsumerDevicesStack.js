import { createStackNavigator } from "@react-navigation/stack";
import ConsumerDevicesScreen from "../screens/ConsumerDevices/ConsumerDevicesScreen";
import ConsumerDeviceScreen from "../screens/ConsumerDevice/ConsumerDeviceScreen";
import Header from "../components/Header/Header";
import React from "react";

const Stack = createStackNavigator();

export default function ConsumerDevicesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Consumer Devices" component={ConsumerDevicesScreen} />
    </Stack.Navigator>
  );
}
// const screens = {
//   ConsumerDevices: {
//     screen: ConsumerDevicesScreen,
//     navigationOptions: ({ navigation }) => {
//       return {
//         headerTitle: () => (
// <Header navigation={navigation} title="Consumer devices" />
//         ),
//       };
//     },
//   },
//   ConsumerDevice: {
//     screen: ConsumerDeviceScreen,
//   },
// };

// const ConsumerDevicesStack = createStackNavigator(screens);

// export default ConsumerDevicesStack;
