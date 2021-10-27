import React, { useReducer } from 'react';
import { Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, StyleSheet, KeyboardAvoidingView, Keyboard } from 'react-native';
import ErrorMessage from '../components/ErrorMessage';
import Result from '../components/Result';
import SwitchableButtons from '../components/SwitchableButtons';
import { calculateBmi } from '../utils/calculator';

const initialState = {
  age: null,
  height: null,
  gender: null,
  weight: null,
  result: {
    bmiValue: null,
    result: null,
  },
  error: null,
}

const reducer = (state, action) => {
  if (action.type === 'CHANGE') {
    return {
      ...state,
      [action.key]: action.value,
      error: null,
    };
  } else if (action.type === 'CLEAR') {
    return initialState;
  } else if (action.type === 'SHOW_ERROR') {
    return {
      ...state,
      error: action.value,
    };
  }
  return state;
}

const getErrorType = (height, weight) => {
  let errorType = '';
  if (!height) {
    errorType = 'heightError';
  }
  if (!weight) {
    errorType = 'weightError';
  }
  if (!height && !weight) {
    errorType = 'heightAndWeightError';
  }
  console.log('ERROR TYPE', errorType)
  return errorType;
}

const HomeScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChangeInput = (key, value) => {
    dispatch({
      type: 'CHANGE',
      value,
      key,
    })
  }

  const onSubmit = () => {
    const { height, weight } = state;
    if (height && weight) {
      const result = calculateBmi(state);
      dispatch({
        type: 'CHANGE',
        value: result,
        key: 'result',
      });
    } else {
      dispatch({
        type: 'SHOW_ERROR',
        value: getErrorType(height, weight),
      });
    }
  }

  const onClear = () => {
    dispatch({
      type: 'CLEAR',
    })
  }

  const {
    height,
    weight,
    age,
    gender,
    result,
    error,
  } = state;
  const mustShowClear = !!result.bmiValue;
  console.log('error', error);
  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Text style={styles.header}>Calculadora IMC</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Altura*</Text>
            <TextInput
              value={height}
              keyboardType="numeric"
              style={styles.input}
              onChangeText={(value) => onChangeInput('height', value)}
            />
            <Text style={styles.label}>cm</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Peso*</Text>
            <TextInput
              value={weight}
              keyboardType="numeric"
              style={styles.input}
              onChangeText={(value) => onChangeInput('weight', value)}
            />
            <Text style={styles.label}>kg</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Edad</Text>
            <TextInput
              value={age}
              keyboardType="numeric"
              style={styles.input}
              onChangeText={(value) => onChangeInput('age', value)}
            />
            <Text style={styles.label}>años</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Sexo</Text>
            <SwitchableButtons value={gender} onChange={(value) => onChangeInput('gender', value)} />
          </View>

          {error && <ErrorMessage message={error} />}

          <Result {...result} />
        </View>
      </TouchableWithoutFeedback>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={mustShowClear ? onClear : onSubmit}
      >
        <Text style={styles.buttonLabel}>{mustShowClear ? 'Limpiar' : 'Calcular'}</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#66D7D1',
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    height: '100%',
    position: 'relative',
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
  },
  submitButton: {
    backgroundColor: '#FF637D',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 30,
    borderRadius: 10
  },
  buttonLabel: {
    fontFamily: 'TitilliumWeb_600SemiBold',
    fontSize: 28,
    textAlignVertical: 'center',
    padding: 10,
  }
})

export default HomeScreen;
