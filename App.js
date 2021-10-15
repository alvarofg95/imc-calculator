import React from 'react';
import { StyleSheet } from 'react-native';
import CustomNavigator from './components/CustomNavigator';

export default function App() {
  return (
    <CustomNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
