import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const TatCaTin = () =>{
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chưa cập nhật</Text>
    </View>
  )
}
const TinChoDuyet = () =>{ 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chưa có api</Text>
    </View>
  )
}
const TinDangBan = () =>{ 
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Chưa có api</Text>
      </View>
    )
}
const TinDaBan = () =>{ 
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Chưa có api</Text>
      </View>
    )
}

const SellerPostScreen = ({navigation, route}) => {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Tất cả" component={TatCaTin} />
          <Tab.Screen name="Đang bán" component={TinDangBan} />
          <Tab.Screen name="Chờ duyệt" component={TinChoDuyet} />
          <Tab.Screen name="Đã bán" component={TinDaBan} />
        </Tab.Navigator>
    );
};

export default SellerPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'red'
  },
});

// import React from 'react'
// import {ScrollView, View, Text, StyleSheet, Image} from 'react-native'
// import { AntDesign } from '@expo/vector-icons';

// const SellerPostScreen = ({navigation, props}) =>{
//     return (
//         <ScrollView>
//             {/* Trang tôi bán / quản lý tin đã đang bán bao gồm cả đã duyệt và đang duyệt */}
//             <AntDesign name="back" size={24} color="black" onPress={()=> navigation.goBack()} style={styles.iconExit}/>
//             <View style={styles.container}>
//                 <View style={styles.container}>
//                     <Image
//                         style={{width: '100%', height: 200}}
//                         source={{uri: 'https://i.pinimg.com/236x/39/93/57/399357dd099ace63be681fce3ca08730.jpg'}}
//                     />
//                     <Text style={{color: 'red', fontSize: 20, }}>Pham Quang Thinh</Text>
//                 </View>

//             </View>
//             <View style={styles.box}>
//                 <Text> Màn hình trang Tôi bán</Text>

//             </View>
//         </ScrollView>

//     )
// }

// export default SellerPostScreen

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop: 20
//     },
//     box: {
//         height: 100
//     },
//     iconExit: {
//         position: 'absolute',
//         left: 2,
//         top: 2
//     }
// })