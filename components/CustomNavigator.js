import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ConfigurationScreen from '../screens/ConfigurationScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const CustomNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: "red",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
    {/* <Drawer.Navigator>
      <Drawer.Screen name="Configuration" component={ConfigurationScreen} />
    </Drawer.Navigator> */}
  </NavigationContainer>
);

export default CustomNavigator;
