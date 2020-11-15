import React from 'react'
import { View, Text } from 'react-native'

export default function App () {
    const [news, setNews] = React.useState([])
    React.useEffect(()=>{
        var newsList = require('./src/data/banner.json')
        // console.log(JSON.parse(newsList))
        setNews(newsList)
        console.log(newsList[0].link)
        console.log(news)
    })
    return (
        <View>
            <Text>Hello world</Text>
        </View>
    )
}
