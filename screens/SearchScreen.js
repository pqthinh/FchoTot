import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SearchScreen = ({navigation, route}) => {
    return (
      <View>
        <Text>data: {JSON.stringify(route?.params)}</Text>
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
  
export default SearchScreen;


// import React, {useState, useEffect} from 'react'
// import {View, Text} from 'react-native'
// import { Button } from 'react-native-button'

// const SearchScreen = ({navigation})=> {
//     // const [data, setData] = useState(null)
//     return (
//         <View>
//             <Text>{JSON.stringify(route?.params)}</Text>
//             <Button
//                 style={{fontSize: 20, color: 'green'}}
//                 styleDisabled={{color: 'red'}}
//                 onPress={() => navigation.navigate('Chat')}
//             >
//                 Go Details sp
//             </Button>
//         </View>
//     );
// };

// export default SearchScreen