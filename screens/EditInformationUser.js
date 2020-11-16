import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { List, Avatar , Divider, Paragraph, Title, Caption } from 'react-native-paper';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const EditInforationScreen = ({navigation, route}) => {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <MaterialCommunityIcons name="keyboard-backspace" size={24} color="black" onPress={() => {navigation.goBack()}}/>
          <Text>Chỉnh sửa thông tin</Text>
        </View>
        
        


        <Button
            title="Go to home"
            onPress={() => navigation.navigate("Home")}
        />
        <Button
            title="Go back"
            onPress={() => navigation.goBack()}
        />
      </View>
    );
};

export default EditInforationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
