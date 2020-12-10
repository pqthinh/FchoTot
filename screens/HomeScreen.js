import React , {useState, useEffect} from 'react'
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import axios from 'axios'

import Category from '../components/category'
import Banner from '../components/banner'
import NewsPost from '../components/NewsPost'
import ExtendComponent from '../components/extends'

import {LogBox} from 'react-native'
LogBox.ignoreAllLogs()
LogBox.ignoreLogs(['Warning: ...'])

const baseURL = "http://192.168.101.109:3000"
import image from '../data/banner'
import EmptyScreen from './emptyScreen'

const HomeScreen = ({navigation}) => {

  const { colors } = useTheme();
  const theme = useTheme();
  const [loading, setLoading] = useState(false)
  const [newsposted, setNewsposted] = useState([])
  useEffect(()=>{
    // var newsList = require('../data/tindang.json')
    // setNewsposted(newsList)
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
