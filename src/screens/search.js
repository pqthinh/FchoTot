import React from 'react'
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native'

const DEVICE_WIDTH = Dimensions.get('window').width
const DEVICE_HEIGHT = Dimensions.get('window').height

export default class SearchScreen extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <Image  style={styles.image} source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEX/ZgAqRcUWAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII='}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT - 50
    }
})