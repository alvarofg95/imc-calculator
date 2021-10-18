import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ConfigurationScreen from '../screens/ConfigurationScreen';

const Drawer = createDrawerNavigator();

const CustomNavigator = () => (
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Configuration" component={ConfigurationScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default CustomNavigator;
