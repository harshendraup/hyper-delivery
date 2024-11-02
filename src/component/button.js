import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const CommonButton = ({title, onPress, greenBorder}) => {
  return (
    <TouchableOpacity
      style={[
        styles.commonButton,
        greenBorder ? styles.greenBorder : styles.defaultBorder,
      ]}
      onPress={onPress}>
      <Text style={[styles.commonButtonText, greenBorder && styles.greenText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  commonButton: {
    width: '100%',
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  defaultBorder: {
    backgroundColor: 'rgba(64, 156, 89, 1)', // Default background
  },
  greenBorder: {
    backgroundColor: 'white', // White background for green border
    borderColor: 'green', // Green border
    borderWidth: 2, // Border width
  },
  commonButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white', // Default text color
  },
  greenText: {
    color: 'green', // Green text for green border
  },
});

export default CommonButton;
