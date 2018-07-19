import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Room extends React.Component {
    render() {
        var collapseId = this.props.roomId;
        return <li>
            <a className="btn btn-secondary room-room" data-toggle="collapse" href={"#" + collapseId} role="button"
               aria-expanded="false" aria-controls={collapseId}>{this.props.roomName}</a>
            <div className="collapse show" id={collapseId}>
                <table className="switchtable">
                    <tbody>
                    {this.props.children}
                    </tbody>
                </table>
            </div>
        </li>;
    }
}

Room.propTypes = {
    roomId: PropTypes.string.isRequired
};

export default Room;
