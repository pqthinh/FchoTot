import React , {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import RangeSlider from 'react-native-range-slider-expo';
import RNPickerSelect from 'react-native-picker-select';
import { TextInput } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

var currencyFormatter = require('currency-formatter')

import ListNewsComponent from '../components/NewsPost';

const SearchScreen = ({navigation, route}) => {
    const [newsposted, setNewsposted] = useState([])
    const [fromValue, setFromValue] = useState(1000);
    const [toValue, setToValue] = useState(10000000000);
    const [sort, setSort] = useState(null)
    const [type, setType] = useState(null)
    const [place, setPlace] = useState(null)
    
    useEffect(()=>{
      var newsList = require('../data/tindang.json')
      setNewsposted(newsList)
    },[])

    return (
      <View style={styles.container}>
        {/* header search */}
        <View style={styles.search}>
          <View style={{flexDirection: 'row', paddingHorizontal: 10, justifyContent: 'space-between'}}>
            <Text style={{marginBottom: 10}}>Lọc tin đăng</Text>
            {/* Get info then call api filter */}
            <TouchableOpacity 
              onPress={()=> {
                
              }} 
              
              style={{backgroundColor: "#049372", padding: 4, borderRadius: 4}}>
                <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
                  <Text style={{color: '#fff'}}>Lọc</Text>
                  <AntDesign name="filter" size={24} color="#fff" />
                </View>
            </TouchableOpacity>
          </View>
          <ScrollView >
              <View >
                <RNPickerSelect
                    onValueChange={(value) => setSort(value)}
                    items={[
                        { label: 'Sắp xếp theo giá thấp trước', value: 'cost' },
                        { label: 'Sắp xếp theo thời gian gần nhất', value: 'time' }
                    ]}
                    placeholder={{
                      label:  "Sắp xếp tin đăng ...",
                      value: sort
                    }}
                    style={styles.inputAndroidRNPicker}
                    value={sort}
                />
                <RNPickerSelect
                    onValueChange={(value) => setType(value)}
                    items={[
                        { label: 'Cần mua', value: 'Cần mua' },
                        { label: 'Cần bán', value: 'Cần bán' }
                    ]}
                    placeholder={{
                      label: "Chọn loại tin đăng",
                      value: type
                    }}
                    style={styles.inputAndroidRNPicker}
                    // value={type}
                />
                <TextInput 
                    value={place}
                    label="Chọn địa điểm tìm kiếm"
                    onChangeText={text => setPlace(text)}
                />
              </View>

              <View>
                <Text>
                  {`Giá từ: ${currencyFormatter.format(fromValue, { code: 'VND' })} đến ${currencyFormatter.format(toValue, { code: 'VND' })}`}
                </Text>
                <RangeSlider min={0} max={1000000000} step={10000000} styleSize="small"
                  fromValueOnChange={value => setFromValue(value)}
                  toValueOnChange={value => setToValue(value)}
                  initialFromValue={100000}
                  showValueLabels={false}
                  showRangeLabels={false}
                />
              </View>
          </ScrollView>
        </View>
        {/* Goi api query search tin */}
        <View style={styles.result}>
          <ScrollView>
            <ListNewsComponent newspost={newsposted}  navigation={navigation} danhmuc={"Kết quả tìm kiếm"}/>
          </ScrollView>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    flex: 0.3,
    width: '90%',
    justifyContent: 'center',
    marginHorizontal: 20
  },
  result: {
    flex: 0.7
  },
  inputAndroidRNPicker: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
})
  
export default SearchScreen;
