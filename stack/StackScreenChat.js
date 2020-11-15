import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ChatDetailsScreen from '../screens/ChatScreen';
import ContractScreen from '../screens/ContractList'

const ChatStack = createStackNavigator();

const StackScreenChat = ({navigation}) => (
    <ChatStack.Navigator screenOptions={{
        headerShown: false
    }}>
        <ChatStack.Screen name="ContractList" component={ContractScreen}/>
        <ChatStack.Screen name="ChatDetails" component={ChatDetailsScreen}/>
    </ChatStack.Navigator>
);
export default StackScreenChat