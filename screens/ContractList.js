import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import axios from 'axios';

const Tab = createMaterialTopTabNavigator();

const TinMua = ({navigation , route}) =>{
  const [users, setUsers] = useState([]);

  useEffect(() => {
    StatusBar.setBarStyle('dark-content', false);
    axios.get('https://randomuser.me/api/?results=5').then(({ data }) => {
      setUsers(data.results);
    });
  }, []);
  return (
    <View style={styles.container}>
      {users.length > 0 ? (
          <ScrollView style={{width: '100%'}}>
            {users.map((user) => (
              <TouchableOpacity
                key={user.id.value}
                style={styles.userCard}
                onPress={()=> {navigation.navigate('ChatDetails', {title: `${user.name.first} ${user.name.last}`, phone: user.phone})}}
              >
                <Image
                  style={styles.userImage}
                  source={{ uri: user.picture?.large }}
                />
                <View style={styles.userCardRight}>
                  <Text
                    style={{ fontSize: 18, fontWeight: '500' }}
                  >{`${user.name.first} ${user.name.last}`}</Text>
                  <Text>{`${user?.phone}`}</Text>
                </View>
              </TouchableOpacity>
            ))}
            <View style={{ height: 50 }}></View>
          </ScrollView>
        ) : (
          <View style={styles.messageBox}>
            <Text style={styles.messageBoxText}>Bạn chưa có tin nhắn</Text>
          </View>
        )}
    </View>
  )
}
const TinBan = ({navigation , route}) =>{ 
  const [users, setUsers] = useState([]);

  useEffect(() => {
    StatusBar.setBarStyle('dark-content', false);
    axios.get('https://randomuser.me/api/?results=15').then(({ data }) => {
      setUsers(data.results);
    });
  }, []);
  return (
    <View style={styles.container}>
      {users.length > 0 ? (
          <ScrollView style={{width: '100%'}}>
            {users.map((user) => (
              <TouchableOpacity
                key={user.id.value}
                style={styles.userCard}
                onPress={()=> {navigation.navigate('ChatDetails', {title: `${user.name.first} ${user.name.last}`, phone: user.phone})}}
              >
                <Image
                  style={styles.userImage}
                  source={{ uri: user.picture?.large }}
                />
                <View style={styles.userCardRight}>
                  <Text
                    style={{ fontSize: 18, fontWeight: '500' }}
                  >{`${user.name.first} ${user.name.last}`}</Text>
                  <Text>{`${user?.phone}`}</Text>
                </View>
              </TouchableOpacity>
            ))}
            <View style={{ height: 50 }}></View>
          </ScrollView>
        ) : (
          <View style={styles.messageBox}>
            <Text style={styles.messageBoxText}>Bạn chưa có tin nhắn</Text>
          </View>
        )}
    </View>
  )
}
const TatCa = ({navigation , route}) =>{ 
  const [users, setUsers] = useState([]);

  useEffect(() => {
    StatusBar.setBarStyle('dark-content', false);
    axios.get('https://randomuser.me/api/?results=20').then(({ data }) => {
      setUsers(data.results);
    });
  }, []);
  return (
    <View style={styles.container}>
      {users.length > 0 ? (
          <ScrollView style={{width: '100%'}}>
            {users.map((user) => (
              <TouchableOpacity
                key={user.id.value}
                style={styles.userCard}
                onPress={()=> {navigation.navigate('ChatDetails', {title: `${user.name.first} ${user.name.last}`, phone: user.phone})}}
              >
                <Image
                  style={styles.userImage}
                  source={{ uri: user.picture?.large }}
                />
                <View style={styles.userCardRight}>
                  <Text
                    style={{ fontSize: 18, fontWeight: '500' }}
                  >{`${user.name.first} ${user.name.last}`}</Text>
                  <Text>{`${user?.phone}`}</Text>
                </View>
              </TouchableOpacity>
            ))}
            <View style={{ height: 50 }}></View>
          </ScrollView>
        ) : (
          <View style={styles.messageBox}>
            <Text style={styles.messageBoxText}>Bạn chưa có tin nhắn</Text>
          </View>
        )}
    </View>
  )
}
const ContractScreen = () => {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Tất cả" component={TatCa} />
          <Tab.Screen name="Tin nhắn mua" component={TinMua} />
          <Tab.Screen name="Tin nhắn bán" component={TinBan} />
        </Tab.Navigator>
    );
};

export default ContractScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingTop: 10,
    width: '100%'
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'red'
  },
  userCard: {
    backgroundColor: '#fafafa',
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 10,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  userCardRight: {
    paddingHorizontal: 10,
  },
});