import {handleActions} from 'redux-actions'

export const initialState = {
    hotels: [],
}

const hotelsReducer = {
    ["GET_DATA_HOTELS"]: (state, action) => ({
        ...state,
        hotels: [
            ...action.payload
        ]
    }),
}

export default handleActions(hotelsReducer, initialState)
