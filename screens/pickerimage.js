import React from 'react'
import { AssetsSelector } from 'expo-images-picker'
import {Ionicons} from '@expo/vector-icons'
import {SafeAreaView, Text, StyleSheet} from 'react-native'

export default function PickerImage({navigation}) {
    const onDone = (data) => {
        // console.log(data)
        navigation.navigate("Postnews", {data})
    }
    const goBack = ()=>{
        navigation.goBack()
    }
    return (
        <SafeAreaView style={ styles.container}>
            <Text>Chọn ảnh cho tin đăng</Text>
            <AssetsSelector
                options={{
                    assetsType: ['photo', 'video'],
                    noAssetsText: 'No media found.',
                    maxSelections: 5,
                    margin: 3,
                    portraitCols: 4,
                    landscapeCols: 5,
                    widgetWidth: 100,
                    widgetBgColor: "#BDC3C7",
                    selectedBgColor: "#f0f0f0",
                    videoIcon: {
                        Component: Ionicons,
                        iconName: 'ios-videocam',
                        color: 'red',
                        size: 20,
                    },
                    selectedIcon: {
                        Component: Ionicons,
                        iconName: 'ios-checkmark-circle-outline',
                        color: "green",
                        bg: "#ffffff50",
                        size: 60,
                    },
                    defaultTopNavigator: {
                        continueText: 'Finish',
                        goBackText: 'Back',
                        buttonBgColor: "#1BBC9B",
                        buttonTextColor: "#ECF0F1",
                        midTextColor: "#ECF0F1",
                        backFunction: goBack,
                        doneFunction: data => onDone(data),
                    }
                }}
            />
            </SafeAreaView>
    )
}

const styles =  StyleSheet.create({
    container: {
        flex:1
    }
})