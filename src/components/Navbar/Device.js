import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DeviceSwitch from './DeviceSwitch'

class Device extends Component {
    render() {
        return (
            <tr>
                <td className="room-device"><DeviceSwitch deviceId={this.props.deviceId}/>
                </td>
                <td>{this.props.deviceName}</td>
            </tr>
        );
    }
}

Device.propTypes = {
    deviceName: PropTypes.string.isRequired,
    deviceId: PropTypes.string.isRequired
};

export default Device;
