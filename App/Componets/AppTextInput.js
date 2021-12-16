import React from 'react'
import { View, Text ,StyleSheet,Platform} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TextInput } from 'react-native'
export default function AppTextInput({icon,...otherProps}) {
    return (
        <View style={styles.container}>
         {icon &&   <MaterialCommunityIcons  
           style={styles.icon}
           size={20}
           color="#6e6969"
            name={icon} />}
            <TextInput 
            placeholderTextColor="black"
            style={styles.textinput} {...otherProps}/>
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
        textinput:{
            // color:"#fof",
            fontSize:18,
            fontFamily:Platform.OS==="android"?"Roboto":"Avenir"

        },

        icon:{
            marginRight:10
        }
})
