/* REDUCER DUERFEN KEINE SEITENEFFEKTE ERZEUGEN! */
import {TOGGLE_DEVICE_SWITCH, FETCH_DATA} from '../actions/types'

const initialState = {
    restData: {},
    visibleDevices: [],
    visibleData: {
        'rooms': []
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case TOGGLE_DEVICE_SWITCH:
            let newState = Object.assign({}, state);
            let visibleDevices = newState.visibleDevices;
            let deviceId = action.content.deviceId;
            if (action.content.visible) { // add to visibleDevices
                visibleDevices.push(deviceId);
            } else { // remove from visibleDevices
                let index = visibleDevices.indexOf(deviceId);
                visibleDevices.splice(index, 1);
            }
            newState.visibleData = getVisibleData(newState.restData, newState.visibleDevices);
            return newState;
        case FETCH_DATA:
            return Object.assign({}, state, {
                restData: action.content
            })
        default:
            return state;
    }
}

function getVisibleData(restData, visibleDevices) {
    console.log('making visible data')
    let rooms = restData.rooms;
    if (typeof rooms === 'undefined')
        return {};
    let result = {
        'rooms': []
    }
    rooms.forEach(room => {
        let singleRoom = {
            id: room.id,
            name: room.name,
            devices: []
        }
        room.devices.forEach(device => {
            if (visibleDevices.some(x => x === device.id))
                singleRoom.devices.push((device));
        })
        result.rooms.push(singleRoom);
    })
    return result;
}