import React, {useState} from 'react'
import {ScrollView, View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {Picker} from '@react-native-picker/picker';
import { TextInput } from 'react-native-paper';
import Textarea from 'react-native-textarea';
// import ImagePicker from 'react-native-image-crop-picker';
import { Feather, Octicons } from '@expo/vector-icons';


const PostNewsScreen = ({navigation, props}) =>{
    const [theloai, setTheloai] = useState('Cần bán')
    const [danhmuc, setDanhmuc] = useState('Bất động sản')
    // const [tenMatHang, setTenMatHang] = useState('')
    const [tinh, setTinh] = useState('Hà Nội')
    const [huyen, setHuyen] = useState('Nam Từ Liêm')
    const [xa, setXa] = useState('Mễ Trì Hạ')
    const [giaban, setGiaban] = useState(null)
    const [tieude, setTieude] = useState(null)
    const [mieuta, setMieuta]= useState(null)

    return (
        <View style={styles.container}>
            <View style={[styles.top , {backgroundColor: '#52c7b8', marginHorizontal: 5 , padding: 10}]}>
                <Feather name="x" size={24} color="black" onPress={()=> navigation.goBack()}/>
                <Text > Tạo tin đăng bán</Text>
                <Octicons name="eye" size={24} color="black" onPress={()=> navigation.navigate("Preview")}/>
            </View>
            <View>
                <ScrollView>
                    <TouchableOpacity style={[styles.row, styles.touchinput ]}>
                        <Text>Loại tin đăng: </Text>
                        <Picker
                            selectedValue= {theloai}
                            onValueChange={(itemValue) => setTheloai(itemValue)}
                            style={{ height: 40, width: '60%', fontSize: 12}}
                        >
                            <Picker.Item label="Cần bán" value="Cần bán" />
                            <Picker.Item label="Cần mua" value="Cần mua" />
                        </Picker>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={ [styles.row, styles.touchinput]}>
                        <Text>Chọn danh mục tin: </Text>
                        <Picker
                            selectedValue= {danhmuc}
                            onValueChange={(itemValue, itemIndex) => setDanhmuc(itemValue)}
                            style={{ height: 40, width: '60%', fontSize: 12}}
                        >
                            <Picker.Item label="Bất động sản" value="1" />
                            <Picker.Item label="Xe cộ" value="2" />
                            <Picker.Item label="Đồ điện tử" value="3" />
                            <Picker.Item label="Đồ ăn, thực phẩm" value="4" />
                            <Picker.Item label="Giải trí, thể thao" value="5" />
                            <Picker.Item label="Mẹ và bé" value="6" />
                            <Picker.Item label="Du lịch, Dịch vụ" value="7" />
                            <Picker.Item label="Cho tặng miễn phí" value="8" />
                            <Picker.Item label="Thú cưng" value="9" />
                            <Picker.Item label="Đồ gia dụng, nội thất" value="10" />
                            <Picker.Item label="Tủ lạnh, máy giặt" value="11" />
                            <Picker.Item label="Thời trang" value="12" />
                            <Picker.Item label="Đồ dùng văn phòng" value="13" />
                            <Picker.Item label="Tất cả danh mục" value="14" />
                            <Picker.Item label="Việc làm" value="15" />
                        </Picker>
                    </TouchableOpacity>

                    <TextInput
                        label="Thành phố /Tỉnh: "
                        value={tinh}
                        style={[styles.row]}
                        onChangeText={text => setTinh(text)}
                    />
                    <TextInput
                        label="Quận /Huyện: "
                        value={huyen}
                        style={[styles.row]}
                        onChangeText={text => setHuyen(text)}
                    />
                    <TextInput
                        label="Phường /Xã: "
                        value={xa}
                        style={[styles.row]}
                        onChangeText={text => setXa(text)}
                    />

                    {/* Chon anh cho tin
                    mô tả tin đăng
                    // {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                    // submit
                    // preview tin   // tai su dung tu man  hinh chi tiet tin */}
                    <TextInput
                        label="Chọn tiêu đề: "
                        value={tieude}
                        style={[styles.row]}
                        onChangeText={text => setTieude(text)}
                        underlineColorAndroid={'transparent'}
                    />

                    <TextInput
                        label="Định giá tin đăng: "
                        value={giaban}
                        style={styles.row}
                        onChangeText={text => setGiaban(text)}
                        underlineColorAndroid={'transparent'}
                    />
                    
                    <Textarea
                        label="Miêu tả nội dung: "
                        value={mieuta}
                        style={styles.row}
                        onChangeText={text => setMieuta(text)}
                        // onChangeText={this.onChange}
                        // defaultValue={this.state.text}
                        maxLength={500}
                        placeholder={'Nhập nội dung bài đăng ... '}
                        placeholderTextColor={'#c7c7c7'}
                        underlineColorAndroid={'transparent'}
                    />
                    <View style={styles.row}>
                        <TouchableOpacity onPress={()=> console.log("dang tin")} style={styles.submit}>
                            <Text>Đăng tin</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
           
        </View>

    )
}

export default PostNewsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 20,
        justifyContent: 'center',
        marginVertical: 20
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        marginVertical: 10,
        // marginTop: 60
    },
    touchinput: {
        // borderWidth: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        width: '90%', 
        marginHorizontal: 20, 
    },
    option: {
        width: '90%',
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        flex: 1,
        backgroundColor:"red"
    },
    row: {
        marginVertical: 20,
        color: 'red', 
        borderColor: '#52c7b8', 
        width: '90%', 
        marginHorizontal: 20,
        padding: 5,
        backgroundColor: '#fff',
        borderRadius: 5, 
        height: 50,
        // backgroundColor: '#52c7b8'
    },
    submit: {
        backgroundColor: '#52c7b8',
        alignItems: 'center',
        padding: 10
    }
})