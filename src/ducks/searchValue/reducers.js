import {handleActions} from 'redux-actions'
import {changeValue} from "./actions";

export const initialState = ''

const searchValueReducer = {
    [changeValue] : (state = initialState, action) => action.payload
}

export default handleActions(searchValueReducer, initialState)
