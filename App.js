import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useFonts, TitilliumWeb_600SemiBold } from '@expo-google-fonts/titillium-web';
import CustomNavigator from './components/CustomNavigator';
import AppLoading from 'expo-app-loading';

function App() {
  const [fontsLoaded] = useFonts({ TitilliumWeb_600SemiBold });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
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
