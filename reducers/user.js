const loginReducer = (prevState, action) => {
    switch( action.type ) {
        case 'RETRIEVE_TOKEN': 
            return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
        };
        case 'LOGIN': 
            return {
            ...prevState,
            userName: action.id,
            userToken: action.token,
            currentUser: action.currentUser,
            isLoading: false,
        };
        case 'LOGOUT': 
            return {
            ...prevState,
            userName: null,
            userToken: null,
            currentUser: null,
            isLoading: false,
        };
        case 'REGISTER': 
            return {
            ...prevState,
            userName: action.id,
            userToken: action.token,
            currentUser: action.currentUser,
            isLoading: false,
        };
    }
};

export default loginReducer