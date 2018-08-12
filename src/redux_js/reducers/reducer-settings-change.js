export default function (state='nightmode', action){
    switch(action.type){
        case 'MODE_CHANGED':
            return action.payload;
            break;
        case 'PRICE_CHANGED':
            return action.payload;
            break;
    }
    return state
}