import {SET_USER_NAME, SET_USER_PASSWORD} from './action';

const initialState ={
    userName: '',
    Password: ''
}

function userReducer(state = initialState, action) {
    switch(action.type) {
        case SET_USER_NAME:
            return {...state, userName: action.payload};
        case SET_USER_PASSWORD:
            return {...state, Password: action.payload};
        default:
            return state;
    }

}

export default userReducer;