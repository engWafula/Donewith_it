import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Test from "../Screens/Test"
import AccountScreen from "../Screens/AccountScreen"
import ListingsScreen from  "../Screens/ListingsScreen"
import React from "react"
import FeedNavigator from '../navigation/FeedNavigator';
import AccountNavigator from '../navigation/AccountNavigator';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import ListButton from '../navigation/ListButton';
import { Notifications} from 'expo';
import * as Permissions  from  "expo-permissions"
import { useEffect } from 'react';
import expoNotifiction from '../api/expoNotifiction';




const Tab=createBottomTabNavigator()



const AppNavigator=()=>{
useEffect(() => {
  registerNotification()
}, [])
 const registerNotification= async ()=>{
   try {
    const permission= await Permissions.askAsync(Permissions.NOTIFICATIONS)
    if(!permission.granted) return
    const token=await Notifications.getExpoPushTokenAsync()
  expoNotifiction.Registernotification(token)
   } catch (error) {
     console.log("error token please",error)
   }
 
 }

  return (
  
    <Tab.Navigator >
            <Tab.Screen name="Feed" component={FeedNavigator}
            options={{
                tabBarIcon:({color,size})=><MaterialCommunityIcons name="home" size={size} color={color}/>
            }}
            />
            <Tab.Screen
          
      name="Listings"
      component={Test}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={size}
          />
        ),
      }}
    />
           <Tab.Screen name="Account" component={AccountNavigator}
           options={{
                tabBarIcon:({color,size})=><MaterialCommunityIcons name="account" size={size} color={color}/>
            }}
           />
    </Tab.Navigator>
)
          }

export default AppNavigator