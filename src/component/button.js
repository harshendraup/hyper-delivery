// CommonButton.js
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const CommonButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.commonButton} onPress={onPress}>
      <Text style={styles.commonButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  commonButton: {
    width: '100%',
    height: 45,
    backgroundColor: 'rgba(64, 156, 89, 1)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  commonButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
});

export default CommonButton;
