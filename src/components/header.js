import React from 'react';
import {
    Dimensions,
    StyleSheet,
    View,
    Text,
    Button,
    StatusBar,
    TouchableOpacity,
    TextInput
} from 'react-native';
import SearchHeader from 'react-native-search-header';
import Ionicons from 'react-native-vector-icons/Ionicons';
 
const DEVICE_WIDTH = Dimensions.get(`window`).width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
    },
    status: {
        zIndex: 10,
        elevation: 2,
        width: DEVICE_WIDTH,
        height: 21,
        backgroundColor: '#0097a7'
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        width: DEVICE_WIDTH,
        height: 60,
        marginBottom: 6,
        backgroundColor: '#00bcd4'
    },
    searchBarView: {
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        backgroundColor: 'tomato'
    },
    searchBar: {
        flex: 1,
        height: 40,
        marginRight: 10,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingLeft: 10
    },
    label: {
        flexGrow: 1,
        fontSize: 20,
        fontWeight: `600`,
        textAlign: `left`,
        marginVertical: 8,
        paddingVertical: 3,
        color: `#f5fcff`,
        backgroundColor: `transparent`
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 130,
        height: 40,
        marginTop: 40,
        borderRadius: 2,
        backgroundColor: `#ff5722`
    }
});

export default class HeaderComponent extends React.Component{
    constructor(props) {
        super(props)
    }
    render () { 
        return (
            <View style = { styles.container }>
                <StatusBar barStyle = 'light-content' />
                <View style = { styles.searchBarView }>
                    <View style= {styles.searchBar}>
                        <Ionicons name='ios-search' size={22} color='#000' />
                        <TextInput style={{
                                paddingHorizontal: 6,
                                color: '#c1c1c1',
                                fontSize: 16,
                                backgroundColor: '#fff',
                                width: DEVICE_WIDTH - 100
                            }}
                            placeholder= ' Tìm kiếm'
                            placeholderTextColor ='#c1c1c1'
                            onFocus = {() => this.searchHeader.show()}
                        />
                    </View>
                    <TouchableOpacity>
                        <Ionicons name="ios-chatbubbles" size={30} color='#fff'/>
                    </TouchableOpacity>
                </View>
                <SearchHeader
                    // ref = {(searchHeader) => {
                    //     this.searchHeader = searchHeader;
                    // }}
                    placeholder = 'Tìm kiếm ...'
                    placeholderColor = 'gray'
                    pinnedSuggestions = {[ `react-native-search-header`, `react-native`, `javascript` ]}
                    // onClear = {() => {
                    //     this.searchHeader.clear()
                    //     console.log("Clear suggest data")
                    // }}
                    onGetAutocompletions = {async (text) => {
                        if (text) {
                            const response = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&q=${text}`, {
                                method: `get`,
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                }
                            });
                            const data = await response.json();
                            return data[1];
                        } else {
                            return [];
                        }
                    }}
                />
                
            </View>
        );
    }
    
}