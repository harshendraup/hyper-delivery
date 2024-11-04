// Accordion.js
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import arrow from '../asset/icons/arrow.png'; // Adjust the path as necessary

const Accordion = ({title, items, onSelect, isOpen, toggle}) => {
  return (
    <View style={styles.accordionContainer}>
      <TouchableOpacity style={styles.accordionHeader} onPress={toggle}>
        <View style={styles.accordionInput}>
          <Text style={styles.accordionTitle}>{title}</Text>
          <Image source={arrow} style={styles.arrowIcon} />
        </View>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.accordionContent}>
          {items.map(item => (
            <TouchableOpacity key={item} onPress={() => onSelect(item)}>
              <Text style={styles.accordionItem}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  accordionContainer: {
    marginVertical: 10,
    position: 'relative',
  },
  accordionHeader: {
    padding: 0,
  },
  accordionInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    backgroundColor: 'white',
  },
  accordionTitle: {
    fontSize: 12,
    color: 'gray',
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
  accordionContent: {
    position: 'absolute',
    top: 60,
    width: '100%',
    backgroundColor: '#dbdbdb',
    borderRadius: 10,
    zIndex: 1,
  },
  accordionItem: {
    fontSize: 16,
    color: 'black',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
});

export default Accordion;
