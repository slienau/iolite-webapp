import React, { Component } from 'react';

export class Room extends React.Component {
    render() {
        var collapseId = this.props.name.replace(' ', '').toLowerCase()
        return (
            <li>
                <a className="btn btn-secondary room-room" data-toggle="collapse" href={"#" + collapseId} role="button" aria-expanded="false" aria-controls={collapseId}>{this.props.name}</a>
                <div className="collapse show" id={collapseId}>
                    <table className="switchtable">
                        <tbody>
                            {
                                this.props.devices.map(device =>
                                    <tr key={device }>
                                        <td className="room-device">
                                            <Switch device={device} />
                                        </td>
                                        <td>
                                            {device}
                                        </td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </li>
        );
    }
}

export class Switch extends Component {
    render() {
        return (
            <label className="switch">
                <input type="checkbox"></input>
                <span className="slider round"></span>
            </label>
        )
    }
}
