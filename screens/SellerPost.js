import React , {useState , useEffect} from 'react';
import { View, Text, StyleSheet , ScrollView , TouchableOpacity} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'
import baseURL from '../http'
import EmptyScreen from './emptyScreen';
import ListNewsComponentRow from '../components/postHorizial'

const Tab = createMaterialTopTabNavigator();

const TatCaTin = ({navigation}) =>{
  const [newsposted, setNewsposted] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  // fetch data tin da lưu
  useEffect(()=>{
      if(!newsposted) setNewsposted([])

      if(!currentUser || typeof currentUser.id === "undefined" || currentUser.id === "undefined") {
          loadUser()
      }
      if( typeof newsposted.length === "undefined" || !newsposted.length ) {
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
          console.log("current user id: " + currentUser.id)
          const news = await axios.get(`${baseURL}/search?owner=${currentUser?currentUser.id: 5}`)
          setNewsposted(news.data)
          console.log("Số lượng tin: " + news.data.length)
      }
      setLoading(false)
    }
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 16, fontWeight: "bold", margin: 10}}>Tất cả các tin đã đăng</Text>
      {
        loading? 
          <EmptyScreen/>
        :
        
        <ScrollView>
          <View style={{marginHorizontal: 10}}> 
              {   
                  (newsposted === "undefined" || newsposted.length == 0 || typeof newsposted.length === "undefined") ? <Text>Danh mục trống</Text>  :
                  newsposted?.map(x => (
                      <TouchableOpacity key={x.id} onPress={()=> navigation.navigate("Details", {news:x})} >
                          <ListNewsComponentRow news={x} />
                      </TouchableOpacity>
                  ))
              }
          </View>
        </ScrollView>
      }
    </View>
    
  )
}
const TinChoDuyet = ({navigation}) =>{ 
  const [newsposted, setNewsposted] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  // fetch data tin da lưu
  useEffect(()=>{
      if(!newsposted) setNewsposted([])

      if(!currentUser || typeof currentUser.id === "undefined" || currentUser.id === "undefined") {
          loadUser()
      }
      if( typeof newsposted.length === "undefined" || !newsposted.length ) {
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
          const news = await axios.get(`${baseURL}/search?owner=${currentUser?currentUser.id: 5}&state=1`)
          setNewsposted(news.data)
          console.log("Đang chờ duyệt: " + news.data.length)
      }
      setLoading(false)
    }
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 16, fontWeight: "bold", margin: 10}}>Tất cả các tin đã đăng</Text>
      {
        loading? 
          <EmptyScreen/>
        :
        
        <ScrollView>
          <View style={{marginHorizontal: 10}}> 
              {   
                  (newsposted === "undefined" || newsposted.length == 0 || typeof newsposted.length === "undefined") ? <Text>Danh mục trống</Text>  :
                  newsposted?.map(x => (
                      <TouchableOpacity key={x.id} onPress={()=> navigation.navigate("Details", {news:x})} >
                          <ListNewsComponentRow news={x} />
                      </TouchableOpacity>
                  ))
              }
          </View>
        </ScrollView>
      }
    </View>
    
  )
}
const TinDangBan = ({navigation}) =>{ 
  const [newsposted, setNewsposted] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  // fetch data tin da lưu
  useEffect(()=>{
      if(!newsposted) setNewsposted([])

      if(!currentUser || typeof currentUser.id === "undefined" || currentUser.id === "undefined") {
          loadUser()
      }
      if( typeof newsposted.length === "undefined" || !newsposted.length ) {
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
          const news = await axios.get(`${baseURL}/search?owner=${currentUser?currentUser.id: 5}&state=2`)
          setNewsposted(news.data)
          console.log("Tin đang bán: " + news.data.length)
      }
      setLoading(false)
    }
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 16, fontWeight: "bold", margin: 10}}>Tất cả các tin đã đăng</Text>
      {
        loading? 
          <EmptyScreen/>
        :
        
        <ScrollView>
          <View style={{marginHorizontal: 10}}> 
              {   
                  (newsposted === "undefined" || newsposted.length == 0 || typeof newsposted.length === "undefined") ? <Text>Danh mục trống</Text>  :
                  newsposted?.map(x => (
                      <TouchableOpacity key={x.id} onPress={()=> navigation.navigate("Details", {news: x})} >
                          <ListNewsComponentRow news={x} />
                      </TouchableOpacity>
                  ))
              }
          </View>
        </ScrollView>
      }
    </View>
    
  )
}
const TinDaBan = ({navigation}) =>{ 
  const [newsposted, setNewsposted] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  // fetch data tin da lưu
  useEffect(()=>{
      if(!newsposted) setNewsposted([])

      if(!currentUser || typeof currentUser.id === "undefined" || currentUser.id === "undefined") {
          loadUser()
      }
      if( typeof newsposted.length === "undefined" || !newsposted.length ) {
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
          const news = await axios.get(`${baseURL}/search?owner=${currentUser?currentUser.id: 5}&state=3`)
          setNewsposted(news.data)
          console.log("Đang đã bán: " + news.data.length)
      }
      setLoading(false)
    }
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 16, fontWeight: "bold", margin: 10}}>Tất cả các tin đã đăng</Text>
      {
        loading? 
          <EmptyScreen/>
        :
        
        <ScrollView>
          <View style={{marginHorizontal: 10}}> 
              {   
                  (newsposted === "undefined" || newsposted.length == 0 || typeof newsposted.length === "undefined") ? <Text>Danh mục trống</Text>  :
                  newsposted?.map(x => (
                      <TouchableOpacity key={x.id} onPress={()=> navigation.navigate("Details", {news: x})} >
                          <ListNewsComponentRow news={x} />
                      </TouchableOpacity>
                  ))
              }
          </View>
        </ScrollView>
      }
    </View>
    
  )
}

const SellerPostScreen = ({navigation, route}) => {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Tất cả" component={TatCaTin} />
          <Tab.Screen name="Đang bán" component={TinDangBan} />
          <Tab.Screen name="Chờ duyệt" component={TinChoDuyet} />
          <Tab.Screen name="Đã bán" component={TinDaBan} />
        </Tab.Navigator>
    );
};



export default SellerPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'red'
  },
});
