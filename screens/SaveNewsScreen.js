import React , {useState, useEffect} from 'react'
import {ScrollView, View, Text, StyleSheet, Image} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import ListNewsComponent from '../components/NewsPost';

const SaveNewsScreen = ({navigation, route}) =>{
    const [newsposted, setNewsposted] = useState([])
    useEffect(()=>{
        var newsList = require('../data/tindang.json')
        setNewsposted(newsList)
    })
    return (
        <ScrollView>
            {/* Man hinh tin dang da luu / kham pha */}
            <AntDesign name="back" size={24} color="black" onPress={()=> navigation.goBack()} style={styles.iconExit}/>
            <View style={styles.container}>
                {/* <View style={styles.container}>
                    <Image
                        style={{width: '100%', height: 200}}
                        source={{uri: 'https://i.pinimg.com/236x/39/93/57/399357dd099ace63be681fce3ca08730.jpg'}}
                    />
                    <Text style={{color: 'red', fontSize: 20, }}>Pham Quang Thinh</Text>
                </View> */}
                <ListNewsComponent danhmuc={"Tin đăng đã lưu" } newspost={newsposted}  navigation={navigation} />
            </View>
            <View style={styles.box}>
                <Text>{JSON.stringify(route.params)}</Text>
            </View>
        </ScrollView>

    )
}

export default SaveNewsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    box: {
        height: 100
    },
    iconExit: {
        position: 'absolute',
        left: 2,
        top: 2
    }
})