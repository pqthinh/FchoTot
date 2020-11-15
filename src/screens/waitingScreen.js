import React from 'react'
import {View, ImageBackground, Image, StyleSheet, Text} from 'react-native'

export default function WaitingScreen() {
    return (
        <View>
            <Image  style={styles.image} source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEX/ZgAqRcUWAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII='}}/>
            <Text style={{position: 'absolute', top: '50%', left: '35%', fontSize: 30, color: '#fff'}}>pqthinh...</Text>
        </View>
        // <View style={styles.container}>
        //     <ImageBackground source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEX/ZgAqRcUWAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII='}} style={styles.image}>
        //         <Image
        //             style={{ width: Platform.OS != 'web' ?  150 : 200, resizeMode: "contain", height: Platform.OS =='web'? 40: 35 }}
        //             source={{uri: 'https://static.chotot.com/storage/marketplace/transparent_logo.png'}}
        //         />
        //     </ImageBackground>
        // </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    },
    container: {
        flex: 1,
        flexDirection: "column"
    },
    bgimage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }
})


// import React from "react";
// import { ImageBackground, StyleSheet, Text, View } from "react-native";

// const image = { uri: "https://reactjs.org/logo-og.png" };

// export default function WaitingScreen() {
//     return (
//         <View style={styles.container}>
//     <ImageBackground source={image} style={styles.image}>
//       <Text style={styles.text}>Inside</Text>
//     </ImageBackground>
//   </View>
//     )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column"
//   },
//   image: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center",
//     height: '100%',
//     width: '100%'
//   },
//   text: {
//     color: "white",
//     fontSize: 42,
//     fontWeight: "bold",
//     textAlign: "center",
//     backgroundColor: "#000000a0"
//   }
// });
