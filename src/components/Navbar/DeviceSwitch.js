import React, {Component} from 'react';
import PropTypes from 'prop-types';
//Redux imports
import {connect} from "react-redux";
import {toggleDeviceSwitch} from "../../redux_js/actions/homeActions";

class DeviceSwitch extends Component {
    handleChange() {
        this.props.toggleDeviceSwitch(this.refs.selected.id, this.refs.selected.checked);
    }

    render() {
        return (
            <label htmlFor={this.props.deviceId} className="switch">
                <input type="checkbox" id={this.props.deviceId} ref="selected"
                       onChange={this.handleChange.bind(this)}/>
                <span className="slider round"/>
            </label>
        )
    }
}

DeviceSwitch.propTypes = {
    deviceId: PropTypes.string.isRequired,
    toggleDeviceSwitch: PropTypes.func.isRequired
};

export default connect(null, {toggleDeviceSwitch: toggleDeviceSwitch})(DeviceSwitch);