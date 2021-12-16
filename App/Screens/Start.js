import React from 'react'
import { View, Image,StyleSheet} from 'react-native'
import {MaterialCommunityIcons} from "@expo/vector-icons"

 function Start(props) {
    return (
        <View style={styles.sampleContainer}>
        <View style={styles.closeicon}>
            <MaterialCommunityIcons name="close" color="white" size={30}/>
        </View>
        <View style={styles.deleteicon}>
            <MaterialCommunityIcons name="trash-can-outline"  color="white"  size={30}/>
        </View>
        <Image resizeMode="contain" style={styles.sample} source={require('../assets/ind.jpeg')}/> 
        </View>
    )
}
const styles = StyleSheet.create({
    sample:{
        width:'100%',
        height:'100%'
    },
    sampleContainer:{
        flex:1,
        backgroundColor:"black"
    },
    closeicon:{
        // width:50,
        // height:50,
        // backgroundColor:"red",
        position:"absolute",
        top:60,
        left:30
    },
    deleteicon:{
        // width:50,
        // height:50,
        // backgroundColor:"#4ecdc4",
        position:"absolute",
        top:60,
        right:30
    }
    
})
export default Start;