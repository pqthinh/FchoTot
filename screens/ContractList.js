import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ContractScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
          
        <Text>List Contract</Text>
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

export default ContractScreen

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
