import {handleActions} from 'redux-actions'
import {changeSelect, deleteSelect} from "./actions";

export const initialState = {
    selectValues:[],
}

const selectReducer = {
    [changeSelect]: (state = initialState, action) => ({
            ...state,
            selectValues: [...state.selectValues.slice(0, action.payload.index), action.payload.value,
                ...state.selectValues.slice(action.payload.index + 1)]
        }
    ),

    [deleteSelect]: (state = initialState) => ({
        ...state,
       selectValues:[...state.selectValues.slice(0,-1)]
    })

}

export default handleActions(selectReducer, initialState)

