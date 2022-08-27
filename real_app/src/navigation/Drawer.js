import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import HomeStack from "./HomeStack";
import MeasuringDevicesStack from "./MeasuringDevicesStack";
import ConsumerDevicesStack from "./ConsumerDevicesStack";

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  MeasuringDevices: {
    screen: MeasuringDevicesStack,
  },
  ConsumerDevices: {
    screen: ConsumerDevicesStack,
  },
});

export default createAppContainer(RootDrawerNavigator);
