import React ,{useState,useContext} from 'react'
import { View, Text ,Image,StyleSheet} from 'react-native'
import { Formik} from  'formik'
import Screen from  '../Componets/Screen'
import  AppTextInput  from   '../Componets/AppTextInput'
import jwtDecode from "jwt-decode"
import * as Yup from  'yup'
import AppButton  from  './AppButton'
import ErrorMessage from  '../Componets/ErrorMessage'
import AppFormField from '../Componets/AppFormField'
import SubmitButton from '../Componets/SubmitButton'
import AppForm from '../Componets/AppForm'
import  authApi from "../api/auth"
import AuthContext from '../auth/context'
import Authstorage from '../auth/storage'

const validationSchema=Yup.object().shape({
    email:Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(6).label("Password"),
})
export default function Login() {
    // const [email,setEmail]=useState()
     const [loginfailed,setloginfailed]=useState(false)
    const authContext = useContext(AuthContext)
    const handleSubmit=async ({email,password})=>{
   const result=await authApi.login(email,password)
   if(!result.ok)
   return setloginfailed(true)
   setloginfailed(false)
   const user=jwtDecode(result.data)
   authContext.setUser(user)
   Authstorage.storeToken(result.data)
    }
    return (
        <Screen style={styles.container}>
         <Image  style={styles.logo} source={require('../assets/we.jpg')}/> 
         <AppForm
         initialValues={{email:'',password:''}}
         onSubmit={handleSubmit}
         validationSchema={validationSchema}
         >
             <ErrorMessage  error="Invalid email or pasword" visible={loginfailed}/>
        
                <AppFormField
         icon='email'
         placeholder="Email"
         autoCaptalize="none"
         autoCorrect={false}
         name='email'
         keyBoardType="email-address"
         textContentType="emailAddress"
         />
    
         <AppFormField
         icon='lock'
         placeholder="Password"
         autoCaptalize="none"
         autoCorrect={false}
        name="password"
         textContentType="password"
         secureTextEntry
         />
         <SubmitButton title="Login"/>
      
         </AppForm>
       
        </Screen>
    )
}
const styles = StyleSheet.create({
    container:{
        padding:10
    },
    logo:{
        width:80,
        height:80,
        alignSelf:'center',
         marginTop:50,
        marginBottom:20,
    }
})
