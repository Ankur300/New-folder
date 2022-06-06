import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, LOADING, EMAIL_LOGIN_DATA } from '../types';

const initialState = {
    isLoggedIn: false,
    userRole: '',
    data: [],
    loading: false,
    loginData: {}
}

const authReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_SUCCESS:
            console.log('Payload data in auth reducer', payload);
            console.log('Payload data message in auth reducer', action.message);
            return {
                ...state,
                isLoggedIn: true,
                data: action.payload,
                userRole: action.message
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false
            }
        default:
            return state;
    }

}

export default authReducer;