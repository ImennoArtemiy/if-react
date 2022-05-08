import {initialState as initialUserState} from "../ducks/user/reducers";
import {initialState as initialSelectState} from "../ducks/selectsValue/reducers";

const initialState = {
    user: initialUserState,
    selectValues: initialSelectState,
}

export default initialState
