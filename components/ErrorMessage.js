import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';

const ErrorMessage = ({ message }) => {
  return <Text style={styles.text}>{message}</Text>
};

const styles = StyleSheet.create({
  text: {
    color: '#FF637D',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 15,
    fontWeight: '900'
  }
})

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
