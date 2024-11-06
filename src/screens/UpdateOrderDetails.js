import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import backbutton from '../asset/backbutton.png';
import ratingImage from '../asset/rating.png';
import edit from '../asset/icons/edit.png';
import Licence from '../asset/Licence.png';
import note from '../asset/note.png';
import image from '../asset/orderPics/image1.png';
import invoice from '../asset/Invoicebutton.png';
import Download from '../asset/icons/solar_download-bold.png';
import star from '../asset/icons/star.png';
import CommonTextInput from '../component/TextInput';
import CommonButton from '../component/button';
import StarSVG from '../asset/SVG/Start';

const {width} = Dimensions.get('window');

const FloatingLabelInput = ({label, value, onChangeText, onOpen}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.floatingLabelContainer}>
      <Text style={[styles.floatingLabel, {top: isFocused || value ? -2 : 19}]}>
        {label}
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <TouchableOpacity>
          <Image source={Licence} style={styles.LicenceImage} />
        </TouchableOpacity>

        <TouchableOpacity onPress={onOpen} style={styles.openButton}>
          <Text style={styles.openButtonText}>Open</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const formatDate = dateString => {
  const date = new Date(dateString);
  const options = {day: '2-digit', month: 'short', year: 'numeric'};

  const day = date.toLocaleString('en-US', {day: '2-digit'});
  const month = date.toLocaleString('en-US', {month: 'short'}).replace('.', '');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

const UpdateOrderDetails = () => {
  const navigation = useNavigation();

  // State variables for uploaded documents
  const [uploadedLicense, setUploadedLicense] = useState('');
  const [uploadedID, setUploadedID] = useState('');
  const [uploadedPrescription, setUploadedPrescription] = useState('');
  const [uploadedFaceScan, setUploadedFaceScan] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} // Adjust as needed
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <Image source={backbutton} style={styles.backButtonImage} />
          </TouchableOpacity>
          <Text style={styles.title}>Order Details</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Image source={image} style={styles.orderImage} />
          <View style={styles.textContainer}>
            <View style={styles.hybridWithRatingRow}>
              <Text style={styles.orderTitle}>HYBRID</Text>
              <View style={styles.ratingWrapper}>
                <Image source={ratingImage} style={styles.ratingImageSmall} />
                <Text style={styles.ratingTextSmall}></Text>
              </View>
            </View>

            <View style={styles.deliveryInfoContainer}>
              <Text style={styles.orderText}>Walker Kush</Text>
              <Text style={styles.orderText}>50g</Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.orderPrice}>$65</Text>
              <Text style={styles.strikethroughPrice}>₹ 10,499</Text>
            </View>
          </View>
        </View>
        <View style={styles.deliveryContainer}>
          <View style={styles.deliveryTitleContainer}>
            <Text style={styles.deliveryTitle}>Delivery Address:</Text>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => {
                /* Navigate to edit screen */
              }}>
              <Image source={edit} style={styles.editButtonImage} />
            </TouchableOpacity>
          </View>

          <View style={styles.deliveryInfoContainer}>
            <Text style={styles.deliveryDateText}>Praveen Reddy - #ID1234</Text>
            <Text style={styles.deliveryDateText}>12/Nov/2024</Text>
          </View>
          <Text style={styles.deliveryText}>+91 1234567890</Text>
          <Text style={styles.deliveryText}>
            City Road, 1st cross, Sector 6, HSR Layout, Bangalore, Karnataka -
            561115
          </Text>
        </View>
        <View style={{width: '100%'}}>
          <Text style={styles.consumerTitle}>
            Required Document by Consumer
          </Text>
          <FloatingLabelInput
            label="Uploaded License *"
            value={uploadedLicense}
            onChangeText={setUploadedLicense}
          />
          <FloatingLabelInput
            label="Uploaded ID Card *"
            value={uploadedID}
            onChangeText={setUploadedID}
          />
          <FloatingLabelInput
            label="Uploaded Prescription *"
            value={uploadedPrescription}
            onChangeText={setUploadedPrescription}
          />
          <FloatingLabelInput
            label="Face Scan *"
            value={uploadedFaceScan}
            onChangeText={setUploadedFaceScan}
          />
        </View>
        <View style={styles.noteContainer}>
          <Image source={note} style={styles.noteImage} />
          <View style={styles.noteContent}>
            <Text style={styles.noteTitle}>Note</Text>
            <Text style={styles.noteText}>
              Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </Text>
          </View>
        </View>
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryTitle}>Summary</Text>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Amount</Text>
            <Text style={styles.summaryValue}>$ 6800</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Tax</Text>
            <Text style={styles.summaryValue}>$ 800</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Delivery partner fees</Text>
            <Text style={styles.summaryValue}>$ 100</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabelBold}>Grand total</Text>
            <Text style={styles.summaryValueBold}>$ 6100</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Cash Round Off</Text>
            <Text style={styles.summaryValue}>$ -0.08</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabelBold}>Receivable</Text>
            <Text style={styles.summaryValueBold}>$ 78</Text>
          </View>
        </View>
        <View style={styles.invoiceButtonContainer}>
          <TouchableOpacity style={styles.invoiceButton}>
            <Text style={styles.invoiceButtonText}>Download Invoice</Text>
            <Image source={Download} style={styles.downloadIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.ratingContainer}>
          <Text style={styles.ratingTitle}>Rating to Courier Service</Text>
          <View style={styles.starsContainer}>
            <StarSVG />
            <StarSVG />
            <StarSVG />
            <StarSVG />
            <StarSVG />
          </View>
        </View>

        <View style={styles.feedbackContainer}>
          <Text style={styles.feedbackTitle}>Share your feedback</Text>
          <View style={{position: 'relative', width: width * 0.78}}>
            <CommonTextInput
              placeholder="Tell us what you liked." // This is necessary to ensure the input field has a placeholder space.
              style={{
                borderColor: 'white',
                borderWidth: 1,
                backgroundColor: 'white',
                borderRadius: 10,
                paddingLeft: 10, // Add padding to ensure the text doesn't touch the border
                height: 70, // Adjust height as needed
              }}
            />
          </View>
        </View>
        <CommonButton
          title="Go to Home"
          onPress={() => navigation.navigate('TabNavigator', {screen: 'Home'})}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default UpdateOrderDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },

  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },

  ratingImage: {
    width: 42.27,
    height: 44,
    padding: 5,
    borderRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 1)',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: 'rgba(51, 51, 51, 1)',
    fontFamily: 'Inter',
    marginRight: 40,
    flex: 1,
    textAlign: 'center',
  },
  backButton: {
    padding: 10,
  },
  backButtonImage: {
    width: 45,
    height: 45,
  },
  orderImage: {
    width: 78,
    height: 78,
    borderRadius: 5.2,
    borderWidth: 0.65,
    borderColor: 'transparent',
    marginBottom: 3,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(240, 240, 240, 1)',
    borderRadius: 8,
    padding: 10,
    width: '100%',
    marginTop: 10,
  },
  orderTitle: {
    fontSize: 12,
    fontWeight: '300',
    fontFamily: 'Mulish',
    color: 'rgba(79, 79, 79, 1)',
    marginBottom: 5,
    lineHeight: 15,
  },
  orderText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Mulish',
    marginBottom: 5,
    lineHeight: 17,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: 'rgba(41, 73, 8, 1)',
    // marginBottom: 10,
    lineHeight: 23,
    marginRight: 10,
  },
  strikethroughPrice: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 17.6,
    textDecorationLine: 'line-through',
    color: 'rgba(155, 155, 155, 1)',
  },
  deliveryTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  deliveryContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(240, 240, 240, 1)',
    borderRadius: 8,
    width: '100%',
  },
  deliveryTitle: {
    fontSize: 16,
    fontWeight: '400',
    flex: 1,
    textAlign: 'left',
    lineHeight: 19,
    fontFamily: 'Inter',
    color: 'rgba(0, 0, 0, 1)',
  },
  deliveryText: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Inter',
    marginLeft: 3,
    marginTop: 3,
    color: 'rgba(89, 95, 116, 1)',
    flex: 1,
  },
  deliveryInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
    textAlign: 'left',
  },
  deliveryDateText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'rgba(89, 95, 116, 1)',
    fontFamily: 'Inter',
    marginTop: 4,
    textAlign: 'right',
  },
  editButton: {
    borderRadius: 5,
  },
  editButtonImage: {
    width: 16,
    height: 18,
  },
  consumerTitle: {
    fontSize: 17,
    fontWeight: '600',
    marginRight: 35,
    marginLeft: -5,
    fontFamily: 'Inter',
    color: 'rgba(51, 51, 51, 1)',
    padding: 10,
    // marginVertical: 10,
  },
  floatingLabelContainer: {
    position: 'relative',
    marginVertical: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  floatingLabel: {
    position: 'absolute',
    marginTop: 5,
    left: 10,
    color: 'gray',
    fontSize: 12,
  },
  input: {
    flex: 1,
    height: 60,
    paddingHorizontal: 10,
    fontSize: 18,
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  openButton: {
    backgroundColor: 'rgba(64, 156, 89, 1)',
    paddingVertical: 10,
    paddingHorizontal: 33,
    borderRadius: 5,
    marginRight: 10,
    marginLeft: 10, // Space between input and button
  },
  openButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  LicenceImage: {
    width: 34,
    height: 36,
    borderRadius: 5,
  },
  noteContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 20,
    padding: 10,
    width: '100%',
  },
  noteImage: {
    width: 24, // Adjust as needed
    height: 24, // Adjust as needed
    marginRight: 10,
  },
  noteContent: {
    flex: 1,
  },
  noteTitle: {
    fontSize: 10,
    fontWeight: '400',
    fontFamily: 'Inter',
    color: 'rgba(51, 51, 51, 1)',
    marginBottom: 5,
  },
  noteText: {
    fontSize: 14,
    color: 'rgba(51, 51, 51, 1)',
    fontFamily: 'Inter',
    fontWeight: '500',
  },
  summaryContainer: {
    marginTop: 20,
    padding: 10,
    width: '100%',
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Inter',
    color: 'rgba(0, 0, 0, 1)',
    marginBottom: 10,
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  summaryLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: 'rgba(112, 112, 112, 1)',
    fontFamily: 'Inter',
  },
  summaryValue: {
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Inter',
    color: 'rgba(51, 51, 51, 1)',
  },
  summaryLabelBold: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Inter',
    color: 'rgba(51, 51, 51, 1)',
  },
  summaryValueBold: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Inter',
    color: 'rgba(51, 51, 51, 1)',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
  rejectButton: {
    width: '48%', // Adjust width to fit spacing
    height: 48,
    padding: 14,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(64, 156, 89, 1)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    opacity: 1, // Make visible
    marginRight: '2%', // Space between buttons
  },
  acceptButton: {
    width: '48%', // Adjust width to fit spacing
    height: 48,
    padding: 14,
    borderRadius: 10,
    backgroundColor: 'rgba(64, 156, 89, 1)',
    opacity: 1, // Make visible
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  buttonTextReject: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'rgba(64, 156, 89, 1)',
  },
  invoiceButtonContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },

  invoiceButton: {
    backgroundColor: '#409C59',
    width: '100%',
    padding: 12,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between', // Adjusted to space out items
    alignItems: 'center', // Center items vertically
  },

  invoiceButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 20, // Maintain space between text and icon
  },

  downloadIcon: {
    width: 20,
    height: 20,
    marginRight: 20,
    marginLeft: 10, // Add margin to the left of the icon for additional spacing
  },
  feedbackContainer: {
    backgroundColor: '#409C59',
    padding: 20,
    borderRadius: 10,
    // position: 'absolute',
    bottom: 20,
    // left: 20,
    // right: 20,
    alignItems: 'flex-start',
    marginTop: 20,
    width: '100%',
  },
  feedbackTitle: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 19,
    fontWeight: '600',
    fontFamily: 'Inter',
  },
  ratingContainer: {
    marginVertical: 20,
    alignItems: 'flex-start', // Aligns content to the left
    marginBottom: 20, // Space below the rating section
    width: '100%', // Ensure the container spans the full width of the screen
  },

  ratingTitle: {
    color: 'black',
    fontSize: 19,
    fontWeight: '600',
    fontFamily: 'Inter',
    textAlign: 'left', // Ensures the rating title text is left-aligned
    marginBottom: 15, // Space between the title and the stars
  },

  starsContainer: {
    flexDirection: 'row', // Keeps the stars in a row horizontally
    justifyContent: 'flex-start', // Aligns stars to the left
    alignItems: 'center',
    gap: 6,
    marginBottom: 7, // Optional: to give some space between the stars
  },
  hybridWithRatingRow: {
    flexDirection: 'row', // Align children horizontally
    justifyContent: 'space-between', // Space out the text and rating wrapper
    alignItems: 'center', // Vertically center both elements
    width: '100%', // Ensure it takes full width
  },

  ratingWrapper: {marginBottom:-22,
    marginEnd:-8,
    flexDirection: 'row', // Align rating icon and text horizontally
    alignItems: 'center', // Vertically align the image and text
  },

  ratingImageSmall: {
    width: 42.27,
    height: 44,
    padding: 5,
    borderRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  ratingTextSmall: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 1)',
  },
});
