/* REDUCER DUERFEN KEINE SEITENEFFEKTE ERZEUGEN! */
import { TOGGLE_DEVICE, FETCH_DATA } from '../actions/types'

const initialState = {
    homeData: {},
    viewData: [],
    selectedDevices: [],
    greeting: 'hello'
}

export default function (state = initialState, action) {
    switch (action.type) {
        case TOGGLE_DEVICE:
            return Object.assign({}, state, {
                newProp: action.content
            })
        case FETCH_DATA:
            console.log (action.content)
            return Object.assign({}, state, {
                homeData: action.content
            })
        default:
            return state;
    }
}