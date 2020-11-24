import React, { Component } from 'react';
import { View, Text, Button, Image, ScrollView } from 'react-native';

export default class MainScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      photos: []
    }
  }

  componentDidUpdate() {
    // console.log(this.props)
    const {params} = this.props.route.params;
    if (params) {
      const {photos} = params;
      if (photos) this.setState({photos});
      delete params.photos;
    }
    // console.log(JSON.stringify(this.props.navigation))
  }

  renderImage (item, i) {
    return (
      <Image
        style={{ height: 100, width: 100 }}
        source={{ uri: item.uri }}
        key={i}
      />
    )
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{ flex: 1 }}>
        <Button
          title="Open image browser"
          onPress={() => { navigate('image'); }}
        />
        <ScrollView>
          {this.state.photos.map((item, i) => this.renderImage(item, i))}
        </ScrollView>
        <Button
          title="Go to chat"
          onPress={()=> {navigate('chat')}} />
        <Button
          title="Go to upload image"
          onPress={()=> {navigate('upload')}} />
        <Button
          title="Go to picker image"
          onPress={()=> {navigate('picker')}} />
      </View>
    );
  }
}
