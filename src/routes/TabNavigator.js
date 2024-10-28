import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import Products from '../screens/Products';
import Orders from '../screens/Orders';
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const TabNavigator=() =>{
  return (
      <Tab.Navigator        
       screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:"#2777C4",
        tabBarInactiveTintColor:"#061E14",
        tabBarStyle:{
            height:50,
            backgroundColor:"#fff",
            width:'100%',
            elevation:10,
            shadowColor:"#000",
            shadowOffset:{width:0, height:2},
            shadowOpacity:0.2,
            shadowRadius:25,
            borderColor:"#f2f2f2",
            borderWidth:1,
        },
        tabBarIconStyle:{
            fontSize:12,
            fontWeight:'500'
        },

       }}
>
        <Tab.Screen name="Home"
         component={Dashboard} 
            options={{
                tabBarIcon:({focused})=>(
                    <Icon name="home" size={30} color={focused?"#900":"#000"} />
                )
            }}
         />
        <Tab.Screen 
        name="Products"
         component={Products} 
            options={{
                tabBarIcon:({focused})=>(
                    <Icon name="home" size={30} color={focused?"#900":"#000"} />
                )
            }}
         />
        <Tab.Screen 
            name="Orders"
            component={Orders}
            options={{
                tabBarIcon:({focused})=>(
                    <Icon name="home" size={30} color={focused?"#900":"#000"} />
            )
         }}
          />
        <Tab.Screen 
        name="Profile" 
        component={Profile}
            options={{
                tabBarIcon:({focused})=>(
                    <Icon name="home" size={30} color={focused?"#900":"#000"} />
                )
            }}
          />
      </Tab.Navigator>
  );
}
export default TabNavigator