import React from 'react'
import {Text} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
// import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';
import ListProductScreen from '../screens/ListProduct';
import BookmarkScreen from '../screens/BookmarkScreen';
import StackScreenChat from './StackScreenChat'

const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
        headerShown: false
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="Details" component={DetailsScreen} />
        <HomeStack.Screen name="Chat" component={StackScreenChat} />
        <HomeStack.Screen name="Search" component={SearchScreen} />
        <HomeStack.Screen name="Bookmarks" component={BookmarkScreen} />
        <HomeStack.Screen name="ListProduct" component={ListProductScreen} />
    </HomeStack.Navigator>
);

export default  HomeStackScreen