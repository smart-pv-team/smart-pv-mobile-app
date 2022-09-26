import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeStack from "./HomeStack";
import MeasuringDevicesStack from "./MeasuringDevicesStack";
import ConsumerDevicesStack from "./ConsumerDevicesStack";
import CustomDrawerContent from "../components/DrawerContent/DrawerContent";
import { MaterialIcons } from "@expo/vector-icons";

const LeftDrawer = createDrawerNavigator();

function LeftDrawerScreen() {
  return (
    <LeftDrawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      id="LeftDrawer"
      screenOptions={{
        drawerPosition: "left",
        headerShown: false,
        swipeEdgeWidth: 0,
        drawerStyle: {
          width: 251,
        },
        drawerActiveBackgroundColor: "#F5F5F5",
        drawerActiveTintColor: "black",
        drawerInactiveTintColor: "#606060",
      }}
    >
      <LeftDrawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          drawerIcon: () => <MaterialIcons name="home" size={30} />,
        }}
      />
      <LeftDrawer.Screen
        name="Measuring Devices"
        component={MeasuringDevicesStack}
        options={{
          drawerIcon: () => <MaterialIcons name="bolt" size={30} />,
        }}
      />
      <LeftDrawer.Screen
        name="Consumer Devices"
        component={ConsumerDevicesStack}
        options={{
          drawerIcon: () => <MaterialIcons name="microwave" size={30} />,
        }}
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
