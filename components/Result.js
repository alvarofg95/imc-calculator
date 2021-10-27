import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

const Result = ({ bmiValue, result }) => {
  console.log({ bmiValue, result })
  return (
    <View>
      <Text>{result}</Text>
      <Text>{bmiValue}</Text>
    </View>
  )
};

Result.propTypes = {
  bmiValue: PropTypes.number,
  result: PropTypes.string,
}

export default Result;
