import React , {useState, useEffect} from 'react'
import {ScrollView, View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'
import baseURL from '../http'

import ListNewsComponent from '../components/NewsPost';
import ListNewsComponentRow from '../components/postHorizial'
import EmptyScreen from './emptyScreen'

const SaveNewsScreen = ({navigation, route}) =>{
    const header = route.params.header
    const [newsposted, setNewsposted] = useState([])
    const [view, setView] = useState(false)
    const [currentUser, setCurrentUser] = useState({})
    const [loading, setLoading] = useState(false)
    useEffect(()=> {
        const id = setInterval(() => 
            AsyncStorage.getItem('currentuser', (errs, res)=>{
                if (!errs) {
                    if (res !== null) {
                        setCurrentUser(JSON.parse(res))
                    }
                }
            })
        , 15000);
        return () => clearInterval(id);  
    },[])
    // fetch data tin da lưu
    useEffect(()=>{
        const id = setInterval(() => 
            loadPost()
        , 10000);
        return () => clearInterval(id);  
    },[])
    console.log("test user " + JSON.stringify(currentUser))
    console.log("test tin " + JSON.stringify(newsposted))
    const loadPost = async () =>{
        setLoading(true)
        const news = await axios.get(`${baseURL}/mark?id_nguoiluutin=${currentUser.id}`)
        await setNewsposted(news.data)
        console.log("So luong tin yeu thich: " + news.data.length)
        setLoading(false)
      }
    return (
        <View style={styles.container}>
            {/* Man hinh tin dang da luu / kham pha */}
            <View style={styles.header}>
                <Ionicons name="md-arrow-back" size={24} color="black" onPress={()=> {navigation.goBack()}}/>
                <Text style={{fontWeight: "bold", size: 16}}> {header} </Text>
                <View style={{flexDirection: 'row'}}>
                    {view ? 
                        <MaterialCommunityIcons name="view-grid" style={{marginHorizontal: 10}} size={24} color="black" onPress={()=> setView(!view)}/>:
                        <MaterialCommunityIcons name="view-list" style={{marginHorizontal: 10}} size={24} color="black" onPress={()=> setView(!view)} />
                    }
                    <AntDesign name="sharealt" style={{marginHorizontal: 10}} size={24} color="black" onPress={()=> alert("Chia se tin")}/>
                    <Entypo name="dots-three-vertical" size={24} color="black" onPress={()=> alert("Bao cao")}/>
                </View>
            </View>
            
            <View style={styles.body}>
                {loading? <EmptyScreen /> :
                <ScrollView>
                    {view?
                        <ListNewsComponent danhmuc={header} newspost={newsposted}  navigation={navigation} /> :
                        <View style={{marginHorizontal: 10}}> 
                            <Text>{header}</Text>
                            
                        {
                            newsposted.length == 0 ? <Text>Danh mục trống</Text>  :
                            newsposted.map(x => (
                                <TouchableOpacity key={x.id} onPress={()=> navigation.navigate("Details", {x})} >
                                    <ListNewsComponentRow news={x} />
                                </TouchableOpacity>
                            ))
                        }
                        </View>
                    }
                </ScrollView>
                }
            </View>

        </View>

    )
}

export default SaveNewsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },container: {
        flex: 1,
    },
    header :{
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontWeight: "bold",
        paddingHorizontal: 20,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        flex: 0.1
    },
    body: {
        flex: 1
    }
})