import React from 'react';
import { Image, ImageBackground,StyleSheet ,Text,View,Button} from 'react-native';

import colors from '../config/colors'
import AppButton from './../Screens/AppButton';

function Welcome({navigation}) {
    return (
        <ImageBackground  blurRadius={2} resizeMode="cover" style={styles.background}  source={require('../assets/mona.jpg')}>
          <View style={styles.logoContainer}>
         <Image  style={styles.logo} source={require('../assets/we.jpg')}/> 
         <Text style={styles.info}>ORDER FOR ALL ART PIECES YOU WANT</Text>
         </View>  
         <View style={styles.buttons}>
         <Button title="Login" onPress={()=>navigation.navigate("Login")}/>
         <Button title="Register"  color="red" onPress={()=>navigation.navigate("Register")}/>
        </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background:{flex:1,
    justifyContent:"flex-end",
    alignItems:"center",
    backgroundColor:"black"
        
    },
    info:{
         color:"white",
         fontSize:25,
         fontWeight:"600",
         fontFamily:"Roboto",
         fontStyle: "italic",   
         paddingVertical:20   
    },
    buttons:{
     padding:20,
     width:"100%",
     justifyContent:"center",
     borderRadius:25
     
    },
    logo:{
       width:100,
       height:60
    },
logoContainer:{
    position:"absolute",
       top:70,
       alignItems:"center"
}
    
})

export default Welcome;