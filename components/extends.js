import React from 'react';
import { StyleSheet, Image, View, Dimensions, Platform, Text, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const platform = Platform.OS;

const Width = platform == 'web' ? Dimensions.get('window').width*0.8: Dimensions.get('window').width;
const Height = platform == 'web' ? 40 : 40;
 
const image = [
    { title: require('../assets/images/tien-ich/luu-tru.jpg'),content: 'Tin đã lưu'},
    { title: require('../assets/images/tien-ich/nap-tien.jpg'),content: 'Nạp tiền'},
    { title: require('../assets/images/tien-ich/sao.jpg'),content: 'Ưu đãi'},
    { title: require('../assets/images/tien-ich/tin-dac-biet.jpg'),content: 'Tin đặc biệt'},
    { title: require('../assets/images/tien-ich/tin-quan-tam.jpg'),content: 'Tin quan tâm'}
];
 
const ExtendComponent = ({navigation}) => {
   
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <TouchableOpacity onPress={()=> navigation.navigate('Bookmarks')}>
                    <View style={styles.box}> 
                        <Image style={{ width: Height, height: Height, alignItems: 'center', justifyContent: 'center'}} source={image[0].title} />
                        <Text style={styles.text}>{image[0].content}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('Details')}>
                    <View style={styles.box}> 
                        <Image style={{ width: Height, height: Height, alignItems: 'center', justifyContent: 'center'}} source={image[1].title} />
                        <Text style={styles.text}>{image[1].content}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('Details')}>
                    <View style={styles.box}> 
                        <Image style={{ width: Height, height: Height, alignItems: 'center', justifyContent: 'center'}} source={image[2].title} />
                        <Text style={styles.text}>{image[2].content}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('Details')}>
                    <View style={styles.box}> 
                        <Image style={{ width: Height, height: Height, alignItems: 'center', justifyContent: 'center'}} source={image[3].title} />
                        <Text style={styles.text}>{image[3].content}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('Details')}>
                    <View style={styles.box}> 
                        <Image style={{ width: Height, height: Height, alignItems: 'center', justifyContent: 'center'}} source={image[4].title} />
                        <Text style={styles.text}>{image[4].content}</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}
export default ExtendComponent
 
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
        alignItems: 'center',
        marginHorizontal: 10
    },
    text: {
        width: 80,
        textAlign: 'center',
        marginTop: 2,
        height: 35
    }
});