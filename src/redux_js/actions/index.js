import {CHANGE_CURRENCY, CHANGE_PRICE, CHANGE_MODE, CHANGE_GRAPHTYPE, CHANGE_COLORTYPE} from "../constants/action-types";


export const changeMode = (mode) => {
    return {type: CHANGE_MODE, payload: mode}
};

export const changePrice = (price) => {
    return {type: CHANGE_PRICE, payload: price}
};

export const changeCurrency = (currency) => {
    return {type: CHANGE_CURRENCY, payload: currency}
};

export const changeGraphtype = (graphtype) => {
    return {type: CHANGE_GRAPHTYPE, payload: graphtype}
};

export const changeColortype = (colortype) => {
    return {type: CHANGE_COLORTYPE, payload: colortype}
};



