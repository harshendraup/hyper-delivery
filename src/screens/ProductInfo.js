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
import girlBag from '../asset/stock.png';
import girlWeb from '../asset/stock.png';
import guyPhoto from '../asset/stock.png';

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
        keyboardShouldPersistTaps="handled">
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
                  <Image source={girlBag} style={styles.image} />
                </View>
                <View style={styles.slide}>
                  <Image source={guyPhoto} style={styles.image} />
                </View>
                <View style={styles.slide}>
                  <Image source={girlWeb} style={styles.image} />
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
                  textStyle={styles.chipText}>
                  Example Chip
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
                <Chip
                  mode="outlined"
                  style={styles.chip}
                  textStyle={styles.chipText}>
                  Example Chip
                </Chip>
              </View>

              <View style={styles.chipContainer}>
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
    width: 380,
    alignItems: 'center',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: width * 0.85,
    marginTop: 50,
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
  toggleButtonText: {fontWeight: 'bold'},
  activeText: {
    textAlign: 'center',
    color: '#409C59',
    backgroundColor: 'white',
    width: width * 0.37,
    borderRadius: 30,
    padding: 4,
  },
  activeTextRed: {
    textAlign: 'center',
    color: 'red',
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
    fontSize: 24,
    width: width * 0.85,
    color: 'black',
    marginBottom: 40,
    fontWeight: '700',
  },
  swiperContainer: {
    height: height * 0.3,
    width: width,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.8,
    height: height * 0.35,
    resizeMode: 'contain',
  },
  detailSection: {
    marginHorizontal: 30,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  productHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  ratingBadge: {
    backgroundColor: '#409C59',
    height: height * 0.03,
    width: width * 0.2,
    borderRadius: 5,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 3,
  },
  ratingStars: {
    textAlign: 'center',
    fontSize: 12,
    color: 'white',
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5,
    marginBottom: 10,
  },
  chipContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '30%',
    marginVertical: -2,
  },
  chipContainerRow: {
    // justifyContent: 'space-between',
  },
  chip: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0,
  },
  chipText: {
    fontSize: 10,
    color:'grey', // Set the desired smaller font size here
  },
});
