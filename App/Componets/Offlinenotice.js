import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import Constants from "expo-constants"
import { useNetInfo } from '@react-native-community/netinfo'
export default function Offlinenotice() {
    const netinfo =useNetInfo();
    if(netinfo.type!=="unknown" && netinfo.isInternetReachable===false)
    return (
        <View style={styles.container}>
            <Text style={styles.Text}>No Internet connection</Text>
        </View>
    )

    return null
}
 const styles = StyleSheet.create({
    container:{
        backgroundColor:"red",
        height:50,
        position:"absolute",
        zIndex:1,
        width:"100%",
        top:Constants.statusBarHeight,
        alignItems:"center",
        justifyContent:"center"
        },
        Text:{
       color:"white"
        }
 })