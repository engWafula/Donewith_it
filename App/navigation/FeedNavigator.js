
import React from "react"
import { createStackNavigator } from "@react-navigation/stack";
import  ListingDetails from "../Screens/ListingDetails"
import  ListingsScreen  from "../Screens/ListingsScreen"


const Stack =createStackNavigator()
const FeedNavigator=()=>(
    <Stack.Navigator  screenOptions={{headerShown:false}}>
        <Stack.Screen  name="List" component={ListingsScreen}/>
        <Stack.Screen name="ListingDetails" component={ListingDetails}/>
    </Stack.Navigator>
)


export default FeedNavigator