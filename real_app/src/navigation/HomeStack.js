import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home/HomeScreen";
import MeasuringDevicesScreen from "../screens/MeasuringDevices/MeasuringDevicesScreen";
import MeasuringDeviceScreen from "../screens/MeasuringDevice/MeasuringDeviceScreen";
import ConsumerDevicesScreen from "../screens/ConsumerDevices/ConsumerDevicesScreen";
import DrawerHeader from "../components/DrawerHeader/DrawerHeader";
import React from "react";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          header: ({ navigation }) => (
            <DrawerHeader navigation={navigation} name="Home" />
          ),
        }}
      />
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
