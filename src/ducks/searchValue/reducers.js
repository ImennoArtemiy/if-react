import {handleActions} from 'redux-actions'
import {changeValue} from "./actions";

export const initialState = {
    value: '',
}

const searchValueReducer = {
    [changeValue] : (state = initialState, action) => ({
        ...state,
        value: action.payload
    })
}

export default handleActions(searchValueReducer, initialState)
