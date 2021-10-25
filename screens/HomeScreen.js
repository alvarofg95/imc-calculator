import React, { useReducer } from 'react';
import { Text, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import SwitchableButtons from '../components/SwitchableButtons';

const initialState = {
  age: null,
  height: null,
  gender: null,
  weight: null,
}

const reducer = (state, action) => {
  if (action.type === 'CHANGE') {
    return {
      ...state,
      [action.key]: action.value,
    };
  }
  return state;
}

const HomeScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log({ state })

  const onChangeInput = (key, value) => {
    dispatch({
      type: 'CHANGE',
      value,
      key,
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Altura</Text>
      <TextInput
        value={state.height}
        keyboardType="numeric"
        onChangeText={(value) => onChangeInput('height', value)}
      />

      <Text>Peso</Text>
      <TextInput
        keyboardType="numeric"
        value={state.weight}
        onChangeText={(value) => onChangeInput('weight', value)}
      />

      <Text>Edad</Text>
      <TextInput
        keyboardType="numeric"
        value={state.age}
        onChangeText={(value) => onChangeInput('age', value)}
      />

      <Text>Sexo</Text>
      <SwitchableButtons value={state.gender} onChange={(value) => onChangeInput('gender', value)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1234'
  }
})

export default HomeScreen;
