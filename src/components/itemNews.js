import React from 'react'
import {View, Text, Image, Platform, StyleSheet} from 'react-native'
import TimeAgo from 'react-native-timeago';
var currencyFormatter = require('currency-formatter')

const heightImage =  Platform.OS == 'android'? 150: Platform.OS == 'ios'? 120: 180

export default class NewComponent extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={{borderWidth: 0.25, borderColor: '#e0e0e0', marginRight: 5, marginTop: 5}} key={this.props.new.id}>
                <Image
                    style={styles.image}
                    source={{uri: this.props.new.anh}}
                    title={this.props.new.ten} 
                />
                <View style={{margin: 5}}>
                    <Text style={styles.titleOfImage}>{this.props.new.ten.length> 15 ? Platform.OS == 'web' ? this.props.new.ten.slice(0,18) : this.props.new.ten.slice(0,15) : this.props.new.ten}</Text>
                    <Text style={{fontSize: 12}}>{currencyFormatter.format(this.props.new.giaban, { code: 'VND' })}</Text>
                    <Text style={{fontSize: 12}}>{this.props.new.idnguoiban == 1 ? "Pham quang thinh" : "admin" }</Text>
                    <Text style={{fontSize: 12}}>{this.props.new.diadiem}</Text>
                    <Text style={{fontSize: 12}}><TimeAgo time={this.props.new.ngayban} /></Text>
                </View>
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    image: {
        width: heightImage,
        height: heightImage,
        overflow: "hidden",
        padding: 5,
        margin: 5
    },
    titleOfImage: {
        fontWeight: "400",
        color: '#000',
        fontSize:Platform.OS == 'web'? wp('1.5%') : 16
    }
})