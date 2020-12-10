import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet , Image , Linking} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import ImageSlider from 'react-native-image-slider';
import { Divider  , Avatar, Card } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';

// import Banner from '../components/banner'

import image from '../data/banner'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const DetailsScreen = ({navigation, route}) => {

  // Tham so truyen vao route 
  // Sua lai trang thai tu tham so truyen vao
  
  // if(route?.params.news) {
  //   console.log(JSON.stringify(route.params.news.params.news))
  // }

  const [images, setImages] = useState([])

  useEffect(() => {
    setImages(image.imageproduct)
  })

  // console.log(images)
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
              <Text style={styles.namePost}>Bầy chó pug con thuần chủng</Text>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center'}}>
                    <View> 
                      <Text style={styles.giaBan}> 2.500.000 đ </Text>
                      <Text> 1 days ago</Text>
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
                title="Pham Quang Thinh"
                subtitle="4,5 sao"
                left={(props) => <Avatar.Image size={50} source={{ uri: "https://cdn.chotot.com/6pJ5-4igzkfRxAJTAGbhCxL_pbG0NP0I0WnUYhy89zI/preset:uac/plain/df4c09946eb6f1bd68cd13758e002c42-2693478985843707407.jpg"}} />}
                right={(props) => 
                  <TouchableOpacity onPress={()=> alert("Xem trang ca nhan")} style={{borderColor: "#fe9900", borderRadius: 10, borderWidth: 1, padding: 5, width: 80, flexDirection: 'row',  paddingHorizontal: 2, justifyContent: 'center', marginRight: 10}}>
                    <Text style={{color:'#fe9900'}}>Xem trang</Text>
                  </TouchableOpacity>}
              />
            </View>
            <Divider />
            <View style={{marginVertical: 10}}>
              <Text>
                Chó nhà tới ngày rã bầy rồi {"\n"}
                Chó con nuôi dân dã khỏi lo kén ăn nha a chị, đã chích ngừa và sổ lãi định kì. {"\n"}
                Mọi người nhanh tay tới lựa đón các bé nha {"\n"}
                Giá từ 2tr5 -3tr5 1 bé... càng nhiệt tình tới nhà xem bớt càng nhiều nha {"\n"}
              </Text>
            </View>
            <Text>{JSON.stringify(route.params)}</Text>
          </ScrollView>
        </View>
        <View style={{flexDirection:"row" , justifyContent: 'space-between', height: 40}}>
            <TouchableOpacity style={{flexDirection: "row", backgroundColor: '#16a085',   paddingHorizontal: 10, alignItems: 'center', paddingVertical: 10}} 
              onPress={()=> Linking.openURL("tel: 0866564502")}>
              <Ionicons name="ios-call" style={{paddingRight: 10}} size={24} color="#fff" />
              <Text style={{color: '#fff'}}>Gọi điện</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection: "row", color: '#3c763d', paddingHorizontal: 10, alignItems: 'center', paddingVertical: 10}} 
              onPress={()=> Linking.openURL("sms: 0866564502")}>
              <FontAwesome5 name="sms" size={24} color="3c763d" style={{paddingRight: 10}}/>
              <Text style={{color: 'black'}}>Nhắn tin</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection: "row", backgroundColor: '#16a085', paddingHorizontal: 10, alignItems: 'center', paddingVertical: 10}} 
              onPress={()=> {
                alert("Chat online")
                navigation.navigate('ChatDetails', {title: "Pham Quang Thinh", phone: "0866564502"})
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
