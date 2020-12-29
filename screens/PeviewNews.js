import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet , Image , Linking , Alert} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import ImageSlider from 'react-native-image-slider';
import { Divider  , Avatar, Card } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';
import TimeAgo from 'react-native-timeago';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

import axios from 'axios'
import baseURL from '../http'

var currencyFormatter = require('currency-formatter')

const PreviewNews = ({navigation, route}) => {

    // route chưa news
    // oke // news là toàn bộ thông tin về tin đăng truyền qua route
    const news=  route.params.news
    // console.log(route.params)
    
    const [images, setImages] = useState([])
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [checknews, setChecknews] = useState(false)
    const [scan, setScan] = useState(false)

    const handleImage = (anh) =>{
        var imgs = anh.trim().split(",")
        console.log(imgs.length)
        if(imgs.length==0 || anh.length==0) return ["https://image.shutterstock.com/image-vector/merchandise-line-icons-signs-set-600w-1371727865.jpg"]
        return imgs
    }
    // news.describle = `Miêu tả chi tiết sản phầm`
    
    useEffect(() => {
        setImages(handleImage(news.anh))
        if(!currentUser) loadUser()
        // checkTindaluu()
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

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Ionicons name="md-arrow-back" size={24} color="black" onPress={()=> {navigation.goBack()}}/>
            <View style={{flexDirection: 'row'}}>
                <Ionicons name="ios-heart-empty" style={{marginHorizontal: 10}} size={24} color="black" onPress={()=> alert("Them vao tin yeu thich")}/>
                <AntDesign name="sharealt" style={{marginHorizontal: 10}} size={24} color="black" onPress={()=> alert("Chia se tin")}/>
                <Entypo name="dots-three-vertical" size={24} color="black" onPress={()=> alert("Đang ở chức nawng preview tin")}/>
            </View>
            </View>
            <View style={{flex: 1}}>
            <ScrollView>
                <View style={styles.banner}>
                <ImageSlider
                        loop
                        autoPlayWithInterval={3000}
                        images={images}
                        customSlide={({ index, item, style, width }) => (
                            <View key={index} >
                                <Image source={{ uri: item?item : "https://image.shutterstock.com/image-vector/merchandise-line-icons-signs-set-600w-1371727865.jpg" }} style={styles.customImage} />
                            </View>
                        )}
                    />
                </View>
                <View style={{marginVertical: 10}}>
                <Text style={styles.namePost}>{news.ten}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center'}}>
                    <View> 
                        <Text style={{fontSize: 16, color: 'red'}}>{currencyFormatter.format(news.giaban, { code: 'VND' })}</Text>
                        <Text style={{fontSize: 12}}><MaterialIcons name="place" size={16} color="black" />{"  " + news.diadiem}</Text>
                        <Text style={{fontSize: 12}}><Fontisto name="date" size={16} color="black" />{"  "}<TimeAgo time={news.ngaycapnhat} /></Text>
                    </View>
                        {!checknews? 
                        <TouchableOpacity onPress={()=> addToCart()} style={{borderColor: "red", borderRadius: 10, borderWidth: 1, padding: 5, width: 100, flexDirection: 'row',  paddingHorizontal: 10, justifyContent: 'space-between'}}>
                            <Text style={{color:'red'}}>Lưu tin</Text>
                            <Ionicons name="ios-heart-empty" size={24} color="red" />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={()=> alert("Tin đã được lưu")} style={{borderColor: "red", borderRadius: 10, borderWidth: 1, padding: 5, width: 100, flexDirection: 'row',  paddingHorizontal: 10, justifyContent: 'space-between', backgroundColor: 'red'}}>
                            <Text style={{color:'#fff'}}>Đã lưu</Text>
                            <Ionicons name="ios-heart-empty" size={24} color="#fff" />
                        </TouchableOpacity>}
                    </View>
                </View>
                <Divider />

                <View style={{marginVertical: 10, marginHorizontal: 20}}>
                <Text>
                {news.describe? `${news.describe}` :  <Text style={{color: "red", alignContent: 'center', justifyContent: "center"}}>Chưa có thông tin miêu tả</Text>}
                </Text>
                </View>

            </ScrollView>
            </View>
            
        </View>
    );
};

export default PreviewNews;

const styles = StyleSheet.create({
  container: {
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
  banner: {
    flex: 0.5
  },
  customImage: {
    width: 360 ,
    height: 250,
    alignItems: 'center',
    resizeMode: 'cover',
  },
  namePost: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginBottom: 10 
  },
  giaBan: {
    color: 'red'
  },
});
