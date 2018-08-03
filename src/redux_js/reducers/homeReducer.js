/* REDUCER DUERFEN KEINE SEITENEFFEKTE ERZEUGEN! */
import {
    TOGGLE_DEVICE_SWITCH,
    CHANGE_START_DATE,
    CHANGE_END_DATE,
    CHANGE_INTERVAL,
    FETCH_DATA_BEGIN,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} from '../actions/types'
import moment from "moment/moment";

const initialState = {
    restData: {
        'rooms': []
    },
    visibleDevices: [],
    visibleData: {
        'rooms': []
    },
    deviceColors: [],
    startDate: moment().subtract(1, 'months'),
    endDate: moment(),
    interval: 'day'
}

export default function (state = initialState, action) {
    switch (action.type) {
        // DEVICE ON/OFF SWITCH IN NAVBAR
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
            newState.visibleData = getVisibleData(newState.restData, newState.visibleDevices, newState.deviceColors);
            return newState;

        case FETCH_DATA_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_DATA_SUCCESS:
            let newDeviceColors = []
            action.content.rooms.forEach(room => {
                room.devices.forEach(device => {
                    let singleDevice = {
                        id: device.id,
                        color: getColor()
                    }
                    newDeviceColors.push(singleDevice)
                })
            })
            return Object.assign({}, state, {
                restData: action.content,
                deviceColors: newDeviceColors,
                loading: false,
            });

        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.content,
            };

        case CHANGE_START_DATE:
            return Object.assign({}, state, {
                startDate: action.content
            });

        case CHANGE_END_DATE:
            return Object.assign({}, state, {
                endDate: action.content
            });

        case CHANGE_INTERVAL:
            return Object.assign({}, state, {
                interval: action.content
            });

        default:
            return state;
    }
}

function getVisibleData(restData, visibleDevices, deviceColors) {
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
            if (visibleDevices.some(x => x === device.id)) {
                // device is visible -> get device color from the deviceColors array
                let colorPosition = deviceColors.findIndex(x => x.id === device.id)
                device.color = deviceColors[colorPosition].color
                singleRoom.devices.push((device))
            };
        })
        result.rooms.push(singleRoom);
    })
    return result;
}

function getColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}