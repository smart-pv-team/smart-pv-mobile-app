import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home/HomeScreen";
import MeasuringDevicesScreen from "../screens/MeasuringDevices/MeasuringDevicesScreen";
import MeasuringDeviceScreen from "../screens/MeasuringDevice/MeasuringDeviceScreen";
import ConsumerDevicesScreen from "../screens/ConsumerDevices/ConsumerDevicesScreen";
import Header from "../components/Header/Header";
import React from "react";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

// const screens = {
//   Home: {
//     screen: HomeScreen,
//     navigationOptions: ({ navigation }) => {
//       return {
//         headerTitle: () => (
//           <Header
//             navigation={navigation}
//             title="Home"
//             showSettingsIcon={false}
//           />
//         ),
//       };
//     },
//   },
// };

// const HomeStack = createStackNavigator(screens);

// export default HomeStack;
