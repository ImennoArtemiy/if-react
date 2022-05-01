import {combineReducers} from "redux";
import userReducer from "../ducks/user/reducers";
import hotelsReducer from "../ducks/hotels/reducers"
import datePickerReducer from "../ducks/datePickerValues/reducers"
import selectReducer from "../ducks/selectsValue/reducers"
import searchReducer from "../ducks/search/reducers"

export default combineReducers({
    user: userReducer,
    hotel: hotelsReducer,
    datePickerValues: datePickerReducer,
    selectValue: selectReducer,
    search: searchReducer,
})
