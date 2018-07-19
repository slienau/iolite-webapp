import { TOGGLE_DEVICE, FETCH_DATA } from './types'
import sampleData from '../../../resources/rest_sample_response.json'

export function toggleDevice(deviceId, visible) {
    console.log('toggle device with id ' + deviceId + '; visible: ' + visible)
    return {
        type: TOGGLE_DEVICE,
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