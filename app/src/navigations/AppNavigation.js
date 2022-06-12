import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DevicesScreen from '../screens/Devices/DevicesScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import DeviceScreen from '../screens/Device/DeviceScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import Parameters from '../screens/Parameters/Parameters';
import ProducersScreen from '../screens/Producers/ProducersScreen';
import ProducerScreen from '../screens/Producer/ProducerScreen';
import DevicesOfCategoryScreen from '../screens/DevicesOfCategoryScreen/RecipesListScreen';

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          alignSelf: 'center',
          flex: 1,
        },
      }}>
      <Stack.Screen name="Devices" component={DevicesScreen} />
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="Device" component={DeviceScreen} />
      <Stack.Screen name="Producers" component={ProducersScreen} />
      <Stack.Screen name="Producer" component={ProducerScreen} />
      <Stack.Screen name="Parameters" component={Parameters} />
      <Stack.Screen
        name="DevicesOfCategory"
        component={DevicesOfCategoryScreen}
      />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerPosition="left"
      initialRouteName="Main"
      drawerStyle={{
        width: 250,
      }}
      screenOptions={{headerShown: false}}
      drawerContent={({navigation}) => (
        <DrawerContainer navigation={navigation} />
      )}>
      <Drawer.Screen name="Main" component={MainNavigator} />
    </Drawer.Navigator>
  );
}

export default function AppContainer() {
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  );
}

console.disableYellowBox = true;
