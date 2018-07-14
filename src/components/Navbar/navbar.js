import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Room } from './room'
import MdSettings from 'react-icons/lib/md/settings'
import MdMenu from 'react-icons/lib/md/menu'
import MdClose from 'react-icons/lib/md/close'
import './navbar.css'

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    const settingsStyle = {
      padding: '5px',
      bottom: '0px'
    }
    const buttonStyle = {
      width: '49.9%'
    }

    const navClasses = (this.state.isToggleOn ? 'showSidebar': null) + ' bg-light sidebar position-absolute'
    const toggleButtonSize=42;

    return (
      <nav id="sidenav" className={navClasses}>
        <button id="sidebar-toggle-button" onClick={this.handleClick} type="button" className="btn btn-secondary">
          {this.state.isToggleOn ? (<MdClose size={toggleButtonSize} />) : (<MdMenu size={toggleButtonSize} />)}
        </button>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/charts" className="nav-link active btn btn-primary float-left" style={buttonStyle}>
              Charts
            </Link>
            <Link to="/tables" className="nav-link btn btn-primary float-left" style={buttonStyle}>
              Tables
            </Link>
          </li>
          <Room name="Living Room" devices={['Device 1', 'Device 2', 'Device 3', 'Device 4']} />
          <Room name="Kitchen" devices={['Device 1', 'Device 2', 'Device 3']} />
          <Room name="Bedroom" devices={['Device 1', 'Device 2']} />
          <Room name="Bathroom" devices={['Device 1', 'Device 2', 'Device 3']} />

        </ul>


        <div className="position-absolute bg-light" style={settingsStyle}>
          <Link to="/settings">
            <MdSettings color="grey" size={36} />
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
