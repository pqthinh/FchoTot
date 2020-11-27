import React , {useState, useEffect} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ListNewsComponent from '../components/NewsPost';

const SearchScreen = ({navigation, route}) => {
  const [newsposted, setNewsposted] = useState([])
  useEffect(()=>{
    var newsList = require('../data/tindang.json')
    setNewsposted(newsList)
  })
    return (
      <View>
        {/* Man hinh tim kiem */}
        <View>
          <Text>Hàng lọc dữ liệu</Text>
        </View>
        <Button
            title="Go back"
            onPress={() => navigation.goBack()}
        />
        <Text>Tham số truyền vào input: {JSON.stringify(route?.params)}</Text>
        <ScrollView>
          <ListNewsComponent newspost={newsposted}  navigation={navigation} danhmuc={"Kết quả tìm kiếm"}/>
        </ScrollView>
        
      </View>
    );
};
  
export default SearchScreen;
