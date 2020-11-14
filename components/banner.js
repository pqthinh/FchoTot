import React from 'react';
import { StyleSheet, View, Image, Dimensions, Text} from 'react-native';
import ImageSlider from 'react-native-image-slider';

const DEVICE_WIDTH = Dimensions.get('window').width
var image = [
            'https://static.chotot.com.vn/storage/admin-centre/buyer_collection_y_homepage_banner/buyer_collection_y_homepage_banner_1604215051398.jpg',
            'https://static.chotot.com.vn/storage/admin-centre/buyer_collection_y_homepage_banner/buyer_collection_y_homepage_banner_1600743091481.jpg',
            'https://static.chotot.com.vn/storage/admin-centre/buyer_collection_y_homepage_banner/buyer_collection_y_homepage_banner_1603251858399.jpg',
            'https://static.chotot.com.vn/storage/admin-centre/buyer_collection_y_homepage_banner/buyer_collection_y_homepage_banner_1600743091481.jpg',
            'https://static.chotot.com.vn/storage/admin-centre/buyer_collection_y_homepage_banner/buyer_collection_y_homepage_banner_1604657813416.jpg',
            'https://static.chotot.com.vn/storage/admin-centre/buyer_collection_y_homepage_banner/buyer_collection_y_homepage_banner_1604215051398.jpg',
            'https://static.chotot.com.vn/storage/admin-centre/buyer_collection_y_homepage_banner/buyer_collection_y_homepage_banner_1600743091481.jpg',
            'https://static.chotot.com.vn/storage/admin-centre/buyer_collection_y_homepage_banner/buyer_collection_y_homepage_banner_1603251858399.jpg',
            'https://static.chotot.com.vn/storage/admin-centre/buyer_collection_y_homepage_banner/buyer_collection_y_homepage_banner_1600743091481.jpg',
            'https://static.chotot.com.vn/storage/admin-centre/buyer_collection_y_homepage_banner/buyer_collection_y_homepage_banner_1604657813416.jpg'
        ]
export default function BannerComponent (){
    const [images, setImages] = React.useState([])
    React.useEffect(()=> {
        // var image =  require('../data/banner.json')
        setImages(image)
        // console.log(images)
    })
    return (
        <View style={styles.container}>
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
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'tomato',
    },
    customImage: {
        width: DEVICE_WIDTH ,
        height: 130,
        alignItems: 'center',
        resizeMode: 'cover'
    },
});