import React, { useReducer } from 'react';
import { Text, TextInput, SafeAreaView, View, StyleSheet, KeyboardAvoidingView, Keyboard } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import SwitchableButtons from '../components/SwitchableButtons';
import { calculateBmi } from '../utils/calculator';

const initialState = {
  age: null,
  height: null,
  gender: null,
  weight: null,
  result: null,
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

  const onSubmit = () => {
    console.log('AKI')
    const result = calculateBmi(state);
    console.log('RESULT', result)
    dispatch({
      type: 'CHANGE',
      result,
      key: 'result',
    })
  }

  return (
    <KeyboardAvoidingView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.header}>Calculadora IMC</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Altura</Text>
            <TextInput
              value={state.height}
              keyboardType="numeric"
              style={styles.input}
              onChangeText={(value) => onChangeInput('height', value)}
            />
            <Text style={styles.label}>cm</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Peso</Text>
            <TextInput
              value={state.weight}
              keyboardType="numeric"
              style={styles.input}
              onChangeText={(value) => onChangeInput('weight', value)}
            />
            <Text style={styles.label}>kg</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Edad</Text>
            <TextInput
              value={state.age}
              keyboardType="numeric"
              style={styles.input}
              onChangeText={(value) => onChangeInput('age', value)}
            />
            <Text style={styles.label}></Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Sexo</Text>
            <SwitchableButtons value={state.gender} onChange={(value) => onChangeInput('gender', value)} />
          </View>

          <TouchableOpacity onPress={onSubmit}>
            <Text>Calcular</Text>
          </TouchableOpacity>
          {state.result && state.result.result}
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#66D7D1',
    width: '100%',
    height: '100%'
  },
  header: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'TitilliumWeb_600SemiBold',
    color: '#F4F1BB',
  },
  inputContainer: {
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  label: {
    fontSize: 28,
    fontFamily: 'TitilliumWeb_600SemiBold',
    width: '35%',
    textAlign: 'center'
  },
  input: {
    backgroundColor: '#F4F1BB',
    width: '30%',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 20,
    borderRadius: 10,
    textAlign: 'center',
    fontFamily: 'TitilliumWeb_600SemiBold',
  }
})

export default HomeScreen;
