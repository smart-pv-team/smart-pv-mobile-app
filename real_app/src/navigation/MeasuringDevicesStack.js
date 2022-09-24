import { createStackNavigator } from "@react-navigation/stack";
import { createAppContainer } from "react-navigation";
import MeasuringDevicesScreen from "../screens/MeasuringDevices/MeasuringDevicesScreen";
import MeasuringDeviceScreen from "../screens/MeasuringDevice/MeasuringDeviceScreen";
import Header from "../components/Header/Header";

const Stack = createStackNavigator();

export default function MeasuringDevicesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MeasuringDevices"
        component={MeasuringDevicesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="MeasuringDevice">
        {(props) => <MeasuringDeviceScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
// const screens = {
//   MeasuringDevices: {
//     screen: MeasuringDevicesScreen,
//     navigationOptions: ({ navigation }) => {
//       return {
//         headerTitle: () => (
//           <Header navigation={navigation} title="Measuring devices" />
//         ),
//       };
//     },
//   },
//   MeasuringDevice: {
//     screen: MeasuringDeviceScreen,
//   },
// };

// const MeasuringDevicesStack = createStackNavigator(screens);

// export default MeasuringDevicesStack;
