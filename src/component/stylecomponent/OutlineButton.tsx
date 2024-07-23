import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

interface OutlineButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({ title, onPress, style, ...rest }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: '#00CEE0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    margin : "5%",
    backgroundColor: '#00CEE0',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default OutlineButton;
