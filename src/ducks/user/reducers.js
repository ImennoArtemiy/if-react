import {handleActions} from 'redux-actions'
import {login, logout} from "./actions";

export const initialState = {
    email:'valera@gmail.com',
    password:'valerasuper123',
    isLogged: false,
}

const userReducer = {
    [login]: (state = initialState) => ({
        ...state,
        isLogged: true
    }),
    [logout]: (state = initialState) => ({
        ...state,
        isLogged: false
    })
}

export default handleActions(userReducer, initialState)
