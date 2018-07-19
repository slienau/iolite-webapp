import {TOGGLE_DEVICE_SWITCH, FETCH_DATA} from './types'
import sampleData from '../../../resources/rest_sample_response.json'

export function toggleDeviceSwitch(deviceId, visible) {
    console.log('toggle device switch with device id "' + deviceId + '"; visible: ' + visible)
    return {
        type: TOGGLE_DEVICE_SWITCH,
        content: {
            deviceId: deviceId,
            visible: visible
        }
    }
}

export function fetchData() {
    console.log('fetching data')
    return { type: FETCH_DATA, content: sampleData }
}