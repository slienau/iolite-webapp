import React, { Component } from 'react';

export class Room extends React.Component {
    render() {
        var collapseId = this.props.name.replace(' ', '').toLowerCase()
        return (
            <li>
                <a className="btn btn-secondary room-room" data-toggle="collapse" href={"#" + collapseId} role="button" aria-expanded="false" aria-controls={collapseId}>{this.props.name}</a>
                <div className="collapse show" id={collapseId}>
                    <table className="switchtable">
                        {
                            this.props.devices.map(device =>
                                <tr>
                                    <td className="room-device">
                                            <Switch device={device} />
                                    </td>
                                    <td>
                                        {device}
                                    </td>
                                </tr>
                            )}
                    </table>
                </div>
            </li>
        );
    }
}

class Switch extends Component {
    render() {
        return (
            <label class="switch">
                <input type="checkbox"></input>
                <span class="slider round"></span>
            </label>
        )
    }
}
