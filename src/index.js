import React from 'react';
import '../src/assets/fonts/fonts.css'
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './views/App';
import {Provider} from "react-redux";
import store, {persiStore} from './redux/store'
import {PersistGate} from "redux-persist/integration/react";
import {Global} from "./styles/components";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persiStore}>
                <BrowserRouter>
                    <Global/>
                    <App/>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
