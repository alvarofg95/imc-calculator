import React from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import closeIcon from '../assets/close.png';

const CustomModal = ({ modalVisible = false, handleModal }) => {
  return <Modal
    transparent={true}
    animationType="slide"
    visible={modalVisible}
    onRequestClose={handleModal}
  >
    <View
      style={styles.modal}
    >
      <Text style={styles.text}>
        El Índice de Masa Corporal (IMC) es un parámetro utilizado desde hace más
        de 30 años para clasificar a las personas en relación a su peso y talla.
        Es muy sencillo de calcular y muchas básculas específicas incluso permiten
        obtener este dato. Hay que tener en cuenta que este cálculo no tiene en
        cuenta la edad ni el sexo, con lo que se puede afirmar, y la misma OMS lo
        reconoce, que el IMC tiene limitaciones.
      </Text>
      <TouchableOpacity style={styles.icon} onPress={handleModal}>
        <Image source={closeIcon} style={styles.closeIcon} />
      </TouchableOpacity>
    </View>
  </Modal>;
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "white",
    borderRadius: 14,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 14,
    elevation: 15,
    padding: 20,
    marginTop: 30,
    width: '90%',
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  text: {
    fontSize: 23,
    padding: 10,
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 10
  },
  closeIcon: {
    height: 20,
    width: 20
  },
});

CustomModal.propTypes = {
  modalVisible: PropTypes.bool,
  handleModal: PropTypes.func,
}

export default CustomModal;
