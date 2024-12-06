import React from 'react';
import {Text, TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import bin from '../asset/SVG/Delete.png';
import edit from '../asset/SVG/Edit.png';
import stock from '../asset/stock.png'; // stock image

const ActiveProductTile = ({product, onDelete, onEdit}) => {
  const navigation = useNavigation();

  const productImage = product.images?.[0]?.image || stock;

  return (
    <TouchableOpacity
      style={styles.productTile}
      onPress={() =>
        navigation.navigate('ProductInfo', {productId: product.id})
      } // pass the productId
    >
      <View style={styles.imageContainer}>
        <Image
          source={{uri: String(productImage)}}
          style={styles.productImage}
        />

        <View
          style={[
            styles.badge,
            {
              backgroundColor:
                product.stock_quantity > 0 ? '#409C59' : '#ff3636',
            },
          ]}>
          <Text style={styles.badgeText}>
            {product.stock_quantity > 0 ? 'In Stock' : 'Out of Stock'}
          </Text>
        </View>
      </View>

      <Text style={styles.productTitle}>{product.name}</Text>
      <Text style={styles.productSubtitle}>
        {product.details} <Text>{product.cbd_content}mg CBD</Text>
      </Text>

      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>${product.price}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => onDelete(product.id)}>
          <Image source={bin} style={styles.backButtonImage} />
        </TouchableOpacity>
        <View style={styles.buttonDivider} />
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => onEdit(product.id)}>
          <Image source={edit} style={styles.backButtonImage} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productTile: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginVertical: 10,
    width: '48%',
    height: 250,
    position: 'relative',
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  imageContainer: {
    width: '100%',
    height: '45%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  badge: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
    borderRadius: 5,
    zIndex: 1,
  },
  badgeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  productTitle: {
    fontSize: 12,
    fontWeight: '300',
    color: 'rgba(79, 79, 79, 1)',
    marginLeft: 10,
    marginTop: 10,
  },
  productSubtitle: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: '500',
    marginLeft: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
  },
  priceText: {
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 1,
    marginHorizontal: 20,
    position:'relative',
  },
  editButton: {
    padding: 10,
    borderRadius: 5,
  },
  deleteButton: {
    padding: 10,
    borderRadius: 5,
  },
  buttonDivider: {
    height: '70%',
    width: 1,
    backgroundColor: '#CCCCCC',
    marginHorizontal: 10,
    marginTop:5,
  },
  backButtonImage: {
    width: 24,
    height: 24,
  },
});

export default ActiveProductTile;
