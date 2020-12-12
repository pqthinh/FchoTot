import React , {useState, useEffect} from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { List, Avatar , Card ,Divider } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import flatListData from '../data/explore';

const ExploreScreen = ({navigation}) => {
  const [currentUser, setCurrentUser] = useState({})
  useEffect(()=> {
    AsyncStorage.getItem('currentuser', (errs, res)=>{
        if (!errs) {
            if (res !== null) {
              setCurrentUser(JSON.parse(res))
            }
         }
    })
    
  },[])
    return (
      <ScrollView>
        <List.Section>
        <Divider />
        <Card.Title
            title={<Text style={styles.user}>{currentUser.name}</Text>}
            subtitle={<Text style={styles.edit} onPress={()=> navigation.navigate('Profile')}>Xem trang cá nhân</Text>}
            left={(props) => <Avatar.Image {...props} size={50} source={{uri : currentUser.avatar}} />}
            right={(props) => <Feather {...props} name="more-vertical" size={24} color="black" />}
          />
        </List.Section>
        <Divider />
        <List.Section>
          <List.Subheader>Lối tắt</List.Subheader>

          <List.Item title={flatListData[0].name} left={() => <Avatar.Image  size={40} source={{uri: flatListData[0].icon}} />} onPress={()=> navigation.navigate("SaveNews" ,{header: "Tin yêu thích"})}/>
          <List.Item title={flatListData[1].name} left={() => <Avatar.Image  size={40} source={{uri: flatListData[1].icon}} />} onPress={()=> navigation.navigate("SaveNews", {header: "Tìm kiếm đã lưu"})}/>
          <List.Item title={flatListData[2].name} left={() => <Avatar.Image  size={40} source={{uri: flatListData[2].icon}} />} />
          <Divider />
          <List.Item title={flatListData[3].name} left={() => <Avatar.Image  size={40} source={{uri: flatListData[3].icon}} />} />
          <List.Item title={flatListData[4].name} left={() => <Avatar.Image  size={40} source={{uri: flatListData[4].icon}} />} />
          <Divider />
          <List.Item title={flatListData[5].name} left={() => <Avatar.Image  size={40} source={{uri: flatListData[5].icon}} />} />
          <List.Item title={flatListData[6].name} left={() => <Avatar.Image  size={40} source={{uri: flatListData[6].icon}} />} />
          <Divider />
          <List.Item title={flatListData[7].name} left={() => <Avatar.Image  size={40} source={{uri: flatListData[7].icon}} />} />
          <Divider />
        </List.Section>
        
      </ScrollView>
    );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  user: {
    fontSize: 24,
    fontWeight: '500',
    marginHorizontal: 20,
    marginVertical: 20
  },
  edit: {
    color: 'red',
    textAlign: 'center'
  }
});