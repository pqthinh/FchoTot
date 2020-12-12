import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import SaveNewsScreen from './SaveNewsScreen';

const BookmarkScreen = ({navigation, route}) => {
    return (
      <SaveNewsScreen navigation={navigation} route= {"Tin đăng đã lưu"}/>
    );
};

export default BookmarkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
