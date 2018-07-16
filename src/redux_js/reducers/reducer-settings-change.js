export default function (state='nightmode', action){
    console.log('do we even use this??')
    switch(action.type){
        case 'MODE_CHANGED':
            console.log('then we get here');
            return action.payload;
            break;
        case 'PRICE_CHANGED':
            console.log('please change now!')
            return action.payload;
            break;
    }
    return state
}