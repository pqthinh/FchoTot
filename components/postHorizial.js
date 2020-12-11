import React ,{ useEffect, useState }from 'react'
import {View, Text, Image, Platform, StyleSheet, ImageBackground} from 'react-native'
import TimeAgo from 'react-native-timeago';

var currencyFormatter = require('currency-formatter')

const heightImage =  120

export default function ListNewsComponentRow({news}) {
    return (
        <View style={styles.containerNewsPost}>
            <View>
                <Image
                    style={styles.image}
                    source={{uri: news.anh}}
                    title={news.ten} 
                />
                <View style={styles.count}>
                    <ImageBackground source={require('../assets/camera-clipart-7.jpg')} style={{width: 30, height: 30}}>
                        <Text style={{marginLeft: 2, color: "#C8F7C5", marginTop: 5, fontSize: 14}}>{news.anh.trim().split(",").length}</Text>
                    </ImageBackground>
                </View>
                
            </View>
            
            <View style={{margin: 5}}>
                <Text style={styles.titlePost}>{news.ten.length> 15 ? Platform.OS == 'web' ? news.ten.slice(0,18) : news.ten.slice(0,15) : news.ten}</Text>
                <Text style={{fontSize: 20, color: 'red'}}>{currencyFormatter.format(news.giaban, { code: 'VND' })}</Text>
                <Text style={{fontSize: 12, marginTop: 20}}>{news.name }</Text>
                <Text style={{fontSize: 12}}>{news.diadiem}</Text>
                <Text style={{fontSize: 12}}><TimeAgo time={news.ngayban} /></Text>
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
    count: {
        position: "absolute",
        right: 5,
        top:2,
        width: 30,
        height: 30,
    },
    titlePost: {
        fontWeight: "400",
        color: '#000',
        fontSize: 16
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
        borderWidth: 0.25, 
        borderColor: '#e0e0e0', 
        marginRight: 5, 
        marginTop: 5,
        flexDirection: 'row'
    }
})