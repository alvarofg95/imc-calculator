import React, { useReducer } from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import ErrorMessage from '../components/ErrorMessage';
import Result from '../components/Result';
import { calculateBmi } from '../utils/calculator';
import infoIcon from '../assets/info.png'
import reloadIcon from '../assets/reload.png'
import CustomModal from '../components/CustomModal';

const initialState = {
  age: null,
  height: null,
  weight: null,
  modalVisible: false,
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
    errorType = 'Debes introducir la altura';
  }
  if (!weight) {
    errorType = 'Debes introducir el peso';
  }
  if (!height && !weight) {
    errorType = 'Debes introducir la altura y el peso';
  }
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
    Keyboard.dismiss();
  }

  const onClear = () => {
    dispatch({
      type: 'CLEAR',
    })
  }

  const handleModal = () => {
    dispatch({
      type: 'CHANGE',
      value: !state.modalVisible,
      key: 'modalVisible',
    });
  }

  const {
    height,
    weight,
    age,
    modalVisible,
    result,
    error,
  } = state;

  return (
    <KeyboardAvoidingView style={modalVisible ? { ...styles.container, ...styles.opacity } : styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View style={styles.headerContainer}>
            <TouchableOpacity
              onPress={handleModal}
            >
              <Image source={infoIcon} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.header}>Calculadora IMC</Text>
            <TouchableOpacity
              onPress={onClear}
            >
              <Image source={reloadIcon} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <CustomModal modalVisible={modalVisible} handleModal={handleModal} />
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

          {error && <ErrorMessage message={error} />}

          <Result {...result} />
          <Text style={styles.message}>{result.message || 'Consulta cuál es tu Índice de Masa Corporal'}</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={onSubmit}
      >
        <Text style={styles.buttonLabel}>Calcular</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#42a3ab',
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    height: '100%',
    position: 'relative',
  },
  opacity: {
    opacity: 0.6,
  },
  icon: {
    width: 20,
    height: 20,
    marginTop: 12
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold'
  },
  inputContainer: {
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  label: {
    fontSize: 25,
    width: '35%',
    textAlign: 'center'
  },
  input: {
    backgroundColor: '#FFF',
    width: '30%',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 25,
    borderRadius: 10,
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#FFF',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 30,
    borderRadius: 20,
    width: 200
  },
  buttonLabel: {
    fontSize: 25,
    textAlignVertical: 'center',
    padding: 10,
    textAlign: 'center'
  },
  message: {
    textAlign: 'center',
    fontSize: 25,
    // fontWeight: 'bold',
    color: '#FFF',
    marginTop: -60,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
})

export default HomeScreen;
