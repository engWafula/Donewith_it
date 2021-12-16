import React,{useRef}from 'react'
import { View,StyleSheet, ScrollView } from 'react-native'
import ImageInput from './ImageInput'
export default function ImageInputList({imageUris=[],onAddImage,onRemoveImage}) {
const scrollview=useRef()

 return (
     <View>
     <ScrollView  horizontal ref={scrollview}
      onContentSizeChange={()=>scrollview.current.scrollToEnd()}>
 <View style={styles.container}>
{imageUris.map((uri)=>
(
<View style={{marginRight:10}}  key={uri}  >
<ImageInput 
imageUri={uri}
onChangeImage={(uri)=>onRemoveImage(uri)}
/>
</View>
))} 
<ImageInput onChangeImage={uri=>onAddImage(uri)}/>
 </View>
 </ScrollView>
 </View>
)
}
const styles = StyleSheet.create({
container:{
flexDirection:'row'
}
}
)