import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/Home/HomeScreen";
import MeasuringDevicesScreen from "../screens/MeasuringDevices/MeasuringDevicesScreen";
import MeasuringDeviceScreen from "../screens/MeasuringDevice/MeasuringDeviceScreen";
import ConsumerDevicesScreen from "../screens/ConsumerDevices/ConsumerDevicesScreen";

const screens = {
  MeasuringDevices: {
    screen: MeasuringDevicesScreen,
  },
};

const MeasuringDevicesStack = createStackNavigator(screens);

export default MeasuringDevicesStack;
