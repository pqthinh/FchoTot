import React , {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import RangeSlider from 'react-native-range-slider-expo';
import RNPickerSelect from 'react-native-picker-select';
import { TextInput } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios'
import baseURL from '../http'
import EmptyScreen from './emptyScreen'
import NewsPost from '../components/NewsPost';

var currencyFormatter = require('currency-formatter')

const SearchScreen = ({navigation, route}) => {
    // route dc truyen cac tham so nhu ten sản pham / ten danh muc
    const ctg = route.params.category? route.params.category : ""
    const tensp = route.params.dataQuery? route.params.dataQuery : ""
    const [newsposted, setNewsposted] = useState([])
    const [fromValue, setFromValue] = useState(1000);
    const [toValue, setToValue] = useState(10000000000);
    const [sort, setSort] = useState(null)
    const [type, setType] = useState(null)
    const [place, setPlace] = useState(null)
    const [danhmuc, setDanhmuc] = useState(ctg)
    const [loading, setLoading] = useState(false)
    // fetch form search
    useEffect(()=>{
      loadPost()
    },[])
  
    const loadPost = async () =>{
      setLoading(true)
      const news = await axios.get(`${baseURL}/search?type=${danhmuc}&tensp=${tensp}`)
      console.log("So luong tin loc danh muc / tim theo ten : " + news.data.length)
      await setNewsposted(news.data)
      setLoading(false)
    }

    const handleFilter = async () =>{
      setLoading(true)
      const news = await axios.get(`${baseURL}/search?type=${danhmuc}&tensp=${tensp}&min_price=${fromValue}&max_price=${toValue}&address=${place}&sort=${sort}&loaitin=${type}`)
      console.log("So luong tin loc ra: " + news.data.length)
      await setNewsposted(news.data)
      setLoading(false)
    }

    return (
      <View style={styles.container}>
        {/* header search */}
        <View style={styles.search}>
          <View style={{flexDirection: 'row', paddingHorizontal: 10, justifyContent: 'space-between'}}>
            <Text style={{marginBottom: 10}}>Lọc tin đăng</Text>
            {/* Get info then call api filter */}
            <TouchableOpacity 
              onPress={()=> {
                handleFilter()
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
                        <Picker
                            selectedValue= {danhmuc}
                            onValueChange={(itemValue, itemIndex) => setDanhmuc(itemValue)}
                            style={{ height: 40, width: '60%', fontSize: 12}}
                        > 
                            <Picker.Item label="Tất cả" value={null} />
                            <Picker.Item label="Bất động sản" value="Bất động sản" />
                            <Picker.Item label="Xe cộ" value="Xe cộ" />
                            <Picker.Item label="Đồ điện tử" value="Đồ điện tử" />
                            <Picker.Item label="Đồ ăn, thực phẩm" value="Đồ ăn, thực phẩm" />
                            <Picker.Item label="Giải trí, thể thao" value="Giải trí, thể thao" />
                            <Picker.Item label="Mẹ và bé" value="Mẹ và bé" />
                            <Picker.Item label="Du lịch, Dịch vụ" value="Du lịch, Dịch vụ" />
                            <Picker.Item label="Cho tặng miễn phí" value="Cho tặng miễn phí" />
                            <Picker.Item label="Thú cưng" value="Thú cưng" />
                            <Picker.Item label="Đồ gia dụng, nội thất" value="Đồ gia dụng, nội thất" />
                            <Picker.Item label="Tủ lạnh, máy giặt" value="Tủ lạnh, máy giặt" />
                            <Picker.Item label="Thời trang" value="Thời trang" />
                            <Picker.Item label="Đồ dùng văn phòng" value="Đồ dùng văn phòng" />
                            <Picker.Item label="Tất cả danh mục" value="Tất cả danh mục" />
                            <Picker.Item label="Việc làm" value="Việc làm" />
                        </Picker>
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
                    value={type}
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
          <Text></Text>
          <ScrollView>
          {loading? 
            <EmptyScreen /> :
            <NewsPost navigation={navigation} newspost={newsposted} danhmuc={"Kết quả tìm kiếm"}/>
          }
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
