import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const SwitchableButtons = ({ value = null, onChange }) => {
  const getStyles = (key) => {
    return key === value ? { ...styles.button, ...styles.activeButton } : styles.button;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={getStyles('MAN')} onPress={() => onChange('MAN')}>
        <Text>H</Text>
      </TouchableOpacity>
      <TouchableOpacity style={getStyles('WOMAN')} onPress={() => onChange('WOMAN')}>
        <Text style={{ color: '#000' }}>M</Text>
      </TouchableOpacity>
    </View>);
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%'
    // backgroundColor: '#000',
  },
  button: {
    height: 60,
    width: 60,
    backgroundColor: 'green',
    // opacity:0.3,
    borderRadius: 15,
  },
  activeButton: {
    borderWidth: 4
  }
})

SwitchableButtons.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default SwitchableButtons;
