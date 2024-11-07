import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import chat from '../asset/icons/chat.png';
import dashboard from '../asset/icons/dashboard.png';
import edit from '../asset/SVG/Edit.png';
import bin from '../asset/SVG/Delete.png';
import stock from '../asset/stock.png'; // Add your stock image import here
import plus from '../asset/icons/plus.png';

const {width} = Dimensions.get('window');

const Products = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('active');

  const products = [
    {
      id: 1,
      title: 'Product 1',
      subtitle: 'Description 1',
      wight: '110',
      price: 100,
      discountedPrice: 120,
      image: 'image_url_1',
      stockImage: stock, // Add stock image URL
    },
    {
      id: 2,
      title: 'Product 2',
      subtitle: 'Description 2',
      wight: 110,
      price: 150,
      discountedPrice: 170,
      image: 'image_url_2',
      stockImage: stock, // Add stock image URL
    },
    {
      id: 3,
      title: 'Product 3',
      subtitle: 'Description 3',
      wight: '110',
      price: 200,
      discountedPrice: 250,
      image: 'image_url_3',
      stockImage: stock, // Add stock image URL
    },
    {
      id: 4,
      title: 'Product 4',
      subtitle: 'Description 4',
      wight: '110',
      price: 80,
      discountedPrice: 100,
      image: 'image_url_4',
      stockImage: stock, // Add stock image URL
    },
    {
      id: 21,
      title: 'Product 1',
      subtitle: 'Description 1',
      wight: '110',
      price: 100,
      discountedPrice: 120,
      image: 'image_url_1',
      stockImage: stock, // Add stock image URL
    },
    {
      id: 22,
      title: 'Product 2',
      subtitle: 'Description 2',
      wight: 110,
      price: 150,
      discountedPrice: 170,
      image: 'image_url_2',
      stockImage: stock, // Add stock image URL
    },
    {
      id: 23,
      title: 'Product 3',
      subtitle: 'Description 3',
      wight: '110',
      price: 200,
      discountedPrice: 250,
      image: 'image_url_3',
      stockImage: stock, // Add stock image URL
    },
    {
      id: 24,
      title: 'Product 4',
      subtitle: 'Description 4',
      wight: '110',
      price: 80,
      discountedPrice: 100,
      image: 'image_url_4',
      stockImage: stock, // Add stock image URL
    },
    {
      id: 11,
      title: 'Product 1',
      subtitle: 'Description 1',
      wight: '110',
      price: 100,
      discountedPrice: 120,
      image: 'image_url_1',
      stockImage: stock, // Add stock image URL
    },
    {
      id: 12,
      title: 'Product 2',
      subtitle: 'Description 2',
      wight: 110,
      price: 150,
      discountedPrice: 170,
      image: 'image_url_2',
      stockImage: stock, // Add stock image URL
    },
    {
      id: 13,
      title: 'Product 3',
      subtitle: 'Description 3',
      wight: '110',
      price: 200,
      discountedPrice: 250,
      image: 'image_url_3',
      stockImage: stock, // Add stock image URL
    },
    {
      id: 14,
      title: 'Product 4',
      subtitle: 'Description 4',
      wight: '110',
      price: 80,
      discountedPrice: 100,
      image: 'image_url_4',
      stockImage: stock, // Add stock image URL
    },
    // Add more products as needed
  ];

  const renderProductTile = product => (
    <TouchableOpacity
      key={product.id}
      style={styles.productTile}
      onPress={() => navigation.navigate('ProductInfo')}>
      <View style={styles.imageContainer}>
        <Image source={stock} style={styles.productImage} />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>In Stock</Text>
        </View>
      </View>
      <Text style={styles.productTitle}>HYBRID</Text>
      <Text style={styles.productSubtitle}>
        Walker Kush{'          '}
        <Text>{product.wight}g</Text>
      </Text>

      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>${product.price}</Text>
        <Text style={styles.discountedPriceText}>
          ${product.discountedPrice}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.deleteButton}>
          <Image source={bin} style={styles.backButtonImage} />
        </TouchableOpacity>
        <View style={styles.buttonDivider} />
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate('EditProducts')}>
          <Image source={edit} style={styles.backButtonImage} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[styles.backButton, styles.shadow]}>
            <Image source={dashboard} style={styles.backButtonImage} />
          </TouchableOpacity>
          <Text style={styles.topText}>Products</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Chat')}
            style={[styles.backButton, styles.shadow]}>
            <Image source={chat} style={styles.backButtonImage} />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'active' && styles.selectedButton,
            ]}
            onPress={() => setActiveTab('active')}>
            <Text
              style={[
                styles.tabButtonText,
                activeTab === 'active' && styles.selectedButtonText,
              ]}>
              Active
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'inactive' && styles.selectedButton,
            ]}
            onPress={() => setActiveTab('inactive')}>
            <Text
              style={[
                styles.tabButtonText,
                activeTab === 'inactive' && styles.selectedButtonText,
              ]}>
              Inactive
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'deleted' && styles.selectedButton,
            ]}
            onPress={() => setActiveTab('deleted')}>
            <Text
              style={[
                styles.tabButtonText,
                activeTab === 'deleted' && styles.selectedButtonText,
              ]}>
              Deleted
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('AddProducts')}>
          <View style={styles.addButtonContent}>
            <Image source={plus} style={styles.addButtonImage} />
            <Text style={styles.addButtonText}>Add Products</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.productList}>
          {products.map(renderProductTile)}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  scrollContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 25,
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  shadow: {
    elevation: 5, // For Android
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  backButtonImage: {
    width: 24,
    height: 24,
  },
  topText: {
    textAlign: 'center',
    fontSize: 18,
    width: '70px',
    height: '22px',
    color: 'rgba(51, 51, 51, 1)',
    fontWeight: '600',
    fontFamily: 'Inter',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 10,
  },
  tabButton: {
    padding: 10,
    width: 110,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#EFEFEFEE',
    backgroundColor: 'white',
  },
  selectedButton: {
    backgroundColor: '#409C59',
  },
  selectedButtonText: {
    color: 'rgba(255, 255, 255, 1)',
  },
  tabButtonText: {
    color: 'rgba(51, 51, 51, 1)', //border: 1px solid #EFEFEFEE
    fontWeight: '400',
    fontFamily: 'Inter',
    fontSize: 11,
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#409C59',
    paddingVertical: 10,
    borderRadius: 10,
    alignSelf: 'flex-end',
    width: '40%',
    marginRight: 15,
    alignItems: 'center',
  },
  addButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButtonImage: {
    marginRight: 5, // Space between image and text
    width: 20, // Adjust width as needed
    height: 20, // Adjust height as needed
  },
  addButtonText: {
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '600',
    fontFamily: 'Inter',
    fontSize: 14,
    textAlign: 'center',
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  productTile: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginVertical: 10,
    width: '48%', // Two tiles in a row
    height: 250, // Keep the previous height (adjustable as needed)
    borderWidth: 0.5, // Set border width
    borderColor: '#CCCCCC', // Set border color
  },

  imageContainer: {
    width: '100%',
    height: '45%', // Image occupies 40% of the tile height
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: 'hidden', // Ensure image corners are rounded
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Ensures the image fills the container
  },

  badge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#409C59',
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
    fontFamily: 'Mulish',
    color: 'rgba(79, 79, 79, 1)',
    marginLeft: 10,
    marginTop: 10,
  },
  productSubtitle: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: '500',
    fontFamily: 'Mulish',
    marginLeft: 10,
  },
  waitText: {
    color: 'black',
    textAlign: 'right',
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
  discountedPriceText: {
    fontSize: 14,
    color: 'gray',
    textDecorationLine: 'line-through',
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 22,
  },
  editButton: {
    padding: 10,
    borderRadius: 5,
  },
  deleteButton: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonDivider: {
    height: '70%', // Take up full height of the container
    width: 1, // Adjust width as needed for line thickness
    backgroundColor: '#CCCCCC', // Line color (light grey)
    marginHorizontal: 10,
    marginTop:5 // Optional, add space between the buttons and the divider
  },
});
