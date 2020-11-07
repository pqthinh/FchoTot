import React from 'react'
import {View, Text, StyleSheet, Platform , Dimensions} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Axios from 'axios';
import NewComponent from './itemNews';

const WIDTH = Dimensions.get('window').width;
const baseURL = "https://chotot-server.herokuapp.com"

export default class NewsComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newsposted : []
        }
    }

    componentDidMount() {
        Axios.get(`${baseURL}/tindang`)
        .then(
            res=>{
                console.log(res.data)
                const news = res.data
                this.setState({
                newsposted: news 
                })
                console.log(this.state.newsposted)
            }
        )
        .catch(err=> {console.log(err)})
    }

    render() {
        return (
            <View style={styles.containerNewsPost}>
                <Text style={styles.DivTitle}>Các tin đã đăng gần đây</Text>
            
                <View style={styles.viewNewsPosted}>
                    {this.state.newsposted.map( x => 
                        <NewComponent new={x} key={x.id_tindang}/>
                    )}
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewNewsPosted:{
        alignContent: 'center',
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        // marginLeft: WIDTH < 600 ? 10: 5,
        // marginTop: 10
    },
    DivTitle: {
        fontSize: 16,
        marginLeft: Platform.OS == 'web'? 20:10 ,
        marginTop: 10,
        marginBottom: 10,
        fontWeight: "600"
    },
    containerNewsPost: {
        backgroundColor: '#fff',
        marginTop: 10,
        width: Platform.OS=='web'? 1000 : '100%'
    }
})