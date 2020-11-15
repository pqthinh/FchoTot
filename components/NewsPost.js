import React from 'react'
import { useEffect, useState } from 'react';
import {View, Text, Image, Platform, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import TimeAgo from 'react-native-timeago';
var currencyFormatter = require('currency-formatter')

const heightImage =  Platform.OS == 'android'? 150: Platform.OS == 'ios'? 120: 180

export default function ListNewsComponent({navigation}) {
    const [newsposted, setNewsposted] = useState([])
    useEffect(()=>{
        var newsList = require('../data/tindang.json')
        setNewsposted(newsList)
    })
    return (
        <View style={styles.containerNewsPost}>
            <Text style={styles.DivTitle}>Các tin đã đăng gần đây</Text>
            <View style={styles.viewNewsPosted}>
                {newsposted.map( (news, index) => 
                    
                    <TouchableOpacity key={index} onPress={()=> navigation.navigate("Details", {params: {id: news.id_tindang, name: news.ten}})} >
                        <View style={{borderWidth: 0.25, borderColor: '#e0e0e0', marginRight: 5, marginTop: 5}}>
                            <Image
                                style={styles.image}
                                source={{uri: news.anh}}
                                title={news.ten} 
                            />
                            <View style={{margin: 5}}>
                                <Text style={styles.titleOfImage}>{news.ten.length> 15 ? Platform.OS == 'web' ? news.ten.slice(0,18) : news.ten.slice(0,15) : news.ten}</Text>
                                <Text style={{fontSize: 12}}>{currencyFormatter.format(news.giaban, { code: 'VND' })}</Text>
                                <Text style={{fontSize: 12}}>{news.idnguoiban == 1 ? "Pham quang thinh" : "admin" }</Text>
                                <Text style={{fontSize: 12}}>{news.diadiem}</Text>
                                <Text style={{fontSize: 12}}><TimeAgo time={news.ngayban} /></Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: heightImage,
        height: heightImage,
        overflow: "hidden",
        padding: 5,
        margin: 5
    },
    titleOfImage: {
        fontWeight: "400",
        color: '#000',
        fontSize:Platform.OS == 'web'? wp('1.5%') : 16
    },
    viewNewsPosted:{
        alignContent: 'center',
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center"
    },
    DivTitle: {
        fontSize: 16,
        marginLeft: Platform.OS == 'web'? 20:10 ,
        marginTop: 10,
        marginBottom: 10,
        fontWeight: "600"
    },
    containerNewsPost: {
        backgroundColor: '#fff',
        marginTop: 10,
        width: Platform.OS=='web'? 1000 : '100%'
    }
})