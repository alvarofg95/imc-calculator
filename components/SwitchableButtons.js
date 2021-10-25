import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SwitchableButtons = ({ value = null, onChange }) => {
  console.log('HERE', value)

  const getStyles = (key) => {
    console.log('getStylesss', key)
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
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    height: 300,
    width: 300,
    backgroundColor: '#000',
    position: 'relative'
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
