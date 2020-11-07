import React from 'react'
import {Image, View, Text, StyleSheet } from 'react-native'

const heightImage =  Platform.OS == 'android'? 70: Platform.OS == 'ios'? 60: 150
const widthCate   =  90
export default class CategoryComponent extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        return(
            <View key={this.props.cate.id} style={styles.category}>
                <Image
                    style={styles.image}
                    source={{uri: this.props.cate.image}}
                />
                <Text style={styles.titleOfImage}>{this.props.cate.name}</Text>
            </View>
        )
    }
}

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
})