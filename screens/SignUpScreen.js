import React, { useState } from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Switch } from 'react-native-paper';
import Axios from 'axios';
import { AuthContext } from '../components/context';
// import {baseUrl} from '../http'
// const baseUrl = "https://vast-shore-33582.herokuapp.com"
const baseUrl = "http://192.168.101.109:3000"

const SignInScreen = ({navigation}) => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const { signIn } = React.useContext(AuthContext);
    const [data, setData] = React.useState({
        username: '',
        email: '',
        phone: '',
        password: '',
        confirm_password: '',
        role: '',
        check_textInputChange: false,
        check_textEmailChange: false,
        check_textPhoneChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });
    const [error, setError] = useState(null)
    const textInputNameChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }

    const validate = (email) => {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    
        return expression.test(String(email).toLowerCase())
    }

    const textInputEmailChange = (val) => {
        if( validate(val) ) {
            setData({
                ...data,
                email: val,
                check_textEmailChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textEmailChange: false
            });
        }
    }

    const isVietnamesePhoneNumber = (number)=> {
        return /(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
    }

    const textInputPhoneChange = (val) => {
        if( isVietnamesePhoneNumber(val) ) {
            setData({
                ...data,
                phone: val,
                check_textPhoneChange: true
            });
        } else {
            setData({
                ...data,
                phone: val,
                check_textPhoneChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const handleRoleChange = () => {
        setIsSwitchOn(!isSwitchOn)
        setData({
            ...data,
            role: isSwitchOn ? "buyer": "seller",
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    const SignUp = () =>{
        
        if(!data.check_textEmailChange || !data.check_textInputChange || !data.check_textPhoneChange || !data.password || !data.confirm_password)
            setError("Bạn phải điền thiếu hoặc sai thông tin")
        else if(data.password !== data.confirm_password){
            setError("Mật khẩu không khớp")
        } else {
            // post lên server
            setError(null)
            var resp
            Axios.post(`${baseUrl}/user/create`, {
                name: data.username,
                email: data.email,
                mobile: data.phone,
                password: data.password,
                role: isSwitchOn ? "buyer": "seller"})
            .then(res=>{
                console.log(res.status)
                // if(res.statusCode !== 200) {
                //     setError(res.message|| "có lỗi xảy ra")
                //     return
                // }
                // console.log(res.data)
                resp= res.data
                resp.userToken = res.data.id
                signIn(resp)
                
            })
            .catch(error =>{
                if (error.response.status === 401) setError(error.response.data.message)
                else setError("Có lỗi hệ thống xảy ra")
                console.log(error)
            })
            // console.log(data)
            // signIn(resp)
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now!</Text>
            </View>
            <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <ScrollView>
                <Text style={[styles.text_footer],{color: "red", textAlign: "center"}}>{error}</Text>
                <Text style={styles.text_footer}>Username</Text>
                <View style={styles.action}>
                    <FontAwesome 
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Họ tên ..."
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputNameChange(val)}
                    />
                    {data.check_textInputChange ? 
                    <Animatable.View
                        animation="bounceIn"
                    >
                        <Feather 
                            name="check-circle"
                            color="green"
                            size={20}
                        />
                    </Animatable.View>
                    : null}
                </View>

                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <MaterialIcons name="email" size={24} color="black" />
                    <TextInput 
                        placeholder="Email của bạn"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputEmailChange(val)}
                    />
                    {data.check_textEmailChange ? 
                    <Animatable.View
                        animation="bounceIn"
                    >
                        <Feather 
                            name="check-circle"
                            color="green"
                            size={20}
                        />
                    </Animatable.View>
                    : null}
                </View>

                <Text style={styles.text_footer}>Phone</Text>
                <View style={styles.action}>
                    <AntDesign name="phone" size={24} color="black" />
                    <TextInput 
                        placeholder="SĐT của bạn ..."
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputPhoneChange(val)}
                    />
                    {data.check_textPhoneChange ? 
                    <Animatable.View
                        animation="bounceIn"
                    >
                        <Feather 
                            name="check-circle"
                            color="green"
                            size={20}
                        />
                    </Animatable.View>
                    : null}
                </View>

                <Text style={[styles.text_footer, {
                    marginTop: 35
                }]}>Password</Text>
                <View style={styles.action}>
                    <Feather 
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Nhập mật khẩu"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ? 
                        <Feather 
                            name="eye-off"
                            color="grey"
                            size={20}
                        />
                        :
                        <Feather 
                            name="eye"
                            color="grey"
                            size={20}
                        />
                        }
                    </TouchableOpacity>
                </View>

                <Text style={[styles.text_footer, {
                    marginTop: 35
                }]}>Confirm Password</Text>
                <View style={styles.action}>
                    <Feather 
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Xác nhận mật khẩu"
                        secureTextEntry={data.confirm_secureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handleConfirmPasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateConfirmSecureTextEntry}
                    >
                        {data.secureTextEntry ? 
                        <Feather 
                            name="eye-off"
                            color="grey"
                            size={20}
                        />
                        :
                        <Feather 
                            name="eye"
                            color="grey"
                            size={20}
                        />
                        }
                    </TouchableOpacity>
                </View>

                <View style={styles.action}>
                    <Switch value={isSwitchOn} onValueChange={handleRoleChange}/>
                    <Text>Bạn muốn trở thành người đăng tin</Text>
                </View>
                
                <View style={styles.textPrivate}>
                    <Text style={styles.color_textPrivate}>
                        Đăng ký tài khoản là đồng ý với các điều khoản của chúng tôi về
                    </Text>
                    <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Điều khoản dịch vụ</Text>
                    <Text style={styles.color_textPrivate}>{" "}và</Text>
                    <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Chính sách bảo mật</Text>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => SignUp() }
                    >
                    <LinearGradient
                        colors={['#08d4c4', '#01ab9d']}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign, {
                            color:'#fff'
                        }]}>Sign Up</Text>
                    </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={[styles.signIn, {
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: '#009387'
                        }]}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </Animatable.View>
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
  });
