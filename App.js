import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import Main from './screens/MainScreen';
import ImageBrowser from './screens/ImageBrowserScreen';
import Example from './screens/chat';
import ImagePickerExample from './screens/image_picker';
// import Upload from './screens/uploadImage';

const stack = createStackNavigator()

const App = ({navigation}) => (
  <NavigationContainer>
    <stack.Navigator screenOptions={{
        headerShown: true
    }}>
        <stack.Screen name="home" component={Main}/>
        {/* <stack.Screen name="upload" component={Upload}/> */}
        <stack.Screen name="chat" component={Example}/>
        <stack.Screen name="image" component={ImageBrowser}/>
        <stack.Screen name="picker" component={ImagePickerExample}/>
    </stack.Navigator></NavigationContainer>
);
export default App

// Example of Image Picker in React Native
// https://aboutreact.com/example-of-image-picker-in-react-native/

// Import React
// import React, {useState} from 'react';
// // Import required components
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Image,
// } from 'react-native';

// // Import Image Picker
// import ImagePicker from 'react-native-image-picker';

// const App = () => {
//   const [filePath, setFilePath] = useState({});

//   const chooseFile = () => {
//     let options = {
//       title: 'Select Image',
//       customButtons: [
//         {
//           name: 'customOptionKey',
//           title: 'Choose Photo from Custom Option'
//         },
//       ],
//       storageOptions: {
//         skipBackup: true,
//         path: 'images',
//       },
//     };
//     ImagePicker.showImagePicker(options, (response) => {
//       console.log('Response = ', response);

//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log(
//           'User tapped custom button: ',
//           response.customButton
//         );
//         alert(response.customButton);
//       } else {
//         let source = response;
//         // You can also display the image using data:
//         // let source = {
//         //   uri: 'data:image/jpeg;base64,' + response.data
//         // };
//         setFilePath(source);
//       }
//     });
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <Text style={styles.titleText}>
//         Example of Image Picker in React Native
//       </Text>
//       <View style={styles.container}>
//         {/*<Image 
//           source={{ uri: filePath.path}} 
//           style={{width: 100, height: 100}} />*/}
//         <Image
//           source={{
//             uri: 'data:image/jpeg;base64,' + filePath.data,
//           }}
//           style={styles.imageStyle}
//         />
//         <Image
//           source={{uri: filePath.uri}}
//           style={styles.imageStyle}
//         />
//         <Text style={styles.textStyle}>
//           {filePath.uri}
//         </Text>
//         {/*
//           <Button
//             title="Choose File"
//             onPress={chooseFile} />
//         */}
//         <TouchableOpacity
//           activeOpacity={0.5}
//           style={styles.buttonStyle}
//           onPress={chooseFile}>
//           <Text style={styles.textStyle}>
//             Choose Image
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//   },
//   titleText: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     paddingVertical: 20,
//   },
//   textStyle: {
//     padding: 10,
//     color: 'black',
//   },
//   buttonStyle: {
//     alignItems: 'center',
//     flexDirection: 'row',
//     backgroundColor: '#DDDDDD',
//     padding: 5,
//   },
//   imageStyle: {
//     width: 200,
//     height: 200,
//     margin: 5,
//   },
// });
