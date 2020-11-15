import React from 'react';
import { ScrollView,  View, SafeAreaView } from 'react-native';
import BannerComponent from '../components/banner';
import ExtendComponent from '../components/extends';
import HeaderComponent from '../components/header';
import ListCategory from '../components/listCategory';
import NewsComponent from '../components/listNewsPosted';

export default function Home() {
  return (
    <SafeAreaView >
      <View style={{flex:1, backgroundColor: '#f0f0f0'}}>
        {/* <HeaderComponent /> */}
        {/* <BannerComponent /> */}
        {/* <ExtendComponent />
        <ListCategory /> */}
        <NewsComponent />
      </View>
    </SafeAreaView >  
  );
}
