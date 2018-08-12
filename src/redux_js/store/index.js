import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "../reducers/index";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['settings'], // persist only 'settings'
    stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};
const pReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

export const store = createStore(
    pReducer,
    compose(
        applyMiddleware(...middleware)
       // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Redux DevTools
    )
);
export const persistor = persistStore(store);
