import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomNavigator from './components/CustomNavigator';

function App() {
  return (
    <View style={styles.container}>
      <CustomNavigator style />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#66D7D1',
    height: '100%',
    width: '100%',
  }
})

export default App;
