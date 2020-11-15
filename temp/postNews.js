// import React from 'react'
// import {View, Text, Image} from 'react-native'
// import {createStackNavigator} from '@react-navigation/stack'
// import {NavigationContainer} from '@react-navigation/native'

// const Stack = createStackNavigator()


import React from 'react';
import { SafeAreaView, Image, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

var selectedRow = null;
const DATA = [
    {
        id:0,
        title: 'Tất cả danh mục',
        img: 'https://static.chotot.com/storage/categories/all-category-v3/0.png'
    },
    {
        id: 1,
        title: 'Nhà đất',
        img: 'https://static.chotot.com/storage/categories/all-category-v3/0.png'
    },
    {
        id: 2,
        title: 'Xe cộ',
        img: 'https://static.chotot.com/storage/categories/all-category-v3/0.png'
    },
    {
        id: 3,
        title: 'Đồ điện tử',
        img: 'https://static.chotot.com/storage/categories/all-category-v3/0.png'
    },
];

const Item = ({item }) => (
  
    <View
      style={{
        margin: 4,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        // borderWidth: 1,
        borderBottomWidth: 0.5
      }}
    >
      <View>
        <Image
          style={{ width: 25, height: 25, borderRadius: 20 }}
          source={{ uri: item.img }}
        />
      </View>
      <View style={{ flex: 1, paddingHorizontal: 10 }}>
        <Text
          style={{ fontSize: 14 }}
        >{item.title}</Text>
      </View>
      <AntDesign name="right" size={20} color="black" />
    </View>
);

export default function GetCategory () {
  const [selectedId, setSelectedId] = React.useState(null)

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff"

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id)
          console.log(selectedId)
          alert(selectedId)
        }}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});




// import React, { useEffect } from 'react';
// import { StyleSheet, Image, View, Dimensions, Platform, Text, ScrollView } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

// const platform = Platform.OS;

// const Width = platform == 'web' ? Dimensions.get('window').width*0.8: Dimensions.get('window').width;
// const Height = platform == 'web' ? 40 : 40;
 
// const images = [
//     { title: require('../assets/images/tien-ich/luu-tru.jpg'),content: 'Tin đã lưu'},
//     { title: require('../assets/images/tien-ich/nap-tien.jpg'),content: 'Nạp tiền'},
//     { title: require('../assets/images/tien-ich/sao.jpg'),content: 'Ưu đãi'},
//     { title: require('../assets/images/tien-ich/tin-dac-biet.jpg'),content: 'Tin đặc biệt'},
//     { title: require('../assets/images/tien-ich/tin-quan-tam.jpg'),content: 'Tin quan tâm'}
// ];
// function renderPage(props) {
//     useEffect(()=> {
//         // console.log(props)
//         // console.log(JSON.stringify(navigation))
//     })
//     return (
//         <View key={props.title} style={{  marginRight: platform=='web'? 100: 10, marginLeft: 10,  flexDirection: platform !='web' ? 'row' : '',}}>
//             <TouchableOpacity
//                 // onPress={()=> navigation.navigate("Bookmarks")}
//             >
//                 <View style={styles.box}>
//                     <Image style={{ width: Height, height: Height, alignItems: 'center', justifyContent: 'center'}} source={props.title} />
//                     <Text style={styles.text}>{props.content}</Text>
//                 </View>
//             </TouchableOpacity>
//         </View>
//         // <Text>Hello</Text>
//     );
// }

// export default function ExtendComponent () {
//     return (
//         <View style={styles.container}>
//             <ScrollView
//                 horizontal
//                 showsHorizontalScrollIndicator={false}
//             >
//                 {images.map((x) => {
//                     // console.log(x.title)
//                     renderPage(x)
//                 })}
//             </ScrollView>
//         </View>
//     );
// }
 
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         maxWidth: platform == 'web' ? 1200 : '100%',
//         alignItems: 'center',
//         paddingLeft: platform == 'web' ? Width*0.1 : 0,
//         alignContent: 'center',
//         flexDirection: 'row',
//         justifyContent: 'center',
//         backgroundColor: '#fff',
//         marginBottom: 5
//     },
//     box: {
//         height: 100,
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     text: {
//         width: 80,
//         textAlign: 'center',
//         marginTop: 2,
//         height: 35
//     }
// });

// import React from 'react';
// import { StyleSheet, Image, View, Dimensions, Platform, Text, ScrollView } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

// const platform = Platform.OS;

// const Width = platform == 'web' ? Dimensions.get('window').width*0.8: Dimensions.get('window').width;
// const Height = platform == 'web' ? 40 : 40;
 
// const images = [
//     { title: require('../assets/images/tien-ich/luu-tru.jpg'),content: 'Tin đã lưu'},
//     { title: require('../assets/images/tien-ich/nap-tien.jpg'),content: 'Nạp tiền'},
//     { title: require('../assets/images/tien-ich/sao.jpg'),content: 'Ưu đãi'},
//     { title: require('../assets/images/tien-ich/tin-dac-biet.jpg'),content: 'Tin đặc biệt'},
//     { title: require('../assets/images/tien-ich/tin-quan-tam.jpg'),content: 'Tin quan tâm'}
// ];

// export default function ExtendComponent ({navigation}) {
//     return (
//         <View style={styles.container}>
//             <ScrollView
//                 horizontal
//                 showsHorizontalScrollIndicator={false}
//             >
//                 {images.map((x, index) => {
//                     {console.log(x)}
//                     // renderPage(navigation, x)
                    
//                         <TouchableOpacity key={index}
//                             onPress={()=> navigation.navigate("Bookmarks")}
//                         >
//                             <View style={styles.box}>
//                                 <Image style={{ width: Height, height: Height, alignItems: 'center', justifyContent: 'center'}} source={x.title} />
//                                 <Text style={styles.text}>{x.content}</Text>
//                             </View>
//                         </TouchableOpacity>
                    
//                 })}
//             </ScrollView>
//         </View>
//     );
// }
 
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         maxWidth: platform == 'web' ? 1200 : '100%',
//         alignItems: 'center',
//         paddingLeft: platform == 'web' ? Width*0.1 : 0,
//         alignContent: 'center',
//         flexDirection: 'row',
//         justifyContent: 'center',
//         backgroundColor: 'red',
//         marginBottom: 5,
//         height: 100,
//         // marginVertical:100
//     },
//     box: {
//         height: 100,
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     text: {
//         width: 80,
//         textAlign: 'center',
//         marginTop: 2,
//         height: 35
//     }
// });