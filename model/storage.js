import {AsyncStorage} from '@react-native-community/async-storage'

const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@currentuser', value)
    } catch (e) {
      // saving error
    }
}

const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@currentuser')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
}
    let user 
    getData()
    .then( res =>{
        console.log(res)
        user= res
    })
    .catch(err=> {
        console.log(err)
        user= {}
    })
    const u = JSON.parse(user)
    // {"id":6,"name":"phan thinh","email":"thinh1@edu.vn","mobile":"0998765327","password":"thinh","status":"pendding","role":"seller","avatar":"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png","follower":10,"following":5,"create_at":"2020-12-10T15:49:54.000Z","update_at":"2020-12-10T15:49:54.000Z","userToken":"pqthinh"}
    const data = {
        name:   u.name ,
        email:   u.email,
        phone: u.mobile ,
        avatar:    u.avatar,
        follower: u.follower,
        following: u.following
    }
// export default data