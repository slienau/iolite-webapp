import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Switch extends Component {
    handleChange() {
        this.props.onDeviceSelect(this.refs.selected.id, this.refs.selected.checked);
    }

    render() {
        return (
            <label htmlFor={this.props.deviceId} className="switch">
                <input type="checkbox" id={this.props.deviceId} ref="selected"
                       onChange={this.handleChange.bind(this)}></input>
                <span className="slider round"></span>
            </label>
        )
    }
}

Switch.propTypes = {
    deviceId: PropTypes.string.isRequired,
    onDeviceSelect: PropTypes.func.isRequired
};

export default Switch;
