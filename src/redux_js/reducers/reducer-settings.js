import {
    CHANGE_CURRENCY,
    CHANGE_PRICE,
    CHANGE_MODE,
    CHANGE_DEFAULT_NAVBAR,
    CHANGE_DATE_RANGE
} from "../constants/action-types";

const initialState= {
    mode: 'daymode',
    price: '0.3',
    currency: '€',
    navbar: 'Collapsed',
    daterange: 'week'
};

export default function (state = initialState, action){
    const newState = { ...state };

    switch(action.type){
        case CHANGE_MODE:
            newState.mode=action.payload;
            return newState;

        case CHANGE_PRICE:
            if (action.payload === '')
                return newState;
            newState.price = action.payload;
            return newState;

        case CHANGE_CURRENCY:
            newState.currency=action.payload;
            return newState;

        case CHANGE_DEFAULT_NAVBAR:
            newState.navbar=action.payload;
            return newState;
        case CHANGE_DATE_RANGE:
            newState.daterange = action.payload;
            return newState;

        default: return state;

    }
    return state;
}

