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
