import {
    TOGGLE_DEVICE_SWITCH,
    FETCH_DATA,
    CHANGE_START_DATE,
    CHANGE_END_DATE,
    CHANGE_INTERVAL
} from './types'
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

export function fetchData(startDate, endDate, interval) {
    console.log('fetching data from ' + startDate + ' to ' + endDate + ' with interval ' + interval)
    //TODO: get data from REST Server (http://sebastian-lienau.de/aal.json for testing)
    //return { type: FETCH_DATA, content: sampleData }
    return dispatch => {
        return fetch('http://sebastian-lienau.de/aal.json')
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                return { type: FETCH_DATA, content: json };
            })
    }
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if(!response.ok) {
        throw Error(response.statusText);
    }
    return response;
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