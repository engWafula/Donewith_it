import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
 import { StyleSheet, Text, View,Button,Image} from 'react-native';
import MessageScreeen from './App/Screens/MessageScreeen';
import ListItem from "./App/Componets/ListItem"
 import  Welcome from  './App/Screens/Welcome';
 import jwtDecode from "jwt-decode"
 import {AppLoading} from "expo"
import  Screen  from   "./App/Componets/Screen"
import  ListingDetails  from   './App/Screens/ListingDetails'; 
import Test from './App/Screens/Test';
import AuthNavigator from './App/navigation/AuthNavigator';
import  Login from './App/Screens/Login';
import ImageInput from './App/Componets/ImageInput';
import ImageInputList from './App/Componets/ImageInputList';
import * as ImagePicker from 'expo-image-picker'; 
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
//import * as permissions  from   'expo-permissions'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppNavigator from './App/navigation/AppNavigator';
import Offlinenotice from './App/Componets/Offlinenotice';
import AuthContext from './App/auth/context';
import Authstorage from './App/auth/storage';
// import NavigationTheme from './App/navigation/NavigationTheme';
import configureStore from "./App/store/configureStore"
import {Provider} from "react-redux"

const  store =configureStore()
export default function App() {
  const [imageUris,setImageUris]=useState([])
    const [user,setUser]=useState()
    const [isReady,setIsReady]=useState(false)

  const Tweets=({navigation})=>
  (<Text>Tweets

    <Link/>
  </Text>)

  const Link=()=>{
    const navigation=useNavigation()
    return(
    <Button
    title="Click"
    onPress={()=>navigation.navigate("TweetDetails",{id:1})}
    />)
  }
  

  const TweetDetails=({route})=>
    (<Text>TweetDetails{route.params.id}</Text>)

    const Account=()=>(<Text>Am account</Text>)
  
  const Stack =createStackNavigator()
  const Tab =createBottomTabNavigator()
   
  const TabNavigator=()=>(
      <Tab.Navigator tabBarOptions={{
        activeBackgroundColor:'red',
        activeTintColor:'white',
        inactiveBackgroundColor:'lightgray',
        inactiveTintColor:"black"
      }}>
        <Tab.Screen name='Tweets' component={Tweets}    options={{ tabBarIcon:({size,color})=>
          (<MaterialCommunityIcons name="home" size={25} size={size} color={color}/>)
      }}/>
        <Tab.Screen name='Account' component={Account} />
      </Tab.Navigator>
  )

  const StackNavigator =()=>
    (<Stack.Navigator>
      <Stack.Screen name='Tweets' component={Tweets} 
     />
      <Stack.Screen name='TweetDetails' component={TweetDetails} options={{title:"Tweet Details"}}/>
    </Stack.Navigator>)

    const restoreToken=async()=>{
      const token=Authstorage.getToken()
      if(!token) return;
    
        setUser(jwtDecode(token)) 
    }   
        
        
    
// if(!isReady)
// return  <AppLoading startAsync={restoreToken} onFinish={()=>setIsReady(true)}/>
useEffect(() => {
  restoreToken()
}, [])

    
  return (    
    <Provider store={store}>
    <AuthContext.Provider value={{user,setUser}}>
                   <Offlinenotice/>
               <NavigationContainer>
           {user?<AppNavigator/>: <AuthNavigator/>}     
               </NavigationContainer>
      
               </AuthContext.Provider> 
               </Provider>
    );
  }
  