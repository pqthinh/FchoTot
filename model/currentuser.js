import AsyncStorage from '@react-native-community/async-storage';
import React, { useState } from 'react'
const currentuser =  () =>{
    const [currentUser, setCurrentUser] = useState({})
    
    const id = setInterval(() => 
        AsyncStorage.getItem('currentuser', (errs, res)=>{
            if (!errs) {
                if (res !== null) {
                    setCurrentUser(JSON.parse(res))
                }
            }
        })
    , 15000);
    clearInterval(id); 

    return currentUser
}
export default currentuser