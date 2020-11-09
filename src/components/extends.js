import React from 'react';
import { StyleSheet, Image, View, Dimensions, Platform, Text, ScrollView } from 'react-native';

const platform = Platform.OS;

const Width = platform == 'web' ? Dimensions.get('window').width*0.8: Dimensions.get('window').width;
const Height = platform == 'web' ? 40 : 40;
 
const images = [
    { title: require('../../assets/images/tien-ich/luu-tru.jpg'),content: 'Tin đã lưu'},
    { title: require('../../assets/images/tien-ich/nap-tien.jpg'),content: 'Nạp tiền'},
    { title: require('../../assets/images/tien-ich/sao.jpg'),content: 'Ưu đãi'},
    { title: require('../../assets/images/tien-ich/tin-dac-biet.jpg'),content: 'Tin đặc biệt'},
    { title: require('../../assets/images/tien-ich/tin-quan-tam.jpg'),content: 'Tin quan tâm'}
];
 
export default class ExtendComponent extends React.Component {
    renderPage(image, index) {
        return (
            <View key={index} style={{  marginRight: platform=='web'? 100: 10, marginLeft: 10,  flexDirection: platform !='web' ? 'row' : '',}}>
                <View style={styles.box}>
                    <Image style={{ width: Height, height: Height, alignItems: 'center', justifyContent: 'center'}} source={image.title} />
                    <Text style={styles.text}>{image.content}</Text>
                </View>
            </View>
        );
    }
 
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {images.map((image, index) => this.renderPage(image, index))}
                </ScrollView>
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: platform == 'web' ? 1200 : '100%',
        alignItems: 'center',
        paddingLeft: platform == 'web' ? Width*0.1 : 0,
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginBottom: 5
    },
    box: {
        height: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        width: 80,
        textAlign: 'center',
        marginTop: 2,
        height: 35
    }
});