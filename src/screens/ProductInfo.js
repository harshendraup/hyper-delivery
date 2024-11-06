import React, {useState} from 'react';
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
import backbutton from '../asset/backbutton.png';
import {Card, Text, Chip} from 'react-native-paper';
import Swiper from 'react-native-swiper';
import girlBag from '../asset/yellow.png';
import girlWeb from '../asset/yellow.png';
import guyPhoto from '../asset/yellow.png';
import Strength from '../asset/icons/bicep.png';
import clarity_license from '../asset/icons/clarity_license-line.png';
import mdi_drug from '../asset/icons/mdi_drug.png';
import CommonButton from '../component/button';

const {width, height} = Dimensions.get('window');

const ProductInfo = () => {
  const navigation = useNavigation();
  const [inStock, outOfStock] = useState(false);

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

        <Text style={styles.topText}>Product Info</Text>
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.swiperContainer}>
              <Swiper
                style={styles.wrapper}
                autoplay
                autoplayTimeout={3}
                showsButtons={false} // Hide buttons
                showsPagination={true} // Show pagination (dots)
                loop={true} // Enable loop
                paginationStyle={styles.paginationStyle} // Position the dots
                dotStyle={styles.dotStyle} // Style for inactive dots (green)
                activeDotStyle={styles.activeDotStyle} // Style for active dot (dark green)
              >
                <View style={styles.slide}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={girlBag}
                      style={[styles.image, styles.imageRadius]}
                    />
                  </View>
                </View>
                <View style={styles.slide}>
                  <Image
                    source={guyPhoto}
                    style={[styles.image, styles.imageRadius]}
                  />
                </View>
                <View style={styles.slide}>
                  <Image
                    source={girlWeb}
                    style={[styles.image, styles.imageRadius]}
                  />
                </View>
              </Swiper>
            </View>

            <View style={styles.detailSection}>
              <View style={styles.ratingContainer}>
                <Text style={styles.productHeading}>Product Title</Text>
                <View style={styles.ratingBadge}>
                  <Text style={styles.ratingText}>4.9 </Text>
                  <Text style={styles.ratingText}>({671})</Text>
                  <Text style={styles.ratingStars}>★</Text>
                </View>
              </View>

              <Text style={styles.subHeading}>$189/gm</Text>
              <Text style={styles.productDescription}>
                Lorem ipsum dolor sit amet, consec tetur adi pis cing elit.
                Vivamus lacinia odio vitae vesti bulum.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </Text>

              {/* Chips Section */}
              <View style={styles.chipContainer}>
                <Chip
                  mode="outlined"
                  style={styles.chip}
                  icon={() => (
                    <Image source={clarity_license} style={styles.icon} />
                  )}
                  textStyle={styles.chipText}>
                  required License
                </Chip>
                <Chip
                  mode="outlined"
                  style={styles.chip}
                  icon={() => <Image source={mdi_drug} style={styles.icon} />}
                  textStyle={styles.chipText}>
                  Medical Drug
                </Chip>
                <Chip
                  mode="outlined"
                  style={styles.chip}
                  textStyle={styles.chipText}>
                  THC: 18%
                </Chip>
                <Chip
                  mode="outlined"
                  style={styles.chip}
                  textStyle={styles.chipText}>
                  CBD: 18
                </Chip>
              </View>

              <View style={styles.chipContainer}>
                <Chip
                  mode="outlined"
                  style={styles.chip}
                  icon={() => <Image source={Strength} style={styles.icon} />}
                  textStyle={styles.chipText}>
                  Strength 1
                </Chip>
                <Chip
                  mode="outlined"
                  style={styles.chip}
                  textStyle={styles.chipText}>
                  Stain Type: Sativa
                </Chip>
              </View>
            </View>
            <Text style={styles.productMin}>Minimum Quantity: 10 gm</Text>

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
                onPress={() => outOfStock(false)}>
                <Text
                  style={[
                    styles.toggleButtonText,
                    !inStock ? styles.activeText : styles.inactiveText,
                  ]}>
                  In Stock
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.toggleButton,
                  inStock ? styles.activeToggleRed : styles.inactiveToggle,
                ]}
                onPress={() => outOfStock(true)}>
                <Text
                  style={[
                    styles.toggleButtonText,
                    inStock ? styles.activeTextRed : styles.inactiveText,
                  ]}>
                  Out of Stock
                </Text>
              </TouchableOpacity>
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
    marginHorizontal: 46,
    marginTop: 10,
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
  },
  productDescription: {
    fontSize: 13,
    color: 'rgba(51, 51, 51, 1)',
    fontFamily: 'Inter',
    marginTop: 5,
    marginBottom: 10,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allow chips to wrap if they don't fit in a single row
    justifyContent: 'flex-start',
    marginVertical: -2,
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
  // swiperContainer: {
  //   height: height * 0.3,
  //   width: width,
  //   borderRadius: 10,
  //   position: 'relative', // Add this so that pagination can be positioned under the swiper
  // },

  paginationStyle: {
    position: 'absolute',
    bottom: -10, // Adjusted value to bring dots under the image and not overlap
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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

