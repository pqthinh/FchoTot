{/* < Searchbar
    placeholder="Search"
    // onChangeText={}
    value={'skjafnasllsdkamfsadlkf'}
    // onPress={()=> navigation.navigate('Search')}
    onFocus ={()=> navigation.navigate('Search')}
    style={{
    paddingHorizontal: 6,
    color: '#c1c1c1',
    fontSize: 16,
    backgroundColor: '#fff',
    width: DEVICE_WIDTH - 200
    }}
/>

<EvilIcons name="search" size={24} color="black" />


headerLeft: () => <TouchableOpacity onPress={() => navigation.toggleDrawer()}> 
                    <AntDesign name="bars" size={24} color="black" style={{marginLeft: 10}}/>
                  </TouchableOpacity>,
                  headerLeftContainerStyle: { paddingLeft: 10 } ,

                headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('Chat')}> 
                    <AntDesign name="message1" size={24} color="black" style={{marginRight: 10}}/>
                  </TouchableOpacity>,
                  headerLeftContainerStyle: { paddingLeft: 10 },
                headerStyle: {
                  backgroundColor: 'tomato'
                } */}