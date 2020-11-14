import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';

const DetailScreen = ({navigation, route}) => {
     
    const {name, age, img } = (typeof route !== 'undefined'? route.params : '')
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Information</Text>
        <View>
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
export default DetailScreen