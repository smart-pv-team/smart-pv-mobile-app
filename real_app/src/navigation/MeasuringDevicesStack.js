import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import MeasuringDevicesScreen from "../screens/MeasuringDevices/MeasuringDevicesScreen";
import MeasuringDeviceScreen from "../screens/MeasuringDevice/MeasuringDeviceScreen";
import Header from "../components/Header/Header";

const screens = {
  MeasuringDevices: {
    screen: MeasuringDevicesScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="Measuring devices" />
        ),
      };
    },
  },
  MeasuringDevice: {
    screen: MeasuringDeviceScreen,
  },
};

const MeasuringDevicesStack = createStackNavigator(screens);

export default MeasuringDevicesStack;
