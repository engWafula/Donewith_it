 
import React from "react"
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screens/Login";
import RegisterScreen from "../Screens/RegisterScreen";
import Welcome from "../Screens/Welcome";

const Stack =createStackNavigator()
const AuthNavigator=()=>(
    <Stack.Navigator >
        <Stack.Screen name="Welcome" component={Welcome}
        options={{headerShown:false}}
        />
        <Stack.Screen name="Login"  component={Login}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
    </Stack.Navigator>
)


export default AuthNavigator