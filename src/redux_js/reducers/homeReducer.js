/* REDUCER DUERFEN KEINE SEITENEFFEKTE ERZEUGEN! */
import { TOGGLE_DEVICE, FETCH_DATA } from '../actions/types'
import sampleData from '../../../resources/rest_sample_response.json'


const initialState = {
    restData: sampleData
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
                restData: action.content
            })
        default:
            return state;
    }
}