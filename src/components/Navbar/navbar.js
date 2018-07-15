import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Room } from './room'
import MdSettings from 'react-icons/lib/md/settings'
import MdMenu from 'react-icons/lib/md/menu'
import MdClose from 'react-icons/lib/md/close'
import './navbar.css'

const TOGGLE_BUTTON_SIZE = 42;

export default class Navbar extends React.Component {

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
    const navClasses = (this.state.isToggleOn ? 'showSidebar' : '') + ' bg-light sidebar position-absolute'
    return (
      <nav id="sidenav" className={navClasses}>
        <button id="sidebar-toggle-button" onClick={this.handleClick} type="button" className="btn btn-secondary">
          {this.state.isToggleOn ? (<MdClose size={TOGGLE_BUTTON_SIZE} />) : (<MdMenu size={TOGGLE_BUTTON_SIZE} />)}
        </button>
        <ul className="nav flex-column">
          <li className="nav-item">
            <LinkButton destination='/charts' name='Charts' active='true' />
            <LinkButton destination='/tables' name='Tables' />
          </li>
          <Room name="Living Room" devices={['Device 1', 'Device 2', 'Device 3', 'Device 4']} />
          <Room name="Kitchen" devices={['Device 1', 'Device 2', 'Device 3']} />
          <Room name="Bedroom" devices={['Device 1', 'Device 2']} />
          <Room name="Bathroom" devices={['Device 1', 'Device 2', 'Device 3']} />
        </ul>

        <div id="navbar-settings-icon" className="position-absolute bg-light">
          <Link to="/settings">
            <MdSettings color="grey" size={36} />
          </Link>
        </div>
      </nav>
    );
  }
}

class LinkButton extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    if (this.props.active == 'true') {
      this.setState({ isActive: true });
    }
  }

  handleClick() {
    this.setState({ isActive: true });
  }

  render() {

    const classes = (this.state.isActive ? 'active' : '') + ' nav-link btn btn-primary float-left navbar-top-button'
    return (
      <Link to={this.props.destination} className={classes} onClick={this.handleClick}>
        {this.props.name}
      </Link>
    )
  }

}