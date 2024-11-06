import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import Dashboard from '../screens/Dashboard';
import Products from '../screens/Products';
import Orders from '../screens/Orders';
import Profile from '../screens/Profile';
import Notification from '../screens/Notification';

import bell from '../asset/SVG/bell.png';
import bellg from '../asset/SVG/BellG.png';
import orders from '../asset/SVG/Orders.png';
import ordersg from '../asset/SVG/OrdersG.png';
import profile from '../asset/SVG/Profile.png';
import profileg from '../asset/SVG/ProfileG.png';
import home from '../asset/SVG/Icon.png';
import homeg from '../asset/SVG/HomeG.png';
import Product from '../asset/SVG/Products.png';
import ProductsSVG from '../asset/SVG/Products';
import Productg from '../asset/SVG/ProductsG.png';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#409C59',
        tabBarInactiveTintColor: '#061E14',
        tabBarStyle: {
          height: 50,
          backgroundColor: '#fff',
          width: '100%',
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.2,
          shadowRadius: 25,
          borderColor: '#f2f2f2',
          borderWidth: 1,
        },
        tabBarIconStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? homeg : home}
              style={{width: 20, height: 20}} // Standardized icon size
            />
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? Productg : Product}
              style={{width: 20, height: 20}} // Standardized icon size
            />
          ),
        }}
      />
      <Tab.Screen
        name="My Orders"
        component={Orders}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? ordersg : orders}
              style={{width: 20, height: 20}} // Standardized icon size
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? bellg : bell}
              style={{width: 20, height: 20}} // Standardized icon size
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? profileg : profile}
              style={{width: 20, height: 20}} // Standardized icon size
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
