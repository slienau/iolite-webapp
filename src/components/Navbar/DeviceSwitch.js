import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {toggleDeviceSwitch} from "../../redux_js/actions/homeActions";
import './deviceSwitch.css'

class DeviceSwitch extends Component {

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
        let sliderStyle = {
        }
        if(this.state.checked) {
            sliderStyle = {
                backgroundColor: this.props.deviceColor
            }
        }

        return (
            <label htmlFor={this.props.deviceId} className="switch">
                <input type="checkbox" id={this.props.deviceId} ref="selected"
                       onChange={this.handleChange.bind(this)}/>
                <span className="slider round" style={sliderStyle}/>
            </label>
        )
    }
}

DeviceSwitch.propTypes = {
    deviceId: PropTypes.string.isRequired,
    deviceColor: PropTypes.string.isRequired,
    toggleDeviceSwitch: PropTypes.func.isRequired
};

export default connect(null, {toggleDeviceSwitch: toggleDeviceSwitch})(DeviceSwitch);