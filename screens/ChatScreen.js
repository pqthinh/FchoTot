import { GiftedChat } from 'react-native-gifted-chat'
import React from 'react'
import {LogBox, StyleSheet, View, Text} from 'react-native'

LogBox.ignoreAllLogs()
LogBox.ignoreLogs(['Warning: '])

export default class ChatDetailsScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Start chat ... ',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
        <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60
  }
})