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
    // alert(JSON.stringify(route))
    const header = route.params?.header || route
    const [newsposted, setNewsposted] = useState([])
    const [view, setView] = useState(false)
    const [loading, setLoading] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)
    // fetch data tin da lưu
    useEffect(()=>{
        if(!newsposted) setNewsposted([])

        if(!currentUser || typeof currentUser.id === "undefined" || currentUser.id === "undefined") {
            console.log("user dc load")
            loadUser()
        }
        if( typeof newsposted.length === "undefined" || !newsposted.length ) {
            console.log("tin dc load")
            loadPost()
        }
        // loadPost()
    },[currentUser])

    const loadUser = async () =>{
        try {
            setLoading(true)
            const jsonValue = await AsyncStorage.getItem('currentuser')
            var temp = jsonValue != null ? JSON.parse(jsonValue) : null;
            setCurrentUser(temp)
            setLoading(false)
        } catch(e) {
            console.log(e)
            setLoading(true)
        }
        
    }
    
    const loadPost = async() =>{
        setLoading(true)
        
        if(!currentUser)  loadUser()

        if(currentUser && typeof currentUser !== "undefined" && typeof currentUser.id !== "undefined") {
            console.log("current user in load post: " + currentUser.id)
            const news = await axios.get(`${baseURL}/mark?id_nguoiluutin=${currentUser?currentUser.id: 5}`)
            console.log("query db: " + `${baseURL}/mark?id_nguoiluutin=${currentUser?currentUser.id: 5}`)
            setNewsposted(news.data)
        }
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
                        <ListNewsComponent danhmuc={header} newspost={typeof newsposted !== "undefined" ? newsposted : []}  navigation={navigation} /> :
                        <View style={{marginHorizontal: 10}}> 
                            <Text>{header}</Text>
                            {   
                                (newsposted === "undefined" || newsposted.length == 0 || typeof newsposted.length === "undefined") ? <Text>Danh mục trống</Text>  :
                                newsposted?.map(x => (
                                    <TouchableOpacity key={x.id} onPress={()=> navigation.navigate("Details", {news:x})} >
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