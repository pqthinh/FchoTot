// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({props, navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button 
        title="go to detail"
        onPress={()=> navigation.navigate('Detail', {name: 'pqthinh', age: 20, img: ''})}
      />
      <Text>{JSON.stringify(props)}</Text>
    </View>
  );
}
function DetailsScreen({navigation, route}) {
  const {name, age, img } = route? route.params : ''
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Information</Text>
      <View>
  <Text>obj: {JSON.stringify(route.params)}</Text>
  <Text>Name: {name}</Text>
  <Text>Name: {age}</Text>
  <Image style={{height: 100, width: 200, justifyContent: 'center', marginVertical: 20, alignItems: 'center', marginHorizontal: 20}} source={{uri: 'https://scontent.fhan2-5.fna.fbcdn.net/v/t1.0-1/cp0/p32x32/123102792_1333171907023591_1185981790243644798_n.jpg?_nc_cat=107&ccb=2&_nc_sid=7206a8&_nc_ohc=d1my6y_TIIIAX_JhQ95&_nc_ht=scontent.fhan2-5.fna&tp=27&oh=31e796b6fba01c5b5335cd9ee1305553&oe=5FD3D2B1'}}/>
      </View>
      <Button
        title="go home"
        onPress= {()=> navigation.navigate('Home',{id: 3})}
      />
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Detail',{})}
      />
      <Button
      title="back"
      onPress ={()=> navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"  options = {{title: 'Over View'}}>
          {props => <HomeScreen {...props} data={'home'} />}
          
        </Stack.Screen>
          
        
        <Stack.Screen name="Detail" component={DetailsScreen} initialParams={{ itemId: 42 }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;