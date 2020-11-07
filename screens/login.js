import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Icon } from 'react-native-elements';

// https://fonts.google.com/specimen/Nunito+Sans
import { useFonts } from 'expo-font';
import NSLight from '../assets/fonts/NunitoSans/NunitoSans-Light.ttf';
import NSRegular from '../assets/fonts/NunitoSans/NunitoSans-Regular.ttf';
import NSBold from '../assets/fonts/NunitoSans/NunitoSans-Bold.ttf';
import NSExtraBold from '../assets/fonts/NunitoSans/NunitoSans-ExtraBold.ttf';

export default function LoginScreen() {
    const [loaded] = useFonts({
        NSLight,
        NSRegular,
        NSBold,
        NSExtraBold,
    });

    const [activeTab, setActiveTab] = useState('Login');

    useEffect(function () {
        StatusBar.setBarStyle('light-content', true);
    }, []);

    function switchTab() {
        if (activeTab === 'Login') {
        setActiveTab('Register');
        } else {
        setActiveTab('Login');
        }
    }

    function Login() {
        const [showLoginPassword, setShowLoginPassword] = useState(false);

        return (
        <View style={{ marginTop: 10 }}>
            <View style={styles.inputView}>
            <Icon
                style={{ paddingHorizontal: 4 }}
                name='envelope'
                type='font-awesome'
                color='#fff'
                size={22}
            />
            <TextInput
                style={styles.input}
                placeholder='Email'
                placeholderTextColor='#f1f2f6'
                keyboardType='email-address'
                textContentType='emailAddress'
                autoCapitalize={false}
                autoCompleteType='email'
                returnKeyType='next'
            />
            </View>
            <View style={styles.inputView}>
            <Icon
                style={{ paddingHorizontal: 4 }}
                name='key'
                type='font-awesome-5'
                color='#fff'
                size={22}
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
                placeholderTextColor='#f1f2f6'
                secureTextEntry={!showLoginPassword}
                textContentType='password'
                returnKeyType='done'
            />
            <TouchableOpacity
                style={{ paddingVertical: 4 }}
                onPress={() => {
                setShowLoginPassword(!showLoginPassword);
                }}
            >
                <Icon
                style={{ paddingHorizontal: 4 }}
                name='eye'
                type='font-awesome'
                color='#fff'
                size={22}
                />
            </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
            <View style={styles.socialLoginView}>
            <TouchableOpacity style={styles.socialLoginTouchable}>
                <Icon name='google' type='font-awesome' color='#F16529' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialLoginTouchable}>
                <Icon name='facebook' type='font-awesome' color='#F16529' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialLoginTouchable}>
                <Icon name='apple' type='font-awesome' color='#F16529' />
            </TouchableOpacity>
            </View>
        </View>
        );
    }

    function Register() {
        const [showRegisterPassword, setShowRegisterPassword] = useState(false);
        return (
        <View style={{ marginTop: 10 }}>
            <View style={styles.inputView}>
            <Icon
                style={{ paddingHorizontal: 4, width: 30 }}
                name='user'
                type='font-awesome'
                color='#fff'
                size={22}
            />
            <TextInput
                style={styles.input}
                placeholder='Full Name'
                placeholderTextColor='#f1f2f6'
                textContentType='name'
                autoCompleteType='name'
                returnKeyType='next'
            />
            </View>
            <View style={styles.inputView}>
            <Icon
                style={{ paddingHorizontal: 4, width: 30 }}
                name='envelope'
                type='font-awesome'
                color='#fff'
                size={22}
            />
            <TextInput
                style={styles.input}
                placeholder='Email'
                placeholderTextColor='#f1f2f6'
                keyboardType='email-address'
                textContentType='emailAddress'
                autoCapitalize={false}
                autoCompleteType='email'
                returnKeyType='next'
            />
            </View>
            <View style={styles.inputView}>
            <Icon
                style={{ paddingHorizontal: 4, width: 30 }}
                name='phone'
                type='font-awesome'
                color='#fff'
                size={22}
            />
            <TextInput
                style={styles.input}
                placeholder='Phone'
                placeholderTextColor='#f1f2f6'
                keyboardType='phone-pad'
                returnKeyType='next'
            />
            </View>
            <View style={styles.inputView}>
            <Icon
                style={{ paddingHorizontal: 4, width: 30 }}
                name='key'
                type='font-awesome-5'
                color='#fff'
                size={22}
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
                placeholderTextColor='#f1f2f6'
                secureTextEntry={!showRegisterPassword}
                textContentType='password'
                returnKeyType='done'
            />
            <TouchableOpacity
                style={{ paddingVertical: 4 }}
                onPress={() => {
                setShowRegisterPassword(!showRegisterPassword);
                }}
            >
                <Icon
                style={{ paddingHorizontal: 4 }}
                name='eye'
                type='font-awesome'
                color='#fff'
                size={22}
                />
            </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <View>
            <Text
                style={{
                marginHorizontal: 20,
                marginTop: 30,
                fontSize: 18,
                color: '#fff',
                fontFamily: 'NSBold',
                }}
            >
                Or Register with
            </Text>
            <View
                style={[
                styles.socialLoginView,
                { marginTop: 14, justifyContent: 'flex-start' },
                ]}
            >
                <TouchableOpacity
                style={[styles.socialLoginTouchable, { marginLeft: 0 }]}
                >
                <Icon name='google' type='font-awesome' color='#F16529' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialLoginTouchable}>
                <Icon name='facebook' type='font-awesome' color='#F16529' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialLoginTouchable}>
                <Icon name='apple' type='font-awesome' color='#F16529' />
                </TouchableOpacity>
            </View>
            </View>
        </View>
        );
    }

    if (!loaded) {
        return (
        <View>
            <Text>Loading...</Text>
        </View>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <LinearGradient colors={['#E44D26', '#F16529']} style={styles.container}>
            <Text style={styles.welcomeText}>
            {activeTab === 'Login' ? 'Welcome Back' : 'Register Now'}
            </Text>
            <View style={styles.switchTabsView}>
            <TouchableOpacity
                style={{
                borderBottomWidth: activeTab === 'Login' ? 4 : 0,
                borderBottomColor: '#fff',
                paddingHorizontal: 4,
                marginRight: 14,
                }}
                onPress={() => switchTab()}
            >
                <Text style={styles.switchText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                borderBottomWidth: activeTab === 'Register' ? 4 : 0,
                borderBottomColor: '#fff',
                paddingHorizontal: 4,
                marginRight: 14,
                }}
                onPress={() => switchTab()}
            >
                <Text style={styles.switchText}>Register</Text>
            </TouchableOpacity>
            </View>
            {activeTab === 'Login' ? <Login /> : <Register />}
        </LinearGradient>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
    },
    welcomeText: {
        alignSelf: 'center',
        fontSize: 40,
        fontFamily: 'NSLight',
        marginTop: 10,
        color: '#fff',
    },
    switchTabsView: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    switchText: {
        padding: 2,
        fontSize: 20,
        color: '#fff',
        fontFamily: 'NSExtraBold',
    },
    inputView: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        marginTop: 10,
        marginHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 16,
        fontFamily: 'NSLight',
        paddingHorizontal: 4,
        color: '#fff',
    },
    button: {
        marginHorizontal: 20,
        backgroundColor: '#fafafa',
        marginTop: 12,
        paddingVertical: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: { fontFamily: 'NSRegular', fontSize: 16, color: '#E44D26' },
    forgotPasswordText: {
        marginHorizontal: 20,
        marginTop: 20,
        alignSelf: 'flex-end',
        color: '#fff',
        fontSize: 18,
        fontFamily: 'NSBold',
    },
    socialLoginView: {
        marginTop: 40,
        marginHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    socialLoginTouchable: {
        backgroundColor: '#fff',
        width: 40,
        height: 40,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 8,
    },
});