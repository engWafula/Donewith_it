import React ,{useState,useEffect} from 'react'
import { View, Text,FlatList,StyleSheet,Button ,ActivityIndicator} from 'react-native'
import Screen from  '../Componets/Screen'
import Card  from  '../Componets/Card'
import ListingsApi from '../api/listings'
import { useDispatch, useSelector } from 'react-redux'
import { loadBugs ,resolveBug} from '../store/bugs'

export default function ListingsScreen({navigation}) {
    const dispatch = useDispatch()
    const bugs = useSelector(state=> state.entities.bugs.list)

    useEffect(()=>{
   dispatch(loadBugs())
    },[])
    const[listings,setListings]=useState([])
    const [error,setError] = useState(false)
     const  [loading,setLoading]=useState(false)
    
    useEffect(() => {
     loadListings();
       
    }, [])

    const loadListings= async()=>{
        setLoading(true)
        const response= await ListingsApi.getListings()
        setLoading(false)
        if(!response.ok)
        return setError(true)
        setError(false)
        setListings(response.data)
       }


    return (
        <Screen style={styles.screen}>
            {
                error && <>
                <Text>Could not retrieve listings</Text>
                <Button title="Retry" onPress={bugs}/>
                </>
            }
            <ActivityIndicator animating={true} size="large"/>
            <FlatList
            data={listings}
            keyExtractor={listings=>listings.id.toString()}
            renderItem={({item})=>
            <Card
            title={item.title}
            subTitle={"$"+ item.price}
            onPress={()=>navigation.navigate("ListingDetails",item)}
            imageUrl={item.images[0].url}
            />
        }
            />
        </Screen>
    )
}
  


const styles = StyleSheet.create({
    screen:{
        padding:20,
        backgroundColor: 'lightgray'
    }
})
