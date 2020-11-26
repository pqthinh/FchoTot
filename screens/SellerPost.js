import React from 'react'
import {ScrollView, View, Text, StyleSheet, Image} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const SellerPostScreen = ({navigation, props}) =>{
    return (
        <ScrollView>
            {/* Trang tôi bán / quản lý tin đã đang bán bao gồm cả đã duyệt và đang duyệt */}
            <AntDesign name="back" size={24} color="black" onPress={()=> navigation.goBack()} style={styles.iconExit}/>
            <View style={styles.container}>
                <View style={styles.container}>
                    <Image
                        style={{width: '100%', height: 200}}
                        source={{uri: 'https://i.pinimg.com/236x/39/93/57/399357dd099ace63be681fce3ca08730.jpg'}}
                    />
                    <Text style={{color: 'red', fontSize: 20, }}>Pham Quang Thinh</Text>
                </View>

            </View>
            <View style={styles.box}>
                <Text> Màn hình trang Tôi bán</Text>

            </View>
        </ScrollView>

    )
}

export default SellerPostScreen

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