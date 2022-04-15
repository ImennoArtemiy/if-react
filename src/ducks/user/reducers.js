import {LOGIN, LOGOUT} from "./actions";

export const initialState = {
    email:'valera@gmail.com',
    password:'valerasuper123',
    isLogged: false,
}

export const userReducer = (state = initialState, action) => {
    if (action.type === LOGIN) {
        return {...state, isLogged: true}
    }
    if (action.type === LOGOUT) {
        return {...state, isLogged: false}
    }

    return {...state}
}
