import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/onboarding/Splash';
import Onboarding from '../screens/onboarding/Onboarding';
import TabNavigator from './TabNavigator';
import ConnectWithPhone from '../screens/onboarding/ConnectWithPhone';
import ConnectWithEmail from '../screens/onboarding/ConnectWithEmail';
import OtpSplash from '../screens/onboarding/OtpSplash';
import OTPEnter from '../screens/onboarding/OTPEnter';
import PersonalInfo from '../screens/registration/PersonalInfo';
import BusinessDetails from '../screens/registration/BusinessDetails';
import ApprovalWaitng from '../screens/onboarding/ApprovalWaitng';
import ScanFace from '../screens/onboarding/ScanFace';
import UploadDoc from '../screens/registration/UploadDoc';
import AddProducts from '../screens/products/AddProducts';
import EditProducts from '../screens/products/EditProducts';
import ProductInfo from '../screens/products/ProductInfo';
import Chat from '../screens/dashboard/Chat';
import EditUserProfile from '../screens/profile/EditUserProfile';
import StoreDetails from '../screens/profile/StoreDetails';
import Earnings from '../screens/profile/Earnings';
import CustomerSupport from '../screens/profile/CustomerSupport';
import ContactUsForm from '../screens/profile/ContactUsForm';
import AncillaryAddProducts from '../screens/products/AncillaryAddProducts';
import AncillaryEditProduct from '../screens/products/AncillaryEditProduct';
import SelectLanguage from '../screens/onboarding/SelectLanguage';
import OrderDetails from '../screens/orders/OrderDetails';
import RejectReason from '../screens/orders/RejectReason';
import Update from '../screens/orders/Update';
import UpdateOrderDetails from '../screens/orders/UpdateOrderDetails';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="ConnectWithPhone" component={ConnectWithPhone} />
      <Stack.Screen name="ConnectWithEmail" component={ConnectWithEmail} />
      <Stack.Screen name="ScanFace" component={ScanFace} />
      <Stack.Screen name="UploadDoc" component={UploadDoc} />
      <Stack.Screen name="AddProducts" component={AddProducts} />
      <Stack.Screen name="Update" component={Update} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
      <Stack.Screen name="UpdateOrderDetails" component={UpdateOrderDetails} />
      <Stack.Screen name="EditProducts" component={EditProducts} />
      <Stack.Screen name="RejectReason" component={RejectReason} />
      <Stack.Screen name="OtpSplash" component={OtpSplash} />
      <Stack.Screen name="OTPEnter" component={OTPEnter} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
      <Stack.Screen name="BusinessDetails" component={BusinessDetails} />
      <Stack.Screen name="ApprovalWaitng" component={ApprovalWaitng} />
      <Stack.Screen name="ProductInfo" component={ProductInfo} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="EditUserProfile" component={EditUserProfile} />
      <Stack.Screen name="StoreDetails" component={StoreDetails} />
      <Stack.Screen name="Earnings" component={Earnings} />
      <Stack.Screen name="CustomerSupport" component={CustomerSupport} />
      <Stack.Screen name="ContactUsForm" component={ContactUsForm} />
      <Stack.Screen name="SelectLanguage" component={SelectLanguage} />
      <Stack.Screen
        name="AncillaryAddProducts"
        component={AncillaryAddProducts}
      />
      <Stack.Screen
        name="AncillaryEditProduct"
        component={AncillaryEditProduct}
      />
     
    </Stack.Navigator>
  );
};

export default RootNavigator;
