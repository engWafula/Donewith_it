import React from 'react'
import { StyleSheet, Text, View,Platform,StatusBar,SafeAreaView} from 'react-native';


export default function Screen({children,style}) {
    return (
        <SafeAreaView style={[styles.screen,style]}> 
           {children}
        </SafeAreaView> 
    )

}
const styles = StyleSheet.create({
    screen:{
        paddingLeft:10,
        paddingTop:Platform.OS==="android"?StatusBar.currentHeight:0,
        flex:1
    }
})
