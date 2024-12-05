import React, {useState,useEffect} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import backbutton from '../../asset/SVG/Backbutton.png';
import {Card, Text, Chip} from 'react-native-paper';
import Swiper from 'react-native-swiper';
import {useRoute} from '@react-navigation/native';

import {useTranslation} from 'react-i18next';

const {width, height} = Dimensions.get('window');

const ProductInfo = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const {productId} = useRoute().params; // Get the productId from navigation params
  const [inStock, setInStock] = useState(false);
  const [productDetails, setProductDetails] = useState(null);

  // Fetch product details on component mount
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
      `https://getweed.stgserver.site/api/v1/shop/product-details/${productId}`, // Use the productId here
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        console.log(result); // You can see the result here, use it to populate your state
        setProductDetails(result.data); // Set the product details in state
      })
      .catch(error => console.error(error));
  }, [productId]); // Ensure the effect runs whenever the productId changes

  // Render the component only if productDetails is available
  if (!productDetails) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <Image source={backbutton} style={styles.backButtonImage} />
          </TouchableOpacity>
        </View>

        <Text style={styles.topText}>{t('product_info')}</Text>
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.swiperContainer}>
              <Swiper
                style={styles.wrapper}
                autoplay
                autoplayTimeout={3}
                showsButtons={false}
                showsPagination={true}
                loop={true}
                paginationStyle={styles.paginationStyle}
                dotStyle={styles.dotStyle}
                activeDotStyle={styles.activeDotStyle}>
                {/* Check if images exist and render them */}
                {productDetails.images &&
                Array.isArray(productDetails.images) &&
                productDetails.images.length > 0 ? (
                  productDetails.images.map((image, index) => (
                    <View key={index} style={styles.slide}>
                      <View style={styles.imageContainer}>
                        <Image
                          source={{
                            uri: `https://getweed.stgserver.site/storage/${image.image}`,
                          }}
                          style={[styles.image, styles.imageRadius]}
                        />
                      </View>
                    </View>
                  ))
                ) : (
                  <View style={styles.slide}>
                    <Text>No images available</Text>
                  </View>
                )}
              </Swiper>
            </View>

            <View style={styles.detailSection}>
              <View style={styles.ratingContainer}>
                <Text style={styles.productHeading}>{productDetails.name}</Text>
                <View style={styles.ratingBadge}>
                  <Text style={styles.ratingText}>4.9 </Text>
                  <Text style={styles.ratingText}>({671})</Text>
                  <Text style={styles.ratingStars}>★</Text>
                </View>
              </View>

              <Text style={styles.subHeading}>{t('price_gm')}</Text>
              <Text style={styles.productDescription}>
                {productDetails.details}
              </Text>

              <View style={styles.chipContainer}>
                <Chip
                  mode="outlined"
                  style={styles.chip}
                  textStyle={styles.chipText}>
                  CBD: {productDetails.cbd_content}%
                </Chip>
                <Chip
                  mode="outlined"
                  style={styles.chip}
                  textStyle={styles.chipText}>
                  {t('Stock Quantity')}: {productDetails.stock_quantity}
                </Chip>
              </View>

              <Text style={styles.productMin}>{t('quantity_warning')}</Text>

              <View
                style={[
                  styles.toggleContainer,
                  {backgroundColor: inStock ? 'red' : '#409C59'},
                ]}>
                <TouchableOpacity
                  style={[
                    styles.toggleButton,
                    !inStock ? styles.activeToggle : styles.inactiveToggle,
                  ]}
                  onPress={() => setInStock(false)}>
                  <Text
                    style={[
                      styles.toggleButtonText,
                      !inStock ? styles.activeText : styles.inactiveText,
                    ]}>
                    {t('availability')}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.toggleButton,
                    inStock ? styles.activeToggleRed : styles.inactiveToggle,
                  ]}
                  onPress={() => setInStock(true)}>
                  <Text
                    style={[
                      styles.toggleButtonText,
                      inStock ? styles.activeTextRed : styles.inactiveText,
                    ]}>
                    {t('outofstock')}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};


