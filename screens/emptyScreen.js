import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const EmptyScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Chưa có chức năng này</Text>
        <Button
          title="Trở lại trang trước"
          onPress={() => {navigation.goBack()}}
        />
      </View>
    );
};

export default EmptyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  thongbao: {
      fontSize: 18,
      fontWeight: "bold",
      color: 'red'
  }
});
