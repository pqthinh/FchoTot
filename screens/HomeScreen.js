import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

import Category from '../components/category';
import Banner from '../components/banner'
import NewsPost from '../components/NewsPost'
import SearchScreen from './SearchScreen';
import ExtendComponent from '../components/extends';

const HomeScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();
  
    return (
      <ScrollView>
        <View style={styles.container}>
          <Banner />
          <ExtendComponent navigation={navigation} />
          <Category navigation={navigation} />
          <NewsPost navigation={navigation} />
        </View>
      </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#dff2e7'
  },
});
