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

const DetailsScreen = ({navigation, route}) => {

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
    checkTindaluu()
  },[currentUser, checknews])
  
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
// /arrtindaluu/all?id_nguoiluutin=5
  const checkTindaluu = async () =>{
    if(!currentUser) loadUser()
    else {
      const id_nguoiluutin = currentUser.id
      if(id_nguoiluutin && id_nguoiluutin!== news.idnguoiban && !scan && !checknews) {
        const res = await axios.get(`${baseURL}/arrtindaluu/all?id_nguoiluutin=${id_nguoiluutin}`)
        var arr = res.data
        // console.log("arr" + arr)
        arr.map(x=> {
          // console.log("sakj:" +  JSON.stringify(x) + "id tin :" + news.id)
          if(x.id_tindang == news.id_tindang ) {
            console.log("tin da lưu")
            setChecknews(true) 
            return
          }
          else setChecknews(false) 
        })
      }
      setScan(true)
    }
  }
  const addToCart = async () => {
    const id_nguoiluutin = currentUser.id
    const id_tin =  news.id_tindang
    if(id_nguoiluutin && id_nguoiluutin!= news.idnguoiban && !checknews) {
      const res = await axios.post(`${baseURL}/mark`, {id_tindang: id_tin, id_nguoiluutin: id_nguoiluutin})
      alert(res.data.message)
      setChecknews(true)
    }
    else {
      loadUser()
      alert("Không thêm vào danh mục được")
    }
  }

  const reportTin = async()=>{
    // kiem tra nguoi hien tai va nguoi dang tin
    // console.log(news)
    if(currentUser.id === news.idnguoiban) {
      Alert.alert(
        "Report news",
        "Bạn muốn báo cáo tin này",
        [
          {
            text: "tin đã được bán",
            onPress: () => alert("đã báo cáo tin")
          },
          { text: "Hủy", onPress: () => alert("cancel"),
            style: "cancel"
          }
        ],
        { cancelable: false }
      )
    } else {
      Alert.alert(
        "Report news",
        "Bạn muốn báo cáo tin này",
        [
          {
            text: "Tin vi phạm",
            onPress: () => alert("Đã report vi pham")
          },
          { text: "Hủy", onPress: () => alert("cancel"),
            style: "cancel"
          }
        ],
        { cancelable: false }
      )
    }
  }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Ionicons name="md-arrow-back" size={24} color="black" onPress={()=> {navigation.goBack()}}/>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="ios-heart-empty" style={{marginHorizontal: 10}} size={24} color="black" onPress={()=> alert("Them vao tin yeu thich")}/>
            <AntDesign name="sharealt" style={{marginHorizontal: 10}} size={24} color="black" onPress={()=> alert("Chia se tin")}/>
            <Entypo name="dots-three-vertical" size={24} color="black" onPress={()=> reportTin()}/>
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

            <View style={{marginVertical: 10}}>
              <Card.Title
                title={news.name}
                subtitle="4,5 sao"
                left={(props) => <Avatar.Image size={50} source={{ uri: news.avatar}} />}
                right={(props) => 
                  <TouchableOpacity onPress={()=> alert("Xem trang ca nhan")} style={{borderColor: "#fe9900", borderRadius: 10, borderWidth: 1, padding: 5, width: 80, flexDirection: 'row',  paddingHorizontal: 2, justifyContent: 'center', marginRight: 10}}>
                    <Text style={{color:'#fe9900'}}>Xem trang</Text>
                  </TouchableOpacity>}
              />
            </View>
            <Divider />
            <View style={{marginVertical: 10, marginHorizontal: 20}}>
              <Text>
               {news.describe? `${news.describe}` :  <Text style={{color: "red", alignContent: 'center', justifyContent: "center"}}>Chưa có thông tin miêu tả</Text>}
              </Text>
              {/* <Text>{JSON.stringify(news)}</Text> */}
            </View>

          </ScrollView>
        </View>
        <View style={{flexDirection:"row" , justifyContent: 'space-between', height: 40}}>
            <TouchableOpacity style={{flexDirection: "row", backgroundColor: '#16a085',   paddingHorizontal: 10, alignItems: 'center', paddingVertical: 10}} 
              onPress={()=> Linking.openURL(`tel: ${news.mobile}`)}>
              <Ionicons name="ios-call" style={{paddingRight: 10}} size={24} color="#fff" />
              <Text style={{color: '#fff'}}>Gọi điện</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection: "row", color: '#3c763d', paddingHorizontal: 10, alignItems: 'center', paddingVertical: 10}} 
              onPress={()=> Linking.openURL(`sms: ${news.mobile}`)}>
              <FontAwesome5 name="sms" size={24} color="3c763d" style={{paddingRight: 10}}/>
              <Text style={{color: 'black'}}>Nhắn tin</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection: "row", backgroundColor: '#16a085', paddingHorizontal: 10, alignItems: 'center', paddingVertical: 10}} 
              onPress={()=> {
                alert("Chat online")
                navigation.navigate('ChatDetails', {title: `${news.name}`, phone: `${news.mobile}`, id: news.id})
              }}
            >
              <AntDesign name="wechat" style={{paddingRight: 10}} size={24} color="#fff" />
              <Text style={{color: "#fff"}}>Chat online</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
};

export default DetailsScreen;

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
