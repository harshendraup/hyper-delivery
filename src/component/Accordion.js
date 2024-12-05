import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import arrow from '../asset/SVG/blackarrow.png';

const Accordion = ({
  title,
  items,
  onSelect,
  isOpen,
  toggle,
  noShift = false,
  borderColor = '#AFAFAF',
  width = '100%',
}) => {
  const [flashedItemIndex, setFlashedItemIndex] = useState(null);
  const [selectedItem, setSelectedItem] = useState(title);

  const handleItemClick = (item, index) => {
    setFlashedItemIndex(index);
    setSelectedItem(item.item);
    onSelect(item.item);

    setTimeout(() => {
      setFlashedItemIndex(null);
      toggle();
    }, 300);
  };

  const renderAccordionContent = () => (
    <View
      style={[
        styles.accordionContent,
        isOpen && styles.accordionContentOpen,
        {borderColor: borderColor, width: width},
      ]}>
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleItemClick(item, index)}
          style={[
            styles.accordionItemContainer,
            flashedItemIndex === index && styles.itemFlashed,
          ]}>
          <Image
            source={flashedItemIndex === index ? item.selectedIcon : item.icon}
            style={styles.itemIcon}
          />
          <Text style={styles.accordionItem}>{item.item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View style={[styles.accordionContainer, {width: width}]}>
      <TouchableOpacity style={styles.accordionHeader} onPress={toggle}>
        <View
          style={[
            styles.accordionInput,
            isOpen && styles.accordionInputOpen,
            {borderColor: borderColor, width: width},
          ]}>
          <Text style={styles.accordionTitle}>{selectedItem}</Text>
          <Image source={arrow} style={styles.arrowIcon} />
        </View>
      </TouchableOpacity>
      {noShift ? (
        <View style={styles.dropdownWrapper}>
          {isOpen && renderAccordionContent()}
        </View>
      ) : (
        isOpen && renderAccordionContent()
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  accordionContainer: {
    marginVertical: 10,
  },
  accordionHeader: {
    padding: 0,
  },
  accordionInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    backgroundColor: 'white',
  },
  accordionInputOpen: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  accordionTitle: {
    fontSize: 12,
    color: 'gray',
  },
  arrowIcon: {
    width: 17,
    height: 10,
  },
  accordionContent: {
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
  },
  accordionContentOpen: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  accordionItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingLeft: 15,
    paddingRight: 10,
  },
  itemIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  accordionItem: {
    fontSize: 16,
    color: '#AFAFAF',
  },
  itemFlashed: {
    backgroundColor: '#409C59',
    borderRadius: 10,
    opacity: 1,
  },
  dropdownWrapper: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    zIndex: 1,
  },
});

export default Accordion;
