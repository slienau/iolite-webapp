import {combineReducers} from 'redux';
import settingReducer from './reducer-settings';
const allReducers = combineReducers({
    settings: settingReducer
});


export default  allReducers;