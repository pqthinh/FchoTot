import React , {useState , useEffect} from 'react';
import { View, Text, StyleSheet , ScrollView , TouchableOpacity} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'
import baseURL from '../http'
import EmptyScreen from './emptyScreen';
import ListNewsComponentRow from '../components/postHorizial'

const Tab = createMaterialTopTabNavigator();

const TinLienQuan = () =>{
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Không có thông tin</Text>
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

const NotificationScreen = ({navigation, route}) => {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Tin mới" component={TinLienQuan} />
          <Tab.Screen name="Tin đang chờ duyệt" component={TinChoDuyet} />
        </Tab.Navigator>
    );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'red'
  },
});
