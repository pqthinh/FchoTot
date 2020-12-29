import React, {useState, useEffect} from 'react'
import {ScrollView, View, Text, StyleSheet, TouchableOpacity , Image } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import { TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import { Feather, Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios'
import baseURL from '../http'

import {LogBox} from 'react-native'
LogBox.ignoreAllLogs()
LogBox.ignoreLogs(['Warning: ...'])
// var fs = require('fs');

const PostNewsScreen = ({navigation, route }) =>{
    //  Thông tin cần post leen server //

    const [theloai, setTheloai] = useState('Cần bán')
    const [danhmuc, setDanhmuc] = useState('Bất động sản')

    // const [tenMatHang, setTenMatHang] = useState('')
    const [tinh, setTinh] = useState('Hà Nội')
    const [huyen, setHuyen] = useState('Nam Từ Liêm')
    const [xa, setXa] = useState('Mễ Trì Hạ')
    // Địa điểm khi post thì concat ---- tinh/ huyen / xa ---- //

    const [giaban, setGiaban] = useState(null)
    const [tieude, setTieude] = useState(null)
    const [mieuta, setMieuta]= useState(null)

    // picker images
    const [images, setImages] = useState([])

    // link anh luu tren server : array
    const [link, setLink] = useState([])
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
    
    const getImage = () =>{
        if(!route.params) return []
        const {data} = route.params
        return data
    }
    // getImage()
    useEffect(()=>{
        setImages(getImage())
    },[route.params])
    // Lấy ảnh thành công // 
    const news = {
        idnguoiban: currentUser? currentUser.id : 5,
        loaitin: theloai,
        tendanhmuc: danhmuc,
        diadiem: xa+ ", "+ huyen + ", "+ tinh,
        giaban: giaban,
        ten: tieude,
        mieuta: mieuta,
        anh: link
    }
    const checkValidation = () =>{
        if(!theloai || !danhmuc || !xa || !huyen|| !tinh || !giaban || !tieude || !mieuta || !anh) {
            alert("Bạn phải điền đủ thông tin để đăng bài") 
            return false
        }
        return true
    }
    const uploadImage = (images)=> {
        // add anh vao form data
        var formData = new FormData()
        images.forEach(file => {
            formData.append('file', {
                uri: file.uri, 					// this is the path to your file. see Expo ImagePicker or React Native ImagePicker
                type: "image/jpg",  // example: image/jpg
                name: file.filename   // example: upload.jpg
            });
        })
        axios.post(`${baseURL}/image`,formData , {headers: { "Content-type": "multipart/form-data" }})
        .then(res=>{
            console.log("res :" + res.data.path)
            setLink(res.data.path)

        })
        .catch(e=>{
            console.log(e)
        })
    }

    // convert array link image to string
    const linktext = async (link) =>{
        var text =""
        link.map(x=> text+= x+",")
        return text
    }

    const uploadTin = async ()=>{
        if(images.length == 0) {
            alert("Phải chọn ít nhất một ảnh")
            return
        }
        await uploadImage(images)
        console.log(link)
        // const textimage = linktext()
        // console.log(textimage)
        news.anh = await linktext(link)
        console.log(news)
        if(news.anh.length>0) {
            const res = await axios.post(`${baseURL}/tindang`, news)
            // console.log(res.data)
            alert(`Tin đăng ${res.data.id_tindang} đang được chờ duyệt`)
        }
    }
    return (
        <View style={styles.container}>
            <View style={[styles.top , {backgroundColor: '#52c7b8', marginHorizontal: 5 , padding: 10}]}>
                <Feather name="x" size={24} color="black" onPress={()=> navigation.goBack()}/>
                <Text > Tạo tin đăng bán</Text>
                <Octicons name="eye" size={24} color="black" onPress={()=> {
                        // if(checkValidation)
                        //     navigation.navigate("Preview", {params: {news}})
                        alert("Chưa xem được tin trước")
                    }}/>
            </View>
            <View>
                <ScrollView>
                    <TouchableOpacity style={[styles.row, styles.touchinput , styles.singleline]}>
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
                    
                    <TouchableOpacity style={ [styles.row, styles.touchinput, styles.singleline]}>
                        <Text>Chọn danh mục tin: </Text>
                        <Picker
                            selectedValue= {danhmuc}
                            onValueChange={(itemValue, itemIndex) => setDanhmuc(itemValue)}
                            style={{ height: 40, width: '60%', fontSize: 12}}
                        >
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
                    </TouchableOpacity>

                    <TextInput
                        label="Thành phố /Tỉnh: "
                        value={tinh}
                        style={[styles.singleline,styles.row]}
                        onChangeText={text => setTinh(text)}
                    />
                    <TextInput
                        label="Quận /Huyện: "
                        value={huyen}
                        style={[styles.singleline,styles.row]}
                        onChangeText={text => setHuyen(text)}
                    />
                    <TextInput
                        label="Phường /Xã: "
                        value={xa}
                        style={[styles.singleline,styles.row]}
                        onChangeText={text => setXa(text)}
                    />

                    {/* Fetch iamge // dang bi loi */}
                    <View  style={styles.uploadimage}>
                        <MaterialIcons onPress={()=>  {
                                setImages([])
                                navigation.navigate("pickerimage")
                            }} 
                            name="add-a-photo" size={60} color="black" />
                        <View style={styles.imagePost}>
                        {
                            images?.map(x=> (
                                <Image key={x.id} source={{uri: x.uri}} style={{width: 120, height: 100 , marginHorizontal: 10, marginVertical: 10}} />
                            ))
                        }
                        </View>
                    </View>    

                    <TextInput
                        label="Chọn tiêu đề: "
                        value={tieude}
                        style={[styles.singleline,styles.row]}
                        onChangeText={text => setTieude(text)}
                        underlineColorAndroid={'transparent'}
                    />

                    <TextInput
                        label="Định giá tin đăng: "
                        value={giaban}
                        style={[styles.singleline, styles.row]}
                        onChangeText={text => setGiaban(text)}
                        underlineColorAndroid={'transparent'}
                    />
                    <TextInput multiline style={[styles.multiline, styles.row]} value={mieuta} 
                        onChangeText={text => setMieuta(text)} label={"Miêu tả nội dung: " } numberOfLines={10}/>
                    
                    <View style={styles.row}>
                        <TouchableOpacity onPress={()=> {
                                uploadTin()
                            }} 
                            style={styles.submit}>
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
        backgroundColor: '#f0f0f0'
    },
    multiline: {
        height: 150,
    },
    singleline: {
        height: 50,
    },
    submit: {
        backgroundColor: '#52c7b8',
        alignItems: 'center',
        padding: 10
    },
    uploadimage: {
        justifyContent: "center",
        flex: 0.5,
        marginHorizontal: 10,
        backgroundColor: '#f0f0f0',
        width: "90%",
        marginHorizontal: 20,
    },
    imagePost :{
        flexDirection: 'row',
        flexWrap: "wrap" ,
        marginHorizontal: 10,
        marginVertical: 10,
        
    }
})