import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";




class Room extends React.Component {

    constructor(props){
        super(props);
        this.makeShow = this.makeShow.bind(this);
    }

    makeShow(arg)
    {
        if (arg === 'Collapsed'){
            return "collapse ";
        }
        else{
            return "collapse show";
        }
    }

    render() {
        var collapseId = this.props.roomId;
        var collapsed = this.props.navbar;
        return <li>
            <a className={this.props.navbar.toLowerCase().concat(" btn btn-secondary room-room")} data-toggle="collapse" href={"#" + collapseId} role="button"
               aria-expanded="false" aria-controls={collapseId}>{this.props.roomName}</a>
            <div className={this.makeShow(collapsed)} id={collapseId}>
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

function mapStateToProps(state) {


    return {
        navbar: state.settings.navbar
            };
}


export default connect(mapStateToProps)(Room);

