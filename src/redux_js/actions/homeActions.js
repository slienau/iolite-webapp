import {TOGGLE_DEVICE_SWITCH, FETCH_DATA, CHANGE_START_DATE, CHANGE_END_DATE, CHANGE_INTERVAL} from './types'
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

export function changeStartDate(date) {
    console.log('handling CHANGE_START_DATE event. date:"' + date)
    return {
        type: CHANGE_START_DATE,
        content: date
    }
}

export function changeEndDate(date) {
    console.log('handling CHANGE_END_DATE event. date:"' + date)
    return {
        type: CHANGE_END_DATE,
        content: date
    }
}

export function changeInterval(interval) {
    console.log('handling CHANGE_INTERVAL event. interval:"' + interval)
    return {
        type: CHANGE_INTERVAL,
        content: interval
    }
}