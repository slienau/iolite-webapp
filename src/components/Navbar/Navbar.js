import PropTypes from 'prop-types'
import React, {Component} from 'react';
import MdSettings from 'react-icons/lib/md/settings'
import MdMenu from 'react-icons/lib/md/menu'
import MdClose from 'react-icons/lib/md/close'
import './navbar.css'
import PageSwitchButton from './PageSwitchButton'
import Room from './Room'
import Device from './Device'
import {connect} from 'react-redux';
import '../../redux_js/store/index'

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false
        };
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        const navClasses = (this.state.isToggleOn ? 'showSidebar ' : '') + 'bg-light sidebar position-absolute';
        const switchPage = this.props.switchPage;

        let rooms = this.props.restData.rooms
            .sort(function (a, b) {
                return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
            }) // sort by room name
            .map(room => {
                return (
                    <Room roomName={room.name} roomId={room.id} key={room.id}>
                        {
                            room.devices
                                .sort(function (a, b) { // sort by device name
                                    return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
                                })
                                .map(device => {
                                    const deviceColor = this.props.deviceColors[device.id] // the device color
                                    const noUsageData = device.usage.length == 0 ? true : false; // true if this device has no usage data
                                    // render device component
                                    return (<Device deviceName={device.name} deviceId={device.id} key={device.id} deviceColor={deviceColor} noUsageData={noUsageData}/>)
                                    }
                                )
                        }
                    </Room>
                )
            });

        const TOGGLE_BUTTON_SIZE = 42;
        let toggleButton = <button id="sidebar-toggle-button" onClick={this.handleClick.bind(this)} type="button"
                                   className="btn btn-secondary">
            {this.state.isToggleOn ? (<MdClose size={TOGGLE_BUTTON_SIZE}/>) : (<MdMenu size={TOGGLE_BUTTON_SIZE}/>)}
        </button>

        return (
            <nav id="sidenav" className={navClasses}>
                {toggleButton}
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <PageSwitchButton contentPage="charts" activePage={this.props.contentPage} title="Charts"
                                          switchPage={this.props.switchPage}/>
                        <PageSwitchButton contentPage="tables" activePage={this.props.contentPage} title="Tables"
                                          switchPage={this.props.switchPage}/>
                    </li>
                    {rooms}
                </ul>
                <div id="navbar-settings-icon" className="position-absolute bg-light">
                    <a onClick={() => switchPage('settings')}><MdSettings color="grey" size={36}/></a>
                </div>
            </nav>
        );
    }
}

Navbar.propTypes = {
    contentPage: PropTypes.string.isRequired,
    restData: PropTypes.object.isRequired,
    switchPage: PropTypes.func.isRequired,
    deviceColors: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        restData: state.home.restData,
        deviceColors: state.home.deviceColors
    };
}

export default connect(mapStateToProps, null)(Navbar);
