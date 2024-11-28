import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ActiveProductTile from '../../component/ActiveProductTile'; // Import the new ActiveProductTile component
import chat from '../../asset/SVG/Chaticon.png';
import Dashboardbutton from '../../asset/SVG/Dashboard.png';
import plus from '../../asset/SVG/Plusicon.png';
import {useTranslation} from 'react-i18next';

const {width} = Dimensions.get('window');

const Products = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [activeTab, setActiveTab] = useState('active');

  
 const renderTabContent = () => {
   switch (activeTab) {
    //  case t('new_order'):
    //    return <NewOrder />;

    //  case t('active'):
    //    return <ActiveOrder />;
    //  case t('delivered_success'):
    //    return <Delivered />;
    //  case 'new_order':
    //    return <NewOrder />;
    //  case 'active':
    //    return <ActiveOrder />;
    //  case 'delivered':
    //    return <Delivered />;
    //  default:
    //    return <NewOrder />;
   }
 };

  const products = [
    {
      id: 1,
      title: 'Product 1',
      subtitle: 'Description 1',
      wight: '110',
      price: 100,
      discountedPrice: 120,
    },
    {
      id: 2,
      title: 'Product 2',
      subtitle: 'Description 2',
      wight: 110,
      price: 150,
      discountedPrice: 170,
    },
    {
      id: 3,
      title: 'Product 3',
      subtitle: 'Description 3',
      wight: '110',
      price: 200,
      discountedPrice: 250,
      image: 'image_url_3',
    },
    {
      id: 4,
      title: 'Product 4',
      subtitle: 'Description 4',
      wight: '110',
      price: 80,
      discountedPrice: 100,
      image: 'image_url_4',
    },
    {
      id: 21,
      title: 'Product 1',
      subtitle: 'Description 1',
      wight: '110',
      price: 100,
      discountedPrice: 120,
      image: 'image_url_1',
    },
    {
      id: 22,
      title: 'Product 2',
      subtitle: 'Description 2',
      wight: 110,
      price: 150,
      discountedPrice: 170,
      image: 'image_url_2',
    },
    {
      id: 23,
      title: 'Product 3',
      subtitle: 'Description 3',
      wight: '110',
      price: 200,
      discountedPrice: 250,
      image: 'image_url_3',
    },
    {
      id: 24,
      title: 'Product 4',
      subtitle: 'Description 4',
      wight: '110',
      price: 80,
      discountedPrice: 100,
      image: 'image_url_4',
    },
    {
      id: 11,
      title: 'Product 1',
      subtitle: 'Description 1',
      wight: '110',
      price: 100,
      discountedPrice: 120,
      image: 'image_url_1',
    },
    {
      id: 12,
      title: 'Product 2',
      subtitle: 'Description 2',
      wight: 110,
      price: 150,
      discountedPrice: 170,
      image: 'image_url_2',
    },
    {
      id: 13,
      title: 'Product 3',
      subtitle: 'Description 3',
      wight: '110',
      price: 200,
      discountedPrice: 250,
      image: 'image_url_3',
    },
    {
      id: 14,
      title: 'Product 4',
      subtitle: 'Description 4',
      wight: '110',
      price: 80,
      discountedPrice: 100,
      image: 'image_url_4',
    },
    // Add more products here
  ];

  const handleDelete = productId => {
    console.log('Deleting product with id:', productId);
  };

  const handleEdit = productId => {
    navigation.navigate('EditProducts', {productId});
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <View style={styles.headerContainer}>
            <TouchableOpacity style={[styles.backButton, styles.shadow]}>
              <Image source={Dashboardbutton} style={styles.backButtonImage} />
            </TouchableOpacity>
            <Text style={styles.topText}>{t('product')}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Chat')}
              style={[styles.backButton, styles.shadow]}>
              <Image source={chat} style={styles.backButtonImage} />
            </TouchableOpacity>
          </View>

          <View style={styles.buttonRow}>
            {[t('active'), t('inactive'), t('deleted')].map((tab, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.tabButton,
                  activeTab === tab && styles.selectedButton,
                ]}
                onPress={() => setActiveTab(tab)}>
                <Text
                  style={[
                    styles.tabButtonText,
                    activeTab === tab && styles.selectedButtonText,
                  ]}>
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate('AddProducts')}>
            <View style={styles.addButtonContent}>
              <Image source={plus} style={styles.addButtonImage} />
              <Text style={styles.addButtonText}>{t('addProduct')}</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.productList}>
            {products.map(product => (
              <ActiveProductTile
                key={product.id}
                product={product}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))}
            {renderTabContent()}
          </View>
        </ScrollView>
      </SafeAreaView>
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
    marginBottom: 15,
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
    color: 'rgba(51, 51, 51, 1)',
    fontWeight: '400',
    fontSize: 11,
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#409C59',
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom:7,
    alignSelf: 'flex-end',
    width: '40%',
    alignItems: 'center',
  },
  addButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButtonImage: {
    marginRight: 5, // Space between image and text
    width: 15, // Adjust width as needed
    height: 15, // Adjust height as needed
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
});

