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

import {LogBox} from 'react-native'
import ChatDetailsScreen from '../screens/ChatScreen';

LogBox.ignoreAllLogs()
LogBox.ignoreLogs(['Warning: ...']);

const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
        headerShown: false
    }}>
        {/* Trang chu */}
        <HomeStack.Screen name="Home" component={HomeScreen} />
        {/* Trang  xem chi tiet san pham */}
        <HomeStack.Screen name="Details" component={DetailsScreen} />
        {/* Man hinh chat */}
        <HomeStack.Screen name="Chat" component={StackScreenChat} />
        {/* Giao dien trang tim kiem */}
        <HomeStack.Screen name="Search" component={SearchScreen} />
        {/* Quan ly tin da luu */}
        <HomeStack.Screen name="Bookmarks" component={BookmarkScreen} />
        {/* Trang xem danh sach san pham */}
        <HomeStack.Screen name="ListProduct" component={ListProductScreen} />
        {/* Tu rtanf xem chi tiet san pham chuyen ve trang chat */}
        <HomeStack.Screen name="ChatDetails" component={ChatDetailsScreen} />
    </HomeStack.Navigator>
);

export default  HomeStackScreen