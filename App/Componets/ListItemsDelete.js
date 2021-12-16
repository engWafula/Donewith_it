import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import {MaterialCommunityIcons} from  '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
export default function ListItemsDelete({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
            <MaterialCommunityIcons
           
            name='trash-can'
            size={35}
            color='white'
            />
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'gray',
        width:70,
        justifyContent:"center",
        alignItems:"center"

    }
})
