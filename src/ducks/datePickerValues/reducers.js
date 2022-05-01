import {handleActions} from 'redux-actions'
import {startDate, endDate} from "./actions";

export const initialState = {
    dateFrom: Date.now(),
    dateTo: Date.now(),
}

const datePickerReducer = {
    [startDate]: (state = initialState, action) => ({
        ...state,
        dateFrom: action.payload,
    }),

    [endDate]: (state = initialState, action) => ({
        ...state,
        dateTo: action.payload,
    }),
}

export default handleActions(datePickerReducer, initialState)
