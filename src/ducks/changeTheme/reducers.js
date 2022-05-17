import {handleActions} from 'redux-actions'
import {darkTheme, defaultTheme} from "./actions";
import {themes} from "../../data/siteConfig";

export const initialState = {
    theme: themes.default,
}

const changeThemeReducer = {

    [darkTheme]: (state = initialState.theme) => ({
        ...state,
        theme: themes.dark
    }),

    [defaultTheme]: (state = initialState) => ({
        ...state,
        theme: themes.default
    }),
}

export default handleActions(changeThemeReducer, initialState)
