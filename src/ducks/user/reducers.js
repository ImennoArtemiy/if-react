import {LOGIN, LOGOUT} from "./actions";

export const initialState = {
    email:'valera@gmail.com',
    password:'valerasuper123',
    isLogged: false,
}

export const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN : {
            return {...state, isLogged: true}
        }
        case LOGOUT : {
            return {...state, isLogged: false}
        }
    }

    return {...state}
}
