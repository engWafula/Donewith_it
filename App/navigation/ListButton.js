import React from 'react'
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";





export default function ListButton({onPress}) {
 return (
     <TouchableOpacity onPress={onPress}>
 <View style={styles.container}>
<MaterialCommunityIcons name="plus-circle" color="white" size={20}/>
 </View>
 </TouchableOpacity>
)
}
const styles = StyleSheet.create({
container:{
backgroundColor:"#fc5c65",
borderRadius: 40,
borderWidth: 10,
bottom: 20,
height: 80,
justifyContent: "center",
width: 80,
alignItems:"center",
borderColor:"white"
}
}
)