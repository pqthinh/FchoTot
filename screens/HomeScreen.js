import React , {useState, useEffect} from 'react'
import { View, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import axios from 'axios'

import Category from '../components/category'
import Banner from '../components/banner'
import NewsPost from '../components/NewsPost'
import ExtendComponent from '../components/extends'
import baseURL from '../http'
import image from '../data/banner'
import EmptyScreen from './emptyScreen'

import {LogBox} from 'react-native'
LogBox.ignoreAllLogs()
LogBox.ignoreLogs(['Warning: ...'])


const HomeScreen = ({navigation}) => {

  const { colors } = useTheme();
  const theme = useTheme();
  const [loading, setLoading] = useState(false)
  const [newsposted, setNewsposted] = useState([])
  useEffect(()=>{
    loadPost()
  },[])

  const loadPost = async () =>{
    setLoading(true)
    const news = await axios.get(`${baseURL}/tindang`)
    console.log(news.data.length)
    await setNewsposted(news.data)
    setLoading(false)
  }
    return (
      <ScrollView>
        <View style={styles.container}>
          <Banner image={image.imagebanner}/>
          <ExtendComponent navigation={navigation} />
          <Category navigation={navigation} />
          {loading? <EmptyScreen /> :
            <NewsPost navigation={navigation} newspost={newsposted} danhmuc={"Các tin đã đăng gần đây"}/>
          }
        </View>
      </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#dff2e7'
  },
})
