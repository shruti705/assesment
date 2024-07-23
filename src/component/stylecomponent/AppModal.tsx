import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './ReusableModalStyle';
import Modal from 'react-native-modal';

interface ReusableModalProps {
  isVisible: boolean;
  onClose: () => void;
  title?: string;
  message: string;
  buttonText?: string;
}

const AppModal: React.FC<ReusableModalProps> = ({
  isVisible,
  onClose,
  title = 'Oops !!',
  message,
  buttonText = 'OK',
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={styles.modal}
    >
      <View style={styles.modalContent}>
        <Text style={styles.modalTextTitle}>{title}</Text>
        <Text style={styles.modalText}>{message}</Text>
        <TouchableOpacity onPress={onClose} style={styles.modalButton}>
          <Text style={styles.modalButtonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default AppModal;
