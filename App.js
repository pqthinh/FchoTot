import React from 'react'
import { View } from 'react-native'
import ChatsListScreen from './screens/chat'
export default class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <ChatsListScreen />
            </View>
        )
    }
}
