import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const TinLienQuan = () =>{
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Không có thông tin</Text>
    </View>
  )
}
const TinChoDuyet = () =>{ 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chưa có thông tin về tin đang chờ duyệt</Text>
    </View>
  )
}

const NotificationScreen = ({navigation, route}) => {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Tin mới" component={TinLienQuan} />
          <Tab.Screen name="Tin đang chờ duyệt" component={TinChoDuyet} />
        </Tab.Navigator>
    );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'red'
  },
});
{/* <View style={styles.container}>
        <Text>Trang thông báo</Text>
        <MaterialCommunityIcons name="keyboard-backspace" size={24} color="black" onPress={() => {navigation.goBack()}}/>
        </View>
         Gồm 2 tab là tin đăng mới liên quan / tin đang chờ duyệt */}