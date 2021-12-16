import React,{useEffect, useState} from 'react'
import  Screen  from   "../Componets/Screen"
import ListingsApi from '../api/listings'
import { ScrollView, StyleSheet} from "react-native";
import * as Yup from "yup";
import * as Location from  "expo-location";
import AppFormField from '../Componets/AppFormField'
import SubmitButton from '../Componets/SubmitButton'
import AppForm from '../Componets/AppForm'
import AppFormPicker  from "../Componets/AppFormPicker";
import CategoryItemPicker from '../Componets/CategoryItemPicker';
import FormImagePicker from '../Componets/Forms/FormImagePicker';
import useLocation from '../hooks/useLocation';

import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image."),
  });
  const categories=[
  {label:"Black and White",
  value:1,
  backgroundColor:"blue",
  icon:"pencil"},
  {label:"Colored",value:2,
  backgroundColor:"red",
  icon:"brush"
},
  {label:"Framed",value:3,
backgroundColor:"brown", icon:"image-filter-frames"}
]
export default function Test() {
       const location = useLocation()
       const [uploadVisible, setUploadVisible] = useState(false);
       const [progress, setProgress] = useState(0);
     
       const handleSubmit = async (listing, { resetForm }) => {
         setProgress(0);
         setUploadVisible(true);
         const result = await ListingsApi.addListing(
           { ...listing, location },
           (progress) => setProgress(progress)
         );
     
         if (!result.ok) {
           setUploadVisible(false);
           return alert("Could not save the listing");
         }
         resetForm();
       };
     
       return (
         <ScrollView>
         <Screen style={styles.container}>
           {/* <UploadScreen
             onDone={() => setUploadVisible(false)}
             progress={progress}
             visible={uploadVisible}
           /> */}
          <AppForm
            initialValues={{
              title: "",
              price: "",
              description: "",
              category: null,
              images: [],
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
             <FormImagePicker name="images" /> 
            <AppFormField maxLength={255} name="title" placeholder="Title" />
            <AppFormField
              keyboardType="numeric"
              maxLength={8}
              name="price"
              placeholder="Price"
            
            />
            <AppFormPicker
              items={categories}
              name="category"
               PickerItemComponent={CategoryItemPicker}
              placeholder="Category"
              numberOfColumns={3}
              
            />
            <AppFormField
              maxLength={255}
              multiline
              name="description"
              numberOfLines={3}
              placeholder="Description"
              onSubmitEditing={handleSubmit}
            />
            <SubmitButton title="Post"/>
          </AppForm>
        </Screen>
        </ScrollView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        padding: 10,
      },
    });
    
