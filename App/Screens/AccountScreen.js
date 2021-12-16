import React, { useContext } from 'react'
import { View, Text,FlatList } from 'react-native'
import Screen  from  '../Componets/Screen';
import ListItem from "../Componets/ListItem"
import {StyleSheet} from   'react-native'
import  colors from  '../config/colors'
import Icon from    "../Componets/Icon"
import ListItemSeparator from '../Componets/ListItemSeparator';
import AuthContext from '../auth/context';
import Authstorage from '../auth/storage';
const menuItems=[
    {title:'My listings',
      icon:{
          name:'format-list-bulleted',
          backgrounColor:"#4ecdc4",
      }
 },
 {title:'My Messages',
 icon:{
     name:'email',
     backgrounColor:"#fc5c65"
 },
 targetScreen:"Messages"
}
]

 function AccountScreen({navigation}) {
    const {user,setUser} =useContext(AuthContext)
    const handleLogOut=()=>{
        setUser(null)
        Authstorage.removeToken()
    }
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>

            <ListItem
         title={user.name}
         subtitle={user.email}
         image={require('../assets/wafula.jpeg')}
       />
            </View>
            <View style={styles.container}>
                <FlatList
                data={menuItems}
                keyExtractor={menuItems=>menuItems.title}
                ItemSeparatorComponent={ListItemSeparator}
                renderItem={({item})=>
              <ListItem
              title={item.title}
              ImageComponent={<Icon
              name={item.icon.name}
              backgrounColor={item.icon.backgrounColor}
              />}
              onPress={()=>navigation.navigate(item.targetScreen)}
              />
            }
                />
            </View>
            <ListItem
            title="LogOut"
            onPress={handleLogOut}
            ImageComponent={<Icon
            name="logout"
         
            />}
            
            />
        </Screen>
    )
}
const styles = StyleSheet.create({
    container:{
        marginVertical:15
    },
    screen:{
              backgroundColor:"white"
    }
})

export default   AccountScreen