import React from 'react'
import { Text ,StyleSheet,TouchableOpacity} from 'react-native'

import colors  from "../config/colors"
 function AppButton({title,onPress,color="secondary"}) {
    return (
        <TouchableOpacity style={[styles.button,{backgroundColor:colors[color]}]} onPress={onPress}>
        
           <Text style={styles.text}>{title}</Text>

    
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
  button:{
      backgroundColor: colors.secondary,
      justifyContent:"center",
      borderRadius:25,
      alignItems:"center",
      padding:15,
      width:"100%",
      marginVertical:10
  },
  text:{
      color:"white",
      fontSize:18,
      textTransform:"uppercase",
      fontWeight:"bold"


  }
})
export default AppButton;