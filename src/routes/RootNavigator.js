import { createStackNavigator } from '@react-navigation/stack';
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

const Stack = createStackNavigator();

const RootNavigator=()=> {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="ConnectWithPhone" component={ConnectWithPhone} />
      <Stack.Screen name="ConnectWithEmail" component={ConnectWithEmail} />
      <Stack.Screen name="ScanFace" component={ScanFace} />
      <Stack.Screen name="UploadDoc" component={UploadDoc} />
      <Stack.Screen name="OtpSplash" component={OtpSplash} />
      <Stack.Screen name="OTPEnter" component={OTPEnter} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
      <Stack.Screen name="BusinessDetails" component={BusinessDetails} />
      <Stack.Screen name="ApprovalWaitng" component={ApprovalWaitng} />
    </Stack.Navigator>
  );
};

export default RootNavigator;