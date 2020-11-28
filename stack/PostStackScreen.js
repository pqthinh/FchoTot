import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import PostNewsScreen from '../screens/PostNewsScreen';
import DetailsScreen from '../screens/DetailsScreen'
import PickerImage from '../screens/pickerimage';

const PostStack = createStackNavigator();

const PostStackScreen = ({navigation}) => (
    <PostStack.Navigator screenOptions={{
        headerShown: false
    }}>
        <PostStack.Screen name="Postnews" component={PostNewsScreen}/>
        <PostStack.Screen name="Preview" component={DetailsScreen}/>
        <PostStack.Screen name="pickerimage" component={PickerImage}/>
    </PostStack.Navigator>
);
export default PostStackScreen