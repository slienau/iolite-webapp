import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {toggleDeviceSwitch} from "../../redux_js/actions/homeActions";
import './device.css'

class Device extends Component {

    constructor(props){
        super(props);
        this.state = {
            checked: false
        }
    }

    handleChange() {
        this.props.toggleDeviceSwitch(this.refs.selected.id, this.refs.selected.checked);
        this.setState({
            checked: this.refs.selected.checked
        })
    }

    render() {
        let sliderStyle = {}
        let deviceNameStyle = {}
        if(this.state.checked) {
            sliderStyle = {
                backgroundColor: this.props.deviceColor
            }
            deviceNameStyle = {
                fontWeight: 'bold'
            }
        }
        if(this.props.noUsageData) {
            deviceNameStyle = {
                fontStyle: 'italic',
                color: 'lightgrey'
            }
        }
        return (
            <tr>
                <td className="room-device">
                    <label htmlFor={this.props.deviceId} className="switch">
                        <input disabled={this.props.noUsageData} type="checkbox" id={this.props.deviceId} ref="selected"
                               onChange={this.handleChange.bind(this)}/>
                        <span className="slider round" style={sliderStyle}/>
                    </label>
                </td>
                <td><span style={deviceNameStyle}>{this.props.deviceName}</span></td>
            </tr>
        );
    }
}

Device.propTypes = {
    deviceName: PropTypes.string.isRequired,
    deviceId: PropTypes.string.isRequired,
    deviceColor: PropTypes.string,
    noUsageData: PropTypes.bool.isRequired,
    toggleDeviceSwitch: PropTypes.func.isRequired
};

export default connect(null, {toggleDeviceSwitch: toggleDeviceSwitch})(Device);