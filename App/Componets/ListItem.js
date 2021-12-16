import React from 'react'
import { View, Text,StyleSheet, Image ,TouchableHighlight} from 'react-native'
// import { Colors } from 'react-native/Libraries/NewAppScreen'
import Swipeable from "react-native-gesture-handler/Swipeable";
// import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function ListItem({title,subtitle,image,ImageComponent,onPress,renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight 
        underlayColor='lightgray'
        onPress={onPress}>
        <View style={styles.container}>
                    {ImageComponent}
                    {image &&<Image style={styles.image} source={image}/>}
           <View style={styles.user}>
             <Text style={styles.title} numberOfLines={1}>{title}</Text>
            {subtitle && <Text numberOfLines={2}>{subtitle}</Text>}
           </View>   
          <MaterialCommunityIcons name='chevron-right' size={25}/> 
        </View>
        </TouchableHighlight>
        </Swipeable>
    )
}
const styles = StyleSheet.create({
    container:{
          flexDirection:"row",
          padding:15,
          backgroundColor:"lightgray",
          alignItems:"center"
    },
    image:{
        width:70,
        height:70,
        borderRadius:50,
        marginRight:10
    },
    title:{
        fontWeight:'bold'
    },
    subtitle:{
         color:"#6e6969"
    },
    user:{
        // marginVertical:20,
        marginLeft:10,
        justifyContent:"center",
         flex:1
    }
})

