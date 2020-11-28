import { AssetsSelector } from 'expo-images-picker'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import {View, Text, ScrollView} from 'react-native'

export default function PickerImage({navigation}) {
    const onDone = (data) => {
        // console.log(data)
        navigation.navigate("Postnews", {data})
    }
    const goBack = ()=>{
        navigation.goBack()
    }
    return (
        <View>
            <ScrollView>
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
                    widgetBgColor: "black",
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
                        buttonBgColor: "#000",
                        buttonTextColor: "#ffffff50",
                        midTextColor: "black",
                        backFunction: goBack,
                        doneFunction: data => onDone(data),
                    }
                }}
            />
            </ScrollView>
        </View>
    )
}
