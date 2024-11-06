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
                showsButtons={false}
                showsPagination={false}
                loop={true}>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </Text>

              {/* Chips Section */}

              <View style={styles.chipContainer}>
                <Chip
                  mode="outlined"
                  style={styles.chip}
                  icon={clarity_license}
                  textStyle={styles.chipText}>
                  Example Chip
                </Chip>
                <Chip
                  mode="outlined"
                  style={styles.chip}
                  icon={mdi_drug}
                  textStyle={styles.chipText}>
                  Example Chip
                </Chip>
                <Chip
                  mode="outlined"
                  style={styles.chip}
                  textStyle={styles.chipText}>
                  Example Chip
                </Chip>
                {/* <Chip
                  mode="outlined"
                  style={styles.chip}
                  textStyle={styles.chipText}>
                  Example Chip
                </Chip> */}
              </View>

              <View style={styles.chipContainer}>
                <Chip
                  mode="outlined"
                  style={styles.chip}
                  icon={Strength}
                  textStyle={styles.chipText}>
                  Strength 1
                </Chip>
                <Chip
                  mode="outlined"
                  style={styles.chip}
                  textStyle={styles.chipText}>
                  Example Chip
                </Chip>
                <Chip
                  mode="outlined"
                  style={styles.chip}
                  textStyle={styles.chipText}>
                  Example Chip
                </Chip>
              </View>
            </View>

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
    marginTop: -30,
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
    marginHorizontal: 26,
    marginTop: -20,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 15, // Add padding to the left and right
    paddingVertical: 8, // Add vertical padding for some extra space
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
    color: 'rgba(51, 51, 51 1)',
    fontFamily: 'Inter',
  },
  ratingBadge: {
    backgroundColor: 'rgba(64, 156, 89, 1)',
    height: height * 0.03,
    width: width * 0.25, // Adjust width for padding
    borderRadius: 5,
    paddingHorizontal: 10, // Add horizontal padding inside the badge
    paddingVertical: 3, // Add vertical padding inside the badge
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Ensure the text is centered within the badge
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
    justifyContent: 'flex-start',
    width: '30%',
    marginVertical: -2,
  },
  chip: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0,
  },
  chipText: {
    fontSize: 10,
    fontFamily: 'Lato',
    fontWeight: '600',
    color: 'rgba(120, 120, 120, 1)', // You can adjust this as needed
  },
});
