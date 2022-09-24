import { createDrawerNavigator } from "@react-navigation/drawer";
import { createAppContainer } from "react-navigation";
import { View, Text } from "react-native";

import HomeStack from "./HomeStack";
import MeasuringDevicesStack from "./MeasuringDevicesStack";
import ConsumerDevicesStack from "./ConsumerDevicesStack";
import DrawerContent from "../components/DrawerContent/DrawerContent";
import HomeScreen from "../screens/Home/HomeScreen";
import Header from "../components/Header/Header";
import MeasuringDevicesScreen from "../screens/MeasuringDevices/MeasuringDevicesScreen";

// const RootDrawerNavigator = createDrawerNavigator({
//   Home: {
//     screen: HomeStack,
//   },
//   MeasuringDevices: {
//     screen: MeasuringDevicesStack,
//   },
//   ConsumerDevices: {
//     screen: ConsumerDevicesStack,
//   },
// });

// export default createAppContainer(RootDrawerNavigator);

// const Drawer = createDrawerNavigator({
//   Home: {
//     screen: HomeStack,
//   },
// });
// export default createAppContainer(Drawer);

// const Drawer = createAppContainer();

// const MyDrawer = () => {
//   return (
//     <Drawer.Navigator screenOptions={{ headerShown: false }}>
//       <Drawer.Screen name="Home" component={HomeScreen} />
//     </Drawer.Navigator>
//   );
// };

// export default MyDrawer;

const LeftDrawer = createDrawerNavigator();

function LeftDrawerScreen() {
  return (
    <LeftDrawer.Navigator
      id="LeftDrawer"
      screenOptions={{ drawerPosition: "left" }}
    >
      <LeftDrawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: ({ navigation }) => (
            <Header navigation={navigation} name="Home" />
          ),
        }}
      />
      <LeftDrawer.Screen
        name="MeasuringDevices"
        component={MeasuringDevicesStack}
        options={{
          header: ({ navigation }) => (
            <Header navigation={navigation} name="Measuring Devices" />
          ),
          // headerTitle: () => <Header name="MEASURING DEVICES" />,
        }}
      />
      <LeftDrawer.Screen
        name="ConsumerDevices"
        component={ConsumerDevicesStack}
      />
    </LeftDrawer.Navigator>
  );
}

export default LeftDrawerScreen;

// function RightDrawerContent() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>This is the right drawer</Text>
//     </View>
//   );
// }

// const RightDrawer = createDrawerNavigator();

// function RightDrawerScreen() {
//   return (
//     <RightDrawer.Navigator
//       id="RightDrawer"
//       drawerContent={(props) => <RightDrawerContent {...props} />}
//       screenOptions={{
//         drawerPosition: "right",
//         headerShown: false,
//       }}
//     >
//       <RightDrawer.Screen name="HomeDrawer" component={LeftDrawerScreen} />
//     </RightDrawer.Navigator>
//   );
// }

// export default RightDrawerScreen;