export default ProductInfo;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  scrollContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 25,
  },
  backButtonContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 20, // Apply marginHorizontal here
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#ffffff',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: width * 0.85,
    marginTop: 10,
    borderRadius: 30,
    overflow: 'hidden',
    marginHorizontal: 30,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 30,
  },
  activeToggle: {
    backgroundColor: '#409C59',
  },
  activeToggleRed: {
    backgroundColor: 'red',
  },
  inactiveToggle: {
    backgroundColor: 'transparent',
  },
  toggleButtonText: {fontWeight: '500'},
  activeText: {
    textAlign: 'center',
    color: 'rgba(64, 156, 89, 1)',
    backgroundColor: 'white',
    width: width * 0.37,
    borderRadius: 30,
    padding: 4,
  },
  activeTextRed: {
    textAlign: 'center',
    color: 'rgba(255, 54, 54, 1)',
    backgroundColor: 'white',
    width: width * 0.37,
    borderRadius: 30,
    padding: 4,
  },
  backButtonImage: {
    width: 40,
    height: 40,
    marginTop: 10,
  },
  inactiveText: {
    textAlign: 'center',
    width: width * 0.35,
    color: 'white',
    borderRadius: 30,
    padding: 5,
  },
  topText: {
    textAlign: 'center',
    fontSize: 18,
    width: width * 0.85,
    color: 'rgba(51, 51, 51, 1)',
    marginBottom: 30,
    fontWeight: '600',
    fontFamily: 'Inter',
  },
  swiperContainer: {
    height: height * 0.3,
    width: width,
    borderRadius: 10,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.85,
    height: height * 0.4,
    resizeMode: 'contain',
  },
  imageRadius: {
    borderRadius: 20,
  },
  detailSection: {
    marginHorizontal: 46,
    marginTop: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '7%',
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  productHeading: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
    fontFamily: 'Inter',
  },
  productMin: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
    fontFamily: 'Inter',
    // marginHorizontal: 46,
    marginTop: 10,
    paddingHorizontal: '7%',
  },
  ratingBadge: {
    backgroundColor: 'rgba(64, 156, 89, 1)',
    height: height * 0.03,
    width: 'auto',
    minWidth: width * 0.2,
    borderRadius: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '800',
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Roboto',
    marginLeft: 3,
  },
  ratingStars: {
    textAlign: 'center',
    fontSize: 12,
    color: 'white',
  },
  subHeading: {
    fontSize: 15,
    fontWeight: '700',
    color: 'rgba(51, 51, 51, 1)',
    fontFamily: 'Inter',
    marginTop: -5,
    marginBottom: 5,
    paddingHorizontal: '7%',
  },
  productDescription: {
    fontSize: 13,
    color: 'rgba(51, 51, 51, 1)',
    fontFamily: 'Inter',
    marginTop: 5,
    marginBottom: 10,
    paddingHorizontal: '7%',
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allow chips to wrap if they don't fit in a single row
    justifyContent: 'flex-start',
    marginVertical: -2,
    paddingHorizontal: '5%',
  },
  chip: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0,
    marginRight: -15,
    marginLeft: -5,
    // Adds space between chips horizontally
    // marginBottom: 8, // Adds space between chips vertically
  },
  chipText: {
    fontSize: 9, // Increased font size for better readability
    fontFamily: 'Lato',
    fontWeight: '600',
    color: 'rgba(120, 120, 120, 1)',
    textAlign: 'center', // Ensures the text is centered within the chip
  },
  // Custom icon style for controlling icon size
  icon: {
    width: 16, // Set the icon width
    height: 16, // Set the icon height
  },

  paginationStyle: {
    position: 'absolute',
    bottom: -10, // Adjusted value to bring dots under the image and not overlap
    left: 90,
    right: 0,
    flexDirection: 'row',
    
  },

  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5, // Makes the dot circular
    margin: 5,
    borderWidth: 1.5,
    borderColor: '#409C59', // Border color for inactive dots
    backgroundColor: 'transparent', // Inactive dot color (green) - transparent background
  },

  activeDotStyle: {
    width: 30,
    height: 10,
    backgroundColor: '#409C59', // Active dot color (dark green)
  },
});
