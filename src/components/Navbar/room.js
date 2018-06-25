import React, { Component } from 'react';

export class Room extends React.Component {
    render() {
        var collapseId = this.props.name.replace(' ', '').toLowerCase()
        return (
            <li>
                <a className="btn btn-primary room-room" data-toggle="collapse" href={"#" + collapseId} role="button" aria-expanded="false" aria-controls={collapseId}>{this.props.name}</a>
                <ul className="collapse show" id={collapseId}>
                    {this.props.devices.map(device => <li className="room-device">{device}</li>)}
                </ul>
            </li>
        );
    }
}
