/* DO NOT EDIT THIS FILE !!! */

import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap';
import './scss/Main.scss';
import App from "./components/App/App";
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persistor, store} from "./redux_js/store";

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>,

    document.getElementById("root")
);

module.hot.accept();
