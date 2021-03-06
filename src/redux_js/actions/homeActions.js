import {
    TOGGLE_DEVICE_SWITCH,
    CHANGE_START_DATE,
    CHANGE_END_DATE,
    CHANGE_INTERVAL,
    FETCH_DATA_BEGIN,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    CREATE_DEVICE_COLORS
} from './types'
import sampleData from '../../../resources/rest_sample_response.json'
import moment from "moment";

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

export function fetchData(group = 0, startDate = moment().subtract(1, 'months'), endDate = moment(), interval = 'day') {
    startDate = startDate.unix();
    endDate = endDate.unix();
    let urlString = 'http://localhost:3000/resources/rest_sample_response.json';
    if(group===1)
        urlString = 'http://localhost:3000/resources/sample_data_group_1.json' //TODO: insert group 1 endpoint
    if(group===2)
        urlString = 'http://localhost:3000/resources/rest_sample_response.json' //TODO: insert group 2 endpoint
    console.log('fetching data from ' + startDate + ' to ' + endDate + ' with interval ' + interval + ' from URL ' + urlString)
    let url = new URL(urlString);
    const params = {
        from: startDate,
        to: endDate,
        interval: interval
    };
    url.search = new URLSearchParams(params);
    return dispatch => {
        dispatch(fetchDataBegin());
        return fetch(url)
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchDataSuccess(json));
                dispatch(createDeviceColors(json))
                return json;
            })
            .catch(error => {
                dispatch(fetchDataFailure(error))
                dispatch(fetchDataSuccess(sampleData));
                dispatch(createDeviceColors(sampleData));
            });
    }
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if(!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const fetchDataBegin = () => ({
    type: FETCH_DATA_BEGIN
});

export const fetchDataSuccess = data => ({
    type: FETCH_DATA_SUCCESS,
    content: data
});

export const fetchDataFailure = error => ({
    type: FETCH_DATA_FAILURE,
    content: error
});

export const createDeviceColors = data => ({
    type: CREATE_DEVICE_COLORS,
    content: data
});

export function changeStartDate(date) {
    console.log('handling CHANGE_START_DATE event. date: ' + date)
    return {
        type: CHANGE_START_DATE,
        content: date
    }
}

export function changeEndDate(date) {
    console.log('handling CHANGE_END_DATE event. date: ' + date)
    return {
        type: CHANGE_END_DATE,
        content: date
    }
}

export function changeInterval(interval) {
    console.log('handling CHANGE_INTERVAL event. interval: ' + interval)
    return {
        type: CHANGE_INTERVAL,
        content: interval
    }
}