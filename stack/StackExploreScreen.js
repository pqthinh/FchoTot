import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import BookmarkScreen from '../screens/BookmarkScreen';
import ExploreScreen from '../screens/ExploreScreen';
import EditInforationScreen from '../screens/EditInformationUser'
import SaveNewsScreen from '../screens/SaveNewsScreen'
import ProfileScreen from '../screens/ProfileScreen';

const ExploreStack = createStackNavigator();

const ExploreStackScreen = ({navigation}) => (
    <ExploreStack.Navigator screenOptions={{
        headerShown: false
    }}>
        <ExploreStack.Screen name="Explore" component={ExploreScreen} />
        <ExploreStack.Screen name="Bookmarks" component={BookmarkScreen} />
        <ExploreStack.Screen name="EditInfor" component={EditInforationScreen} />
        <ExploreStack.Screen name="SaveNews" component={SaveNewsScreen} />
        <ExploreStack.Screen name="Profile" component={ProfileScreen} />
    </ExploreStack.Navigator>
);
export default ExploreStackScreen