import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home/HomeScreen";
import DrawerHeader from "../components/DrawerHeader/DrawerHeader";
import React from "react";
import AppStyles from "../AppStyles";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: AppStyles.color.backgroundColor,
        },
      }}
    >
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
