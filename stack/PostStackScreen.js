import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import PostNewsScreen from '../screens/PostNewsScreen';
import DetailsScreen from '../screens/DetailsScreen'

const PostStack = createStackNavigator();

const PostStackScreen = ({navigation}) => (
    <PostStack.Navigator screenOptions={{
        headerShown: false
    }}>
        <PostStack.Screen name="Postnews" component={PostNewsScreen}/>
        <PostStack.Screen name="Preview" component={DetailsScreen}/>
    </PostStack.Navigator>
);
export default PostStackScreen