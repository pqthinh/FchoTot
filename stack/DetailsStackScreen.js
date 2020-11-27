import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import DetailsScreen from '../screens/DetailsScreen';

const DetailsStack = createStackNavigator();

const DetailsStackScreen = ({navigation}) => (
    <DetailsStack.Navigator screenOptions={{
        headerShown: false
    }}>
        {/* Thong bao cho nguoi dung ve trang thai tin */}
        <DetailsStack.Screen name="Details" component={DetailsScreen}/>

        {/* <DetailsStack.Screen name="Details" component={DetailsScreen}/> */}
    </DetailsStack.Navigator>
);
export default DetailsStackScreen