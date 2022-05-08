import {createStore} from "redux";
import rootReducer from "./rootReducer";
import {persistStore, persistReducer} from "redux-persist";
import LocalStorage from 'redux-persist/lib/storage'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const persistConfig = {
    key: 'root',
    storage: LocalStorage,
    blacklist: [],
    whitelist: ['user'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
    persistedReducer,
    composeEnhancer()
)


export const persistor = persistStore(store)

export default store
