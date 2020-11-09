import React from 'react';
import { StyleSheet, View, Image, Dimensions} from 'react-native';
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

export default class BannerComponent extends React.Component{
    constructor(props) {
        super(props)
        this.state= {
            images : image
        }
    }

    componentDidMount() {
        if(image.length==0) {
            const fetchData = async () => {
                const response = await fetch('https://chotot-server.herokuapp.com/banner')
                const data = await response.json()
                return data
            }
            
            const printData = async () => {
                try {
                    const data = await fetchData()
                    image= data.length > 0  ? data.map( (x) =>{ return x.link }) : 
                    console.log("load data ok - banner" + '\n' + image)
                    this.setState({images: image})
                } catch (error) {
                    console.error('Problem', error)
                }
            }
            printData()
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageSlider
                    loop
                    autoPlayWithInterval={3000}
                    images={this.state.images}
                    onPress={({ index }) => alert(index)}
                    customSlide={({ index, item, style, width }) => (
                        <View key={index} >
                            <Image source={{ uri: item }} style={styles.customImage} />
                        </View>
                    )}
                />
            </View>
        );
    }
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