import React, { Component } from 'react';
import { Room } from './room'
import MdSettings from 'react-icons/lib/md/settings'
import MdMenu from 'react-icons/lib/md/menu'
import MdClose from 'react-icons/lib/md/close'
import './navbar.css'

const TOGGLE_BUTTON_SIZE = 42;

export default class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    const navClasses = (this.state.isToggleOn ? 'showSidebar' : '') + ' bg-light sidebar position-absolute';
    const switchPage = this.props.switchPage;
    return (
      <nav id="sidenav" className={navClasses}>
        <button id="sidebar-toggle-button" onClick={this.handleClick} type="button" className="btn btn-secondary">
          {this.state.isToggleOn ? (<MdClose size={TOGGLE_BUTTON_SIZE} />) : (<MdMenu size={TOGGLE_BUTTON_SIZE} />)}
        </button>
        <ul className="nav flex-column">
          <li className="nav-item">
            <button className="active nav-link btn btn-primary float-left navbar-top-button" onClick={() => switchPage('charts')}>Charts</button>
            <button className="nav-link btn btn-primary float-left navbar-top-button" onClick={() => switchPage('tables')}>Tables</button>
          </li>
          <Room name="Living Room" devices={['Device 1', 'Device 2', 'Device 3', 'Device 4']} />
          <Room name="Kitchen" devices={['Device 1', 'Device 2', 'Device 3']} />
          <Room name="Bedroom" devices={['Device 1', 'Device 2']} />
          <Room name="Bathroom" devices={['Device 1', 'Device 2', 'Device 3']} />
        </ul>
        <div id="navbar-settings-icon" className="position-absolute bg-light">
            <a onClick={() => switchPage('settings')}><MdSettings color="grey" size={36} /></a>
        </div>
      </nav>
    );
  }
}