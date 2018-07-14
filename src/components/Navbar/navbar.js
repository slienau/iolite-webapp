import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Room } from './room'
import MdSettings from 'react-icons/lib/md/settings'

const settingsStyle = {
  padding: '5px',
  bottom: '0px'
}
var buttonStyle = {
  width: '49.9%'
}

class Navbar extends React.Component {
  render() {
    return (
      <nav id="sidenav" className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
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

        </div>
        <div className="position-absolute" style={settingsStyle}>
            <Link to="/settings">
              <MdSettings color="grey" size={36} />
            </Link>
          </div>
      </nav>
    );
  }
}

export default Navbar;
