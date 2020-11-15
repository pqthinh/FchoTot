import React, {useState, useEffect} from 'react'
import {Image, View, Text, StyleSheet, Dimensions, Platform, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const heightImage =  Platform.OS == 'android'? 70: Platform.OS == 'ios'? 60: 150
const widthCate   =  90
const DEVICE_WIDTH = Dimensions.get('window').width

export default function Category({navigation}) {
    const [categorys, setCategorys] = useState([])
    useEffect(()=>{
        var newsList = require('../data/category.json')
        setCategorys(newsList)
    })
    return (
        <View style={styles.containerCategory}>
            <Text style={styles.categoryTitle}>Danh mục sản phẩm</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View >
                    <View style={styles.viewCategory}>
                        {categorys.map(x=> 
                            // <CategoryComponent key= {x.id} navigation={navigation} cate={x}/>
                            <TouchableOpacity 
                            onPress={(navigation) => navigation.navigate('HomeStack', { screen: 'Details' })}
                            key={x.id}
                            >
                                <View style={styles.category}>
                                    <Image
                                        style={styles.image}
                                        source={{uri: x.image}}
                                    />
                                    <Text style={styles.titleOfImage}>{x.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

// const CategoryComponent = ({navigation,cate}) => {
//     return(
//         <TouchableOpacity 
//         onPress={() => navigation.navigate("Details")}
//         >
//             <View key={cate.id} style={styles.category}>
//                 <Image
//                     style={styles.image}
//                     source={{uri: cate.image}}
//                 />
//                 <Text style={styles.titleOfImage}>{cate.name}</Text>
//             </View>
//         </TouchableOpacity>
//     )
// }

const styles = StyleSheet.create({
    category: {
        margin: 5,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        width: widthCate
    },
    titleOfImage: {
        textAlign: "center",
        fontWeight: "400",
        fontSize: 12,
        height: 40,
        marginTop: 5
    },
    image: {
        width: heightImage,
        height: heightImage
    },
    viewCategory:{
        alignContent: 'center',
        flexWrap: "wrap",
        flexDirection: "column",
        margin: DEVICE_WIDTH < 600 ? 10: 0,
        justifyContent: "center",
    },
    categoryTitle: {
        fontSize: 16,
        marginLeft: 10 ,
        marginTop: 10,
        fontWeight: "600"
    },
    containerCategory: {
        backgroundColor: '#fff',
        maxWidth: DEVICE_WIDTH,
        height: 320,
        marginTop: 5
    }
})