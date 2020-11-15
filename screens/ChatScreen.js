import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ChatDetailsScreen = ({navigation, route}) => {
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <Text>{JSON.stringify(route.params)}</Text>
        <Text>Chat Details</Text>
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

export default ChatDetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
