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
      // <View style={styles.container}>
      //   <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
      //   <Text style={{color: colors.text}}>Home Screen</Text>
      //   <Button
      //     title="Go to details screen"
      //     onPress={() => navigation.navigate("Details")}
      //   />
      // </View>
      <ScrollView>
        <View style={styles.container}>
          <Banner />
          <ExtendComponent navigation={navigation}/>
          {/* <SearchScreen /> */}
          <Category />
          <NewsPost />
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
