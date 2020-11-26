import React from 'react';
import {View} from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';

// import ProfileScreen from '../screens/ProfileScreen';
import HomeStackScreen from './HomeStackScreen'
// import DetailsStackScreen from './DetailsStackScreen'
// import PostNewsScreen from '../screens/PostNewsScreen'
import SellerPostScreen from '../screens/SellerPost';
import ExploreStackScreen from './StackExploreScreen';
import PostStackScreen from './PostStackScreen';

import {LogBox} from 'react-native'
import NotificationScreen from '../screens/NotificationScreen';
LogBox.ignoreAllLogs()
LogBox.ignoreLogs(['Warning: ...']);

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      {/* Man hinh thong bao / thong bao tu server ve trang thai tin / thong bao ve tin theo doi */}
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarLabel: 'Thông báo',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      {/* Man hinh dang tin */}
      <Tab.Screen
        name="Post"
        component={PostStackScreen}
        options={{
          tabBarLabel: 'Đăng tin',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <View
              style={{
                  position: 'absolute',
                  bottom: 0, // space from bottombar
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#000'
              }}
            >
              <FontAwesome name="pencil-square-o" size={30} color={color} />
            </View>
            
          ),
        }}
      />
      {/* Man hinh trang toi ban / quan lys tin dang */}
      <Tab.Screen
        name="Profile"
        component={SellerPostScreen}
        options={{
          tabBarLabel: 'Tôi bán',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          )
        }}
      />
      {/* Man hinh trang ca nhan */}
      <Tab.Screen
        name="Explore"
        component={ExploreStackScreen}
        options={{
          tabBarLabel: 'Khám phá',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;
  