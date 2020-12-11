import React, { useEffect } from 'react';
import { View, ActivityIndicator, TouchableOpacity , Text, Dimensions , StyleSheet, TextInput} from 'react-native';
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign, EvilIcons } from '@expo/vector-icons'; 
import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import SyncStorage from 'sync-storage';

import { DrawerContent } from './screens/DrawerContent';
import MainTabScreen from './stack/MainTabScreen';
import SupportScreen from './screens/SupportScreen';
import SettingsScreen from './screens/SettingsScreen';
import BookmarkScreen from './screens/BookmarkScreen';

import { AuthContext } from './components/context';
import RootStackScreen from './stack/RootStackScreen';
import loginReducer from './reducers/user'

const Drawer = createDrawerNavigator();
const DEVICE_WIDTH = Dimensions.get('window').width

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null); 

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  // Khởi tạo trạng thái
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  // Chuyển giao diện màu
  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }
  
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }
  // Theme
  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
  // Login reducer
  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  //Tab search header
  const [dataQuery, setDataQuery] = React.useState('')
  const [current, setCurrent] = React.useState(true)

  // Bắt sựu kiện người dùng đăng nhập vào trang
  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {
      console.log("found user: "+ JSON.stringify(foundUser))
      const userToken = String(foundUser.userToken);
      const userName = foundUser.username;
      // SyncStorage.set('current', JSON.stringify(foundUser))
      try {
        await AsyncStorage.setItem('userToken', userToken);
        await AsyncStorage.setItem('currentuser', JSON.stringify(foundUser))
      } catch(e) {
        console.log(e);
      }
      userToken0 =  AsyncStorage.getItem('currentuser')

      console.log('user token: ', userToken0);
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async() => {
      // SyncStorage.remove('current')
      try {
        await AsyncStorage.removeItem('userToken');
        await AsyncStorage.removeItem('currentuser');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      // Xử lý đăng ký trên server
    },
    toggleTheme: () => {
      setIsDarkTheme( isDarkTheme => !isDarkTheme );
    }
  }), []);

  // Lưu phiên đăng nhập
  useEffect(() => {
    setTimeout(async() => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('currentuser');
      } catch(e) {
        console.log(e);
      }
      console.log('user token: ', userToken);
      // reducer
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if( loginState.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  

  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          { loginState.userToken !== null ? (
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} headerMode='none'/>} 
              screenOptions={({ navigation }) => ({
                header: () => (
                  <View style={styles.header}>
                    {current? 
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}> 
                      <AntDesign name="bars" size={24} color="black" style={{marginLeft: 10}}/>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => {
                      navigation.goBack()
                      setCurrent(!current)
                    }} >
                      <AntDesign name="back" size={24} color="black" style={{marginLeft: 10}}/>
                    </TouchableOpacity>
                    }
                      
                      <TextInput
                        placeholder="Tìm kiếm trên Fchotot ... "
                        onChangeText = {data=> setDataQuery(data)}
                        // value= {current?dataQuery:''}
                      />
                      {current? <AntDesign name="search1" size={24} color="black" onPress ={()=> {
                          navigation.navigate('Search', {dataQuery})
                          setCurrent(!current)
                        }}/>: null}
                    <TouchableOpacity onPress={() => navigation.navigate('Chat')}> 
                      <AntDesign name="message1" size={24} color="black" style={{marginRight: 10}}/>
                    </TouchableOpacity>
                  </View>
                )
              })}
              
            >
              <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />   
              <Drawer.Screen name="SupportScreen" component={SupportScreen} />
              <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
              <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
            </Drawer.Navigator>
          )
          :
            <RootStackScreen/> // Man fhinhf đăng nhập. đăng ký
          }
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
}

export default App;

const styles= StyleSheet.create({
  header: {
    alignItems: 'center',
    width: DEVICE_WIDTH-10,
    flexDirection: 'row',
    padding: 10,
    marginTop: 30,
    marginHorizontal: 5,
    marginBottom: 10,
    backgroundColor: '#009387',
    justifyContent: 'space-between'
  },
  searchBar: {
    flex: 1,
    height: 40,
    marginRight: 10,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingLeft: 10
  }
})
