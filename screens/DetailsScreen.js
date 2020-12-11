import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet , Image , Linking} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import ImageSlider from 'react-native-image-slider';
import { Divider  , Avatar, Card } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';
import TimeAgo from 'react-native-timeago';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
var currencyFormatter = require('currency-formatter')

const DetailsScreen = ({navigation, route}) => {

  // alert(JSON.stringify(route.params))
  // oke
  const news=  route.params.news

  const [images, setImages] = useState([])
  const handleImage = (anh) =>{
    var imgs = anh.trim().split(",")
    console.log(imgs.length)
    if(imgs.length==0 || anh.length==0) return ["https://image.shutterstock.com/image-vector/merchandise-line-icons-signs-set-600w-1371727865.jpg"]
    return imgs
  }
  // news.describle = `Miêu tả chi tiết sản phầm`
  
  useEffect(() => {
    setImages(handleImage(news.anh))
  },[])

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Ionicons name="md-arrow-back" size={24} color="black" onPress={()=> {navigation.goBack()}}/>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="ios-heart-empty" style={{marginHorizontal: 10}} size={24} color="black" onPress={()=> alert("Them vao tin yeu thich")}/>
            <AntDesign name="sharealt" style={{marginHorizontal: 10}} size={24} color="black" onPress={()=> alert("Chia se tin")}/>
            <Entypo name="dots-three-vertical" size={24} color="black" onPress={()=> alert("Bao cao")}/>
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
                            <Image source={{ uri: item }} style={styles.customImage} />
                        </View>
                    )}
                />
            </View>
            <View style={{marginVertical: 10}}>
              <Text style={styles.namePost}>{news.ten}</Text>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center'}}>
                    <View> 
                    <Text style={{fontSize: 16, color: 'red'}}>{currencyFormatter.format(news.giaban, { code: 'VND' })}</Text>
                      <Text><TimeAgo time={news.ngaycapnhat} /> </Text>
                    </View>
                    <TouchableOpacity onPress={()=> alert("Them vao tin yeu thich")} style={{borderColor: "red", borderRadius: 10, borderWidth: 1, padding: 5, width: 100, flexDirection: 'row',  paddingHorizontal: 10, justifyContent: 'space-between'}}>
                      <Text style={{color:'red'}}>Lưu tin</Text>
                      <Ionicons name="ios-heart-empty" size={24} color="red" />
                    </TouchableOpacity>
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
            <View style={{marginVertical: 10}}>
              <Text>
               {news.describle? `${news.describle}` :  <Text style={{color: "red", alignContent: 'center', justifyContent: "center"}}>Chưa có thông tin miêu tả</Text>}
              </Text>
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
