import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

class EmptyScreen extends Component {
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="small" color="#0000ff" />
      <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default EmptyScreen;

// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// const EmptyScreen = ({navigation}) => {
//     return (
//       <View style={styles.container}>
//         <Text>Chưa có chức năng này</Text>
//         <Button
//           title="Trở lại trang trước"
//           onPress={() => {navigation.goBack()}}
//         />
//       </View>
//     );
// };

// export default EmptyScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     alignItems: 'center', 
//     justifyContent: 'center'
//   },
//   thongbao: {
//       fontSize: 18,
//       fontWeight: "bold",
//       color: 'red'
//   }
// });
