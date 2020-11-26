import React from 'react';
import { StyleSheet, View, Image, Dimensions, Text} from 'react-native';
import ImageSlider from 'react-native-image-slider';

const DEVICE_WIDTH = Dimensions.get('window').width

export default function BannerComponent ({image}){
    const [images, setImages] = React.useState([])
    // alert(image)
    React.useEffect(()=> {
        setImages(image)
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
        height: 150,
        alignItems: 'center',
        resizeMode: 'cover'
    },
});