import React,{useState} from 'react'
import { StyleSheet, Text, View,Platform,StatusBar,SafeAreaView} from 'react-native';
import {FlatList}   from 'react-native'
import ListItem from "../Componets/ListItem"
import  Screen from  "../Componets/Screen"
//import Constants from "expo-constants"
import ListItemSeparator from '../Componets/ListItemSeparator';
import ListItemsDelete from '../Componets/ListItemsDelete';
const initialmessages=[
    {id:1,
    title:"Am da CEO  of deno arts in kampala so am excited to be ",
    description:"you are the best ttttttttttttttttttttttttttttttttttttttttttttttttttrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrt",
    image:require('../assets/denis.jpg')
},
{    id:2,
    title:"T2",
    description:"you are bad",
    image:require('../assets/wafula.jpeg')
}

]


 function   MessageScreeen(props){
    const[messages,setMessages]=useState(initialmessages)
    const [refreshing,setRefreshing]=useState(false)
   const handledelete= message=>{
     const newmessages=messages.filter(m=>m.id!==message.id)
     setMessages(newmessages)
   }
    return (   
          <Screen style={styles.container}> 
           <FlatList
            data={messages}
            keyExtractor={(message)=>message.id.toString()}
            renderItem={({item})=><ListItem
                   onPress={()=>console.log('selected',item)}
                   title={item.title}
                   subtitle={item.description}
                   image={item.image}
                renderRightActions={()=><ListItemsDelete onPress={()=> handledelete(item)}/>}
                   />
    }
            ItemSeparatorComponent={ListItemSeparator}
            refreshing={refreshing}
            onRefresh={()=>{
                setMessages([
                    {    id:2,
                        title:"T2",
                        description:"you are bad",
                        image:require('../assets/wafula.jpeg')
                    }
                ])
            }}
            />
            </Screen>   
    )}
         

const styles = StyleSheet.create({
  
})


export default MessageScreeen
