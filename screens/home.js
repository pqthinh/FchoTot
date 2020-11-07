import React from 'react';
import { ScrollView,  View } from 'react-native';
import BannerComponent from '../components/banner';
import ExtendComponent from '../components/extends';
import HeaderComponent from '../components/header';
import ListCategory from '../components/listCategory';
import NewsComponent from '../components/listNewsPosted';

export default function Home() {
  return (
    <ScrollView>
      <View style={{flex:1, backgroundColor: '#f0f0f0'}}>
        <HeaderComponent />
        <BannerComponent />
        <ExtendComponent />
        <ListCategory />
        <NewsComponent />
      </View>
    </ScrollView>  
  );
}
