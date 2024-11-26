import {createStackNavigator} from '@react-navigation/stack';
import AddProducts from '../screens/products/AddProducts';
import AncillaryAddProducts from '../screens/products/AncillaryAddProducts';
import AncillaryEditProduct from '../screens/products/AncillaryEditProduct';
import ApprovalWaitng from '../screens/onboarding/ApprovalWaitng';
import BusinessDetails from '../screens/registration/BusinessDetails';
import Chat from '../screens/dashboard/Chat';
import ConnectWithEmail from '../screens/onboarding/ConnectWithEmail';
import ConnectWithPhone from '../screens/onboarding/ConnectWithPhone';
import ContactUsForm from '../screens/profile/ContactUsForm';
import CustomerSupport from '../screens/profile/CustomerSupport';
import EditProducts from '../screens/products/EditProducts';
import EditUserProfile from '../screens/profile/EditUserProfile';
import Earnings from '../screens/profile/Earnings';
import OrderDetails from '../screens/orders/OrderDetails';
import OTPEnter from '../screens/onboarding/OTPEnter';
import OtpSplash from '../screens/onboarding/OtpSplash';
import PersonalInfo from '../screens/registration/PersonalInfo';
import ProductInfo from '../screens/products/ProductInfo';
import RejectReason from '../screens/orders/RejectReason';
import ScanFace from '../screens/onboarding/ScanFace';
import SelectLanguage from '../screens/onboarding/SelectLanguage';
import Splash from '../screens/onboarding/Splash';
import StoreDetails from '../screens/profile/StoreDetails';
import TabNavigator from './TabNavigator';
import Update from '../screens/orders/Update';
import UpdateOrderDetails from '../screens/orders/UpdateOrderDetails';
import UploadDoc from '../screens/registration/UploadDoc';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AddProducts" component={AddProducts} />
      <Stack.Screen name="AncillaryAddProducts" component={AncillaryAddProducts} />
      <Stack.Screen name="AncillaryEditProduct" component={AncillaryEditProduct} />
      <Stack.Screen name="ApprovalWaitng" component={ApprovalWaitng} />
      <Stack.Screen name="BusinessDetails" component={BusinessDetails} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="ConnectWithEmail" component={ConnectWithEmail} />
      <Stack.Screen name="ConnectWithPhone" component={ConnectWithPhone} />
      <Stack.Screen name="ContactUsForm" component={ContactUsForm} />
      <Stack.Screen name="CustomerSupport" component={CustomerSupport} />
      <Stack.Screen name="EditProducts" component={EditProducts} />
      <Stack.Screen name="EditUserProfile" component={EditUserProfile} />
      <Stack.Screen name="Earnings" component={Earnings} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
      <Stack.Screen name="OTPEnter" component={OTPEnter} />
      <Stack.Screen name="OtpSplash" component={OtpSplash} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
      <Stack.Screen name="ProductInfo" component={ProductInfo} />
      <Stack.Screen name="RejectReason" component={RejectReason} />
      <Stack.Screen name="ScanFace" component={ScanFace} />
      <Stack.Screen name="SelectLanguage" component={SelectLanguage} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="StoreDetails" component={StoreDetails} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="Update" component={Update} />
      <Stack.Screen name="UpdateOrderDetails" component={UpdateOrderDetails} />
      <Stack.Screen name="UploadDoc" component={UploadDoc} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
