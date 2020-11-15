import React from 'react'
import {ScrollView, View, Text, StyleSheet, Image} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const PostNewsScreen = ({navigation, props}) =>{
    return (
        <ScrollView>
            <AntDesign name="back" size={24} color="black" onPress={()=> navigation.goBack()} style={styles.iconExit}/>
            <Text style={styles.container}> Man hinh dang tin</Text>
            <View >
                <View style={styles.container}>
                    <Image
                        style={{width: '100%', height: 200}}
                        source={{uri: 'https://i.pinimg.com/236x/39/93/57/399357dd099ace63be681fce3ca08730.jpg'}}
                    />
                    <Text style={{color: 'red', fontSize: 20, }}>Pham Quang Thinh</Text>
                </View>

            </View>
            <View style={styles.box}>
                <Text> Product 2</Text>

            </View>
        </ScrollView>

    )
}

export default PostNewsScreen

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