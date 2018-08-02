import {CHANGE_CURRENCY, CHANGE_PRICE, CHANGE_MODE, CHANGE_DEFAULT_NAVBAR, CHANGE_DATE_RANGE} from "../constants/action-types";


export const changeMode = (mode) => {
    return {type: CHANGE_MODE, payload: mode}
};

export const changePrice = (price) => {
    console.log('unexpected hello');
    return {type: CHANGE_PRICE, payload: price}
};

export const changeCurrency = (currency) => {
    return {type: CHANGE_CURRENCY, payload: currency}
};

export const changeNavbarDefault = (navbarDefault) => {
    return {type: CHANGE_DEFAULT_NAVBAR, payload: navbarDefault}
};

export const changeDateRange = (dateRange) => {
    return {type: CHANGE_DATE_RANGE, payload: dateRange}
};



