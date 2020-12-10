import React from 'react';
import { View, Text,  StyleSheet ,ScrollView} from 'react-native';
import { List, Avatar , Divider, Paragraph, Title, Caption } from 'react-native-paper';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import  currentUser  from '../data/currentUser'

const ProfileScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <MaterialCommunityIcons name="keyboard-backspace" size={24} color="black" onPress={() => {navigation.navigate("Explore")}}/>
          <Text style={{fontSize: 16}}>{currentUser.name}</Text>
          <MaterialCommunityIcons size={24} name="backspace-outline" color="black" onPress={() => {navigation.navigate("Home")}}/>
        </View>
        
        <ScrollView>
        
          <List.Section>
            
            <View style={styles.userInfoSection}>
                <View style={{flexDirection:'row',marginTop: 15}}>
                    <Avatar.Image 
                        source={{
                            uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                        }}
                        size={50}
                    />
                    <View style={{marginLeft:15, flexDirection:'column'}}>
                        <Title style={styles.title}>{currentUser.name}</Title>
                        <Caption style={styles.caption}>{currentUser.email}</Caption>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.section}>
                        <Paragraph style={[styles.paragraph, styles.caption]}>{currentUser.following}</Paragraph>
                        <Caption style={styles.caption}>Following</Caption>
                    </View>
                    <View style={styles.section}>
                        <Paragraph style={[styles.paragraph, styles.caption]}>{currentUser.follower}</Paragraph>
                        <Caption style={styles.caption}>Followers</Caption>
                    </View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.buttontext} onPress={()=> navigation.navigate("EditInfor")}>Chỉnh sửa thông tin</Text>
                    <Feather name="more-vertical" size={24} color="black" style={{marginLeft: 100}}/>
                </View>
            </View>
          </List.Section>
          <Divider/>
          
          <List.Section>
            <List.Subheader>Tin đang bán</List.Subheader>
            <Text style={{color:"red"}}>Chưa có thông tin</Text>
          </List.Section>


        </ScrollView>
      </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    backgroundColor :'#009387',
    textAlignVertical: "center"
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
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  buttontext: {
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#05375a'
  }
});
