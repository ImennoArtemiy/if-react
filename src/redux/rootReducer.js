import {combineReducers} from "redux";
import userReducer from "../ducks/user/reducers";
import datePickerReducer from "../ducks/datePickerValues/reducers"
import selectReducer from "../ducks/selectsValue/reducers"
import searchClickReducer from "../ducks/searchClickBtn/reducers"
import changeThemeReducer from '../ducks/changeTheme/reducers'
import searchValueReducer from '../ducks/searchValue/reducers'

export default combineReducers({
    user: userReducer,
    datePickerValues: datePickerReducer,
    selectValue: selectReducer,
    searchClickBtn: searchClickReducer,
    searchValue: searchValueReducer,
    changeTheme: changeThemeReducer,
})
