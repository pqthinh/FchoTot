import React, { useState } from 'react';
import { View, Text,  StyleSheet,TextInput, TouchableOpacity } from 'react-native';
// import { List, Avatar , Divider, Paragraph, Title, Caption } from 'react-native-paper';
// import baseURL from '../http'

import { MaterialCommunityIcons } from '@expo/vector-icons';
// import Axios from 'axios';

const EditInforationScreen = ({navigation, route}) => {
    const [newp, setNewp] = useState("")
    const [rp, setRp] = useState("")
    const [op,setOp]= useState("")
    const {id, password} = route.params
    // console.log(id +" "+ password)
    const handleNewP = async () =>{
      if(rp !== newp) alert("Bạn nhập lại mật khẩu không khớp")
      else if(newp === password || rp === password) alert("Không có sự thay đổi")
      else if(op !== password) alert("Bạn nhập sai mật khẩu cũ")
      else {
        // const res = Axios.put(`${baseURL}/user/${id}`, {password: newp})
        alert("Cập nhật mật khẩu thành công")}
    }
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20}}>
          <MaterialCommunityIcons name="keyboard-backspace" size={24} color="black" onPress={() => {navigation.goBack()}}/>
          <Text>Cập nhật mật khẩu</Text>
        </View>
        
        <Text style={{ height: 35, marginTop: 20,marginLeft:10}}> Mật khẩu cũ</Text>
          <TextInput style={{ 
              height: 40,
              margin: 10,
              padding:10,
              borderColor: 'black',
              borderWidth: 1
            }}
            // keyboardType = 'password'
            placeholder = 'Nhập mật khẩu cũ'
            placeholderTextColor = 'grey'
            secureTextEntry={true}
            passwordRules={5}
            value={op}
            onChangeText={(val) => setOp(val)}
            />
        <Text style={{ height: 35, marginTop: 20,marginLeft:10}}> Cập nhật mật khẩu</Text>
          <TextInput style={{ 
              height: 40,
              margin: 10,
              padding:10,
              borderColor: 'black',
              borderWidth: 1
            }}
            // keyboardType = 'password'
            placeholder = 'Nhập mật khẩu mới'
            placeholderTextColor = 'grey'
            secureTextEntry={true}
            passwordRules={5}
            value={newp}
            onChangeText={(val) => setNewp(val)}
            />
          <Text style={{ height: 35, marginTop: 20,marginLeft:10}}> Nhập lại mk</Text>
            <TextInput style={{ 
                height: 40,
                margin: 10,
                padding:10,
                borderColor: 'black',
                borderWidth: 1
              }}
              // keyboardType = 'password'
              placeholder = 'Xác nhận lại mật khẩu'
              placeholderTextColor = 'grey'
              secureTextEntry={true}
              value={rp}
              onChangeText={(val) => setRp(val)}
            />
          <View style={{width: '90%', justifyContent: 'space-around',marginVertical: 50,  marginHorizontal: 20,padding: 10, backgroundColor: "#03A678", borderRadius: 5}}>
            <TouchableOpacity onPress={handleNewP} >
              <Text style={{ color: "#fff", textAlign: 'center'}}>Cập nhật mật khẩu</Text>
            </TouchableOpacity>
          </View>
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
