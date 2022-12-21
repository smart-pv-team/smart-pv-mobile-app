import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeStack from "./HomeStack";
import MeasuringDevicesStack from "./MeasuringDevicesStack";
import ConsumerDevicesStack from "./ConsumerDevicesStack";
import FarmStack from "./FarmStack";
import CustomDrawerContent from "../components/DrawerContent/DrawerContent";
import {
  MaterialIcons,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import FarmScreen from "../screens/Farm/FarmScreen";
import LoginScreen from "../screens/Login/LoginScreen";

const LeftDrawer = createDrawerNavigator();

function LeftDrawerScreen() {
  // var isSignedIn = false;

  return global.isSignedIn ? (
    <>
      <LeftDrawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        id="LeftDrawer"
        screenOptions={{
          drawerPosition: "left",
          headerShown: false,
          swipeEdgeWidth: 30,
          drawerStyle: {
            width: 251,
          },
          drawerLabelStyle: {
            // marginLeft: 5,
            color: "white",
          },
          drawerActiveBackgroundColor: "#227BEA",
          drawerActiveTintColor: "black",
          drawerInactiveTintColor: "#606060",
        }}
        // drawerContentOptions={{
        //   activeTintColor: "red",
        //   activeBackgroundColor: "grey",
        //   inactiveTintColor: "blue",
        //   inactiveBackgroundColor: "white",
        //   labelStyle: {
        //     marginLeft: 5,
        //   },
        // }}
      >
        {/* <LeftDrawer.Screen
        name="Login"
        component={LoginScreen}
        options={{
          drawerIcon: () => (
            <MaterialIcons name="home" size={30} style={{ color: "white" }} />
          ),
        }}
      /> */}
        <LeftDrawer.Screen
          name="Home"
          component={HomeStack}
          options={{
            drawerIcon: () => (
              <MaterialIcons name="home" size={30} style={{ color: "white" }} />
            ),
          }}
        />
        <LeftDrawer.Screen
          name="Measuring Devices"
          component={MeasuringDevicesStack}
          options={{
            drawerIcon: () => (
              <MaterialIcons name="bolt" size={30} style={{ color: "white" }} />
            ),
          }}
        />
        <LeftDrawer.Screen
          name="Consumer Devices"
          component={ConsumerDevicesStack}
          options={{
            drawerIcon: () => (
              <MaterialIcons
                name="microwave"
                size={30}
                style={{ color: "white" }}
              />
            ),
          }}
        />
        <LeftDrawer.Screen
          name="Farm"
          component={FarmStack}
          options={{
            drawerIcon: () => (
              <MaterialIcons
                name="monitor" //ballot
                size={30}
                style={{ color: "white" }}
              />
            ),
          }}
        />
      </LeftDrawer.Navigator>
    </>
  ) : (
    // <LeftDrawer.Navigator
    //   drawerContent={(props) => <CustomDrawerContent {...props} />}
    //   id="LeftDrawer"
    //   screenOptions={{
    //     drawerPosition: "left",
    //     headerShown: false,
    //     swipeEdgeWidth: 30,
    //     drawerStyle: {
    //       width: 251,
    //     },
    //     drawerLabelStyle: {
    //       color: "white",
    //     },
    //     drawerActiveBackgroundColor: "#227BEA",
    //     drawerActiveTintColor: "black",
    //     drawerInactiveTintColor: "#606060",
    //   }}
    // >
    //   <LeftDrawer.Screen
    //     name="Login"
    //     component={LoginScreen}
    //     options={{
    //       drawerIcon: () => (
    //         <MaterialIcons
    //           name="monitor" //ballot
    //           size={30}
    //           style={{ color: "white" }}
    //         />
    //       ),
    //     }}
    //   />
    // </LeftDrawer.Navigator>
    <LoginScreen />
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
