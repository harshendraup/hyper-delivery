import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/Splash';
import Onboarding from '../screens/Onboarding';
import TabNavigator from './TabNavigator';
import ConnectWithPhone from '../screens/ConnectWithPhone';
import ConnectWithEmail from '../screens/ConnectWithEmail';
import OtpSplash from '../screens/OtpSplash';
import OTPEnter from '../screens/OTPEnter';
import PersonalInfo from '../screens/PersonalInfo';
import BusinessDetails from '../screens/registration/BusinessDetails';
import ApprovalWaitng from '../screens/ApprovalWaitng';
import ScanFace from '../screens/ScanFace';
import UploadDoc from '../screens/UploadDoc';
import AddProducts from '../screens/AddProducts';
import EditProducts from '../screens/EditProducts';
import ProductInfo from '../screens/ProductInfo';
import Chat from '../screens/Chat';
import EditUserProfile from '../screens/EditUserProfile';
import StoreDetails from '../screens/StoreDetails';
import Earnings from '../screens/Earnings';
import CustomerSupport from '../screens/CustomerSupport';
import ContactUsForm from '../screens/ContactUsForm';
import AncillaryAddProducts from '../screens/AncillaryAddProducts';
import AncillaryEditProduct from '../screens/AncillaryEditProduct';
import SelectLanguage from '../screens/SelectLanguage';
import OrderDetails from '../screens/OrderDetails';
import RejectReason from '../screens/RejectReason';
import Update from '../screens/Update';
import UpdateOrderDetails from '../screens/UpdateOrderDetails';

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
