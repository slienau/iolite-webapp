import {
    CHANGE_CURRENCY,
    CHANGE_PRICE,
    CHANGE_MODE,
    CHANGE_GRAPHTYPE,
    CHANGE_COLORTYPE
} from "../constants/action-types";

const initialState= {
    mode: 'daymode',
    price: '0.3',
    currency: '€',
    graphType: 'Dotted',
    colorType: 'Light'
};

export default function (state = initialState, action){
    const newState = { ...state };

    switch(action.type){
        case CHANGE_MODE:
            newState.mode=action.payload;
            return newState;

        case CHANGE_PRICE:
            console.log(' hi', action.payload, 'ih');
            if (action.payload === '')
                return newState;
            newState.price = action.payload;
            return newState;

        case CHANGE_CURRENCY:
            newState.currency=action.payload;
            return newState;

        case CHANGE_GRAPHTYPE:
            newState.graphType=action.payload;
            return newState;
        case CHANGE_COLORTYPE:
            newState.colorType = action.payload;
            return newState;

        default: return state;

    }
    return state;
}

