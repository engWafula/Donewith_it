import React,{useEffect} from 'react'
import { View,StyleSheet,Image, Alert } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {TouchableWithoutFeedback} from 'react-native'
import * as ImagePicker from 'expo-image-picker'


export default function ImageInput({imageUri,onChangeImage}) {
    const requestPermision=async ()=>{
      
        const result= await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(!result.granted) 
        alert('You need  permisions')   
      
  
    }
    useEffect(()=>{
      requestPermision();
    },[])
    const press=()=>{
        if(!imageUri)
        selectImage()

        else
        Alert.alert("Delete","Are you sure you want to delete ?",[
            {text:"yes" ,onPress:()=>{onChangeImage(null)}},
            {text:"No"}
        ])
    }

    const selectImage= async() => {
        try {
          const result  = await  ImagePicker.launchImageLibraryAsync({
              mediaTypes:ImagePicker.MediaTypeOptions.Image,
              quality:0.5
          })
          if(!result.cancelled)
          onChangeImage(result.uri)
        } catch (error) {
           console.log('Errror read imae')
        }
      }
    
    
 return (
     <TouchableWithoutFeedback onPress={press}>
 <View style={styles.container}>
  {!imageUri&& <MaterialCommunityIcons name='camera' size={40} color='gray'/>}
  {imageUri && <Image source={{uri:imageUri}} style={styles.image}/>}
 </View>
 </TouchableWithoutFeedback>
 
)
}
const styles = StyleSheet.create({
container:{
backgroundColor:'white',
borderRadius:15,
justifyContent:"center",
overflow:"hidden",
alignItems:"center",
width:100,
height:100
},
image:{
    width:'100%',
    height:'100%',
}
}
)