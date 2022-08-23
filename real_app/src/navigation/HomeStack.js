import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/Home/HomeScreen";
import MeasuringDevicesScreen from "../screens/MeasuringDevices/MeasuringDevicesScreen";
import MeasuringDeviceScreen from "../screens/MeasuringDevice/MeasuringDeviceScreen";
import ConsumerDevicesScreen from "../screens/ConsumerDevices/ConsumerDevicesScreen";

const screens = {
  Home: {
    screen: HomeScreen,
  },
  ConsumerDevices: {
    screen: ConsumerDevicesScreen,
  },
  MeasuringDevices: {
    screen: MeasuringDevicesScreen,
  },
  MeasuringDevice: {
    screen: MeasuringDeviceScreen,
  },
};

const Stack = createStackNavigator(screens);

export default createAppContainer(Stack);
