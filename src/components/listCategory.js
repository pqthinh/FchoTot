import React from 'react'
import {View, Text, Image, StyleSheet, Platform , Dimensions, ScrollView} from 'react-native'
import Axios from 'axios'
import CategoryComponent from './category';

const DEVICE_WIDTH = Dimensions.get('window').width
const baseURL = "https://chotot-server.herokuapp.com"
var category = []

export default class ListCategory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categorys : category
        }
    }
    componentDidMount() {
        if(category.length==0) {
            Axios.get(`${baseURL}/category`)
            .then(
                res=>{
                    const news = res.data
                    this.setState({
                        categorys: news 
                    })
                    category = news
                    console.log("load data ok - category")
                }
            )
            .catch(err=> {console.log(err)})
        }
    }
    render() {
        return (
            <View style={styles.containerCategory}>
                <Text style={styles.categoryTitle}>Danh mục sản phẩm</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View >
                        <View style={styles.viewCategory}>
                            {this.state.categorys.map(x=> 
                                <CategoryComponent key= {x.id} cate={x}/>
                            )}
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
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