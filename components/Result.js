import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const Result = ({ bmiValue = 0, result, barColor }) => {
  const progressValue = bmiValue ? bmiValue * 100 / 40 : 0;

  return (
    <AnimatedCircularProgress
      size={300}
      arcSweepAngle={180}
      rotation={270}
      width={30}
      style={styles.circularProgress}
      fill={progressValue}
      tintColor={barColor}
      backgroundColor="#3d5875">
      {() => <View>
        <Text style={styles.bmi}>{bmiValue && bmiValue.toFixed(2)}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>}
    </AnimatedCircularProgress>
  )
};

const styles = StyleSheet.create({
  circularProgress: {
    alignSelf: 'center',
    marginTop: 50
  },
  bmi: {
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 0,
    fontWeight: 'bold',
    color: '#FFF'
  },
  resultText: {
    marginTop: 20,
    fontSize: 30,
    textAlign: 'center',
  }
})

Result.propTypes = {
  bmiValue: PropTypes.number,
  result: PropTypes.string,
  barColor: PropTypes.string,
}

export default Result;
