import React from "react"
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../Screens/AccountScreen"
import  MessageScreeen from "../Screens/MessageScreeen"


const Stack =createStackNavigator()
const AccountNavigator=()=>(
    <Stack.Navigator >
        <Stack.Screen  name="Acount" component={AccountScreen}/>
        <Stack.Screen name="Messages" component={MessageScreeen}/>
    </Stack.Navigator>
)


export default AccountNavigator