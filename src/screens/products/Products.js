import React, {useState, useEffect} from 'react';
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
import index from '../../services';

const {width} = Dimensions.get('window');

const Products = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [activeTab, setActiveTab] = useState('active');
  const [products, setProducts] = useState([]); // State to store the products
  const [error, setError] = useState(null);
const productId=

  // Fetch products when the component mounts
useEffect(() => {
  const myHeaders = new Headers();
  myHeaders.append('Accept', 'application/json');
  myHeaders.append(
    'Authorization',
    'Bearer 7|8rxbtzGo3erCTYbpdpELhxKMHoxwU7aEaU9T1jvFb3ff8636',
  );

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  fetch(
    'https://getweed.stgserver.site/api/v1/shop/product/all',
    requestOptions,
  )
    .then(response => {
      if (response.status === 401) {
       
        setError('Wrong user ID or invalid token');
        return Promise.reject('Unauthorized');
      }
      return response.json();
    })
    .then(result => {
      console.log(result.data[0]?.id);

      setProducts(result.data);
    })
    .catch(error => {
      console.error(error);
     
      if (error !== 'Unauthorized') {
        setError('An error occurred while fetching products');
      }
    });
}, []);


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

         {error && (
           <View style={styles.errorContainer}>
             <Text style={styles.errorText}>{error}</Text>
           </View>
         )}

         {!error && ( // Only render the product tiles if there's no error
           <>
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
             </View>
           </>
         )}
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
    marginBottom: 7,
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
  errorContainer: {
    padding: 10,
    backgroundColor: '#FFDDDD',
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  errorText: {
    color: '#D8000C',
    fontWeight: 'bold',
  },
});
