import React,{useContext,useState,useAuth}from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import { Formik} from  'formik'
import Screen from  '../Componets/Screen'

import  authApi from "../api/users"
// import AppButton  from  './AppButton'
import ErrorMessage from  '../Componets/ErrorMessage'
import AppFormField from '../Componets/AppFormField'
import SubmitButton from '../Componets/SubmitButton'
import AppForm from '../Componets/AppForm'
import AuthContext from '../auth/context'
import Authstorage from '../auth/storage'


const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const [registerFailed,setregisterFailed]=useState(false)
  const[error,setError]=useState()
// const auth=useAuth()
 
  const handleSubmit=async (userInfo)=>{
    const result=await authApi.register(userInfo)
    if(!result.ok){
      if(result.data)  setError(result.data.error)

      else
      setError("An  unexpected error  occured")

      return ;
    }

     const {data:authToken}= await authApi.login(
      userInfo.email,userInfo.password

   )
   auth.logIn(authToken)

}





  return (
    <Screen>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
         <ErrorMessage  error="Invalid email or pasword" visible={registerFailed}/>
        <AppFormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
