import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ListNewsComponent from './components/postHorizial'
const App = () => {
    const news = {"id_tindang":1,"id_danhmuc":10,"idnguoiban":1,"ten":"Bàn ghế","diadiem":"Hà Nội","ngayban":"2020-10-23T10:21:33.000Z","trangthai":1,"anh":"https://rongba.vn/wp-content/uploads/2019/01/quy-trinh-lam-ban-ghe-go-huong-nam-phi.jpg","giaban":1500000,"ngaycapnhat":"2020-10-29T17:11:19.000Z"}
    return (
        <ScrollView>
        <View style={styles.container}>
            <ListNewsComponent news={news}/>
            <ListNewsComponent news={news}/>
            <ListNewsComponent news={news}/>
            <ListNewsComponent news={news}/>
            <ListNewsComponent news={news}/>
            <ListNewsComponent news={news}/>
            <ListNewsComponent news={news}/>
            <ListNewsComponent news={news}/>
        </View>
      </ScrollView>
    );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
