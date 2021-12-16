import React,{useState}from 'react'
import { View, Button,Text ,StyleSheet,Platform} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TextInput } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native'
import { Modal,FlatList } from 'react-native'
import Screen from  './Screen'
import PickerItems from  './PickerItems'
export default function AppPicker({placeholder,icon,items,
    PickerItemComponent=PickerItems,
    numberOfColumns=1,
    onSelectItem,selectedItem,...otherProps}) {
    const [modalVisible,setModalVisible]=useState(false)
    return (
        <React.Fragment>
        <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
        <View style={styles.container}>
         {icon &&   <MaterialCommunityIcons  
           style={styles.icon}
           size={20}
           color="#6e6969"
            name={icon} />}
            {selectedItem?<Text  style={styles.text}>{selectedItem.label}</Text>:<Text style={styles.placeholder}>{placeholder}</Text>}
            
            <MaterialCommunityIcons  
           size={20}
           color="#6e6969"
            name="chevron-down"/>
        </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
            <Screen>
            <Button title="close" onPress={()=>setModalVisible(false)}/>
            <FlatList
            numColumns={numberOfColumns}
            data={items}
            keyExtractor={item=>item.value.toString()}
            renderItem={({item})=>
                            <PickerItemComponent
                            item={item}
                            label={item.label}
                            onPress={()=>{
                                setModalVisible(false)
                                onSelectItem(item)
                            }}
                            />
        } 
            />
            </Screen>
           
        </Modal>
        </React.Fragment>//or use <> </> on dis line
    )
}

const styles = StyleSheet.create({
        container:{
            backgroundColor:"lightgray",
            borderRadius:25,
            flexDirection:"row",
            width:"100%",
            marginVertical:10,
            padding:15
        },
        text:{
            flex:1,
            color:"black",
            // fontSize:18,
            fontFamily:Platform.OS==="android"?"Roboto":"Avenir"

        },

        icon:{
            marginRight:10
        },
        placeholder:{
            color:"black",
            flex:1
        }
})