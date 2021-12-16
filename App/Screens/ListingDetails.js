import React from 'react'
import { View, Text,StyleSheet, Image } from 'react-native'


import ListItem from "../Componets/ListItem"
export default function ListingDetails({route}) {
    const list=route.params
    return (
        <View>
            <Image style={styles.image} source={require('../assets/pic17.jpg')}/>
            <View style={styles.detailContainer}>
                <Text style={styles.title}>{list.title}</Text>
                <Text style={styles.price}>${list.price}</Text>
                 <View style={styles.userr}>
                <ListItem  
                image={require("../assets/denis.jpg")}
                title="Wafula Denis"
                subtitle="1 listing"
                />
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:300
    },
    detailContainer:{
       padding:20
    },
    title:{
        fontSize:25,
        fontWeight:"500"
    },
    price:{
        fontSize:20,
        fontWeight:"bold",
        color:"blue",
        marginVertical:1

    },
    userr:{
        marginVertical:25
    }
})

