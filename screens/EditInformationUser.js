import React from 'react';
import { View, Text, Button, StyleSheet,TextInput } from 'react-native';
// import { List, Avatar , Divider, Paragraph, Title, Caption } from 'react-native-paper';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const EditInforationScreen = ({navigation, route}) => {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20}}>
          <MaterialCommunityIcons name="keyboard-backspace" size={24} color="black" onPress={() => {navigation.goBack()}}/>
          <Text>Chỉnh sửa thông tin</Text>
        </View>
        
        <Text style={{ height: 35, marginTop: 20,marginLeft:10}}> Họ và tên</Text>
          <TextInput style={{ 
              height: 40,
              margin: 10,
              padding:10,
              borderColor: 'black',
              borderWidth: 1
            }}
            keyboardType = 'email-address'
            placeholder = 'Nhập tên của bạn...'
            placeholderTextColor = 'grey'
            />
        <Text style={{ height: 35, marginTop: 20,marginLeft:10}}> Địa chỉ</Text>
          <TextInput style={{ 
              height: 40,
              margin: 10,
              padding:10,
              borderColor: 'black',
              borderWidth: 1
            }}
            keyboardType = 'email-address'
            placeholder = 'Nhập địa chỉ...'
            placeholderTextColor = 'grey'
            />
          <Text style={{ height: 35, marginTop: 20,marginLeft:10}}> Ngày sinh</Text>
            <TextInput style={{ 
                height: 40,
                margin: 10,
                padding:10,
                borderColor: 'black',
                borderWidth: 1
              }}
              keyboardType = 'email-address'
              placeholder = 'dd/mm/yy'
              placeholderTextColor = 'grey'
            />

      </View>
    );
};

export default EditInforationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    // alignItems: 'center', 
    // justifyContent: 'center'
  },
});
