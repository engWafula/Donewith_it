import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'

export default function PickerItems({onPress,item}) {
    return (
       <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>{item.label}</Text>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text:{
   padding:20,

    }
    
})