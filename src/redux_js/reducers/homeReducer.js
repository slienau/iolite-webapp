/* REDUCER DUERFEN KEINE SEITENEFFEKTE ERZEUGEN! */
import {TOGGLE_DEVICE_SWITCH, FETCH_DATA} from '../actions/types'

const initialState = {
    restData: {},
    visibleDevices: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case TOGGLE_DEVICE_SWITCH:
            let stateCopy = Object.assign({}, state);
            let visibleDevices = stateCopy.visibleDevices;
            let deviceId = action.content.deviceId;
            if (action.content.visible) { // add to visibleDevices
                visibleDevices.push(deviceId);
            } else { // remove from visibleDevices
                let index = visibleDevices.indexOf(deviceId);
                visibleDevices.splice(index, 1);
            }
            return stateCopy;
        case FETCH_DATA:
            return Object.assign({}, state, {
                restData: action.content
            })
        default:
            return state;
    }
}