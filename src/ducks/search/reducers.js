import {handleActions} from 'redux-actions'

export const initialState = {
    try: 0
}

const searchReducer = {
    ["SEARCH"]: (state = initialState) => ({
       ...state,
        try: state.try + 1,

    })
}

export default handleActions(searchReducer, initialState)
