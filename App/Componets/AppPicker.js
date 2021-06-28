import React from 'react'
import { View, Text ,StyleSheet,Platform} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TextInput } from 'react-native'
import { alignPropType } from 'react-bootstrap/esm/DropdownMenu'
export default function AppPicker({placeholder,icon,...otherProps}) {
    return (
        <View style={styles.container}>
         {icon &&   <MaterialCommunityIcons  
           style={styles.icon}
           size={40}
           color="#6e6969"
            name={icon} />}
            <Text style={styles.text}>{placeholder}</Text>
            <MaterialCommunityIcons  
           style={styles.icon}
           size={40}
           color="#6e6969"
            name>
        </View>
    )
}

const styles = StyleSheet.create({
        container:{
            backgroundColor:"lightgray",
            borderRadius:25,
            flexDirection:"row",
            width:"100%",
            marginVertical:10,
            padding:15
        },
        text:{
             flex:1,
            fontFamily:Platform.OS==="android"?"Roboto":"Avenir",
            alignItems:"center",
            justifyContent:"center",

        },

        icon:{
            marginRight:10,
            alignItems:"center",
            justifyContent:"center",
        }
})
