import {combineReducers} from 'redux';
import settingReducer from './reducer-settings';
import homeReducer from './homeReducer'

const allReducers = combineReducers({
    settings: settingReducer,
    home: homeReducer
});

export default  allReducers;