import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/screens/home'
import SearchScreen from './src/screens/search'

const Tab = createBottomTabNavigator();

export default function AppTest() {
  return (
    <NavigationContainer>
    
      <Tab.Navigator
          screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === 'Trang chủ') {
                      iconName = focused ? 'ios-home': 'ios-home';
                  } 
                  else if (route.name === 'Thông tin') {
                      iconName = focused ? 'ios-list-box' : 'ios-list';
                  } 
                  else if(route.name === 'Tôi bán') {
                      iconName = 'ios-person-add'
                  } 
                  else if(route.name== "Đăng tin") 
                      iconName = "ios-cloud-upload"

                  else if(route.name=="Thông báo") 
                      iconName = !focused ? "ios-notifications-outline" : "ios-notifications"
                  
                  else if(route.name == "Chat")
                      iconName = "ios-chatbubbles" 
                      
                  return <Ionicons name={iconName} size={size} color={color} />;
              },
          })}
          tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          }}
      >
          <Tab.Screen name="Trang chủ" component={Home} options={{ tabBarBadge: 3 }}/>
          <Tab.Screen name="Tôi bán" component={SearchScreen}/>
          <Tab.Screen name="Đăng tin" component={SearchScreen} tabBarOptions = {{tabStyle: {color: 'red'}}}/>
          <Tab.Screen name="Thông báo" component={SearchScreen}/>
          <Tab.Screen name="Chat" component={SearchScreen}/>
          <Tab.Screen name="Thông tin" component={SearchScreen}/>

        </Tab.Navigator>
    </NavigationContainer>  
  );
}

// import React from 'react'
// import { View } from 'react-native'
// // import ChatsListScreen from './src/screens/chat'
// // import Home from './src/screens/home'
// import AppTest from './AppTest'

// export default class App extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return (
//             <View>
//                 <AppTest />
//             </View>
//         )
//     }
// }
