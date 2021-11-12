import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';

const ErrorMessage = ({ message }) => {
  return <Text style={styles.text}>{message}</Text>
};

const styles = StyleSheet.create({
  text: {
    color: '#9C4B50',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 30,
    fontWeight: 'bold'
  }
})

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
