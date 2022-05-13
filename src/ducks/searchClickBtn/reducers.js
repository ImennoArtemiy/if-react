import {handleActions} from 'redux-actions'
import {clickSearchBtn, resetAttemptClickSearchBtn} from "./actions";

export const initialState = {
    attemptToClickSearchBtn: 0
}

const searchClickReducer = {
    [clickSearchBtn]: (state = initialState) => ({
       ...state,
        attemptToClickSearchBtn: state.attemptToClickSearchBtn + 1,
    }),
    [resetAttemptClickSearchBtn]: (state = initialState) => ({
        ...state,
        attemptToClickSearchBtn: state.attemptToClickSearchBtn = 0,
    }),

}

export default handleActions(searchClickReducer, initialState)
