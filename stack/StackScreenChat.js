import React from 'react'
import {View} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import ChatDetailsScreen from '../screens/ChatScreen';
import ContractScreen from '../screens/ContractList'

import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const ChatStack = createStackNavigator();

const StackScreenChat = ({navigation}) => (
    <ChatStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#f0f0f0',
          height: 50,
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
          marginBottom : 30
        },
        headerRightContainerStyle: {
            marginBottom: 11
        },
        headerLeftContainerStyle : {
            marginBottom: 50
        }
    }}>
        <ChatStack.Screen name="ContractList" component={ContractScreen}/>
        <ChatStack.Screen name="ChatDetails" 
            component={ChatDetailsScreen} 
            options={({ navigation , route }) => ({
                title: route.params.title,
                headerRight: () => (
                    <View style={{flexDirection: 'row', marginHorizontal: 10}}>
                        <Feather name="phone-call" size={24} color="black" style = {{marginRight: 10}}  onPress={() => {alert("Call offline")}}/>
                        <Entypo name="dots-three-vertical" size={24} color="black" onPress={() => {alert("Information")}}/>
                    </View>
                ),
            })}
        />
    </ChatStack.Navigator>
);
export default StackScreenChat