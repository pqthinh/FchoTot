import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import Banner from '../components/banner'

import image from '../data/banner'

const DetailsScreen = ({navigation, route}) => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Ionicons name="md-arrow-back" size={24} color="black" />
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="ios-heart-empty" style={{marginHorizontal: 10}} size={24} color="black" />
            <AntDesign name="sharealt" style={{marginHorizontal: 10}} size={24} color="black" />
            <Entypo name="dots-three-vertical" size={24} color="black" />
          </View>
        </View>
        <View style={styles.banner}>
          <Banner image={image.imageproduct} />
        </View>
        

        <Text>{JSON.stringify(route.params)}</Text>
        <Button
            title="Go to details screen...again"
            onPress={() => navigation.push("Details")}
        />
        <Button
            title="Go to home"
            onPress={() => navigation.navigate("Home")}
        />
        <Button
            title="Go back"
            onPress={() => navigation.goBack()}
        />
      </View>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header :{
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontWeight: "bold",
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    flex: 0.1
  },
  banner: {
    flex: 0.25
  },
});
