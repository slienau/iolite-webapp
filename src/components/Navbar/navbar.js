import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Room } from './room'
class Navbar extends Component {

  render() {
    return (
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/charts" className="nav-link active">
              <span data-feather="home"></span>
              <h2 className="white">Charts</h2>
            </Link>
          </li>
          <Room name="Living Room" devices={['Device 1', 'Device 2', 'Device 3', 'Device 4']} />
          <Room name="Kitchen" devices={['Device 1', 'Device 2', 'Device 3']} />
          <Room name="Bedroom" devices={['Device 1', 'Device 2']} />
          <Room name="Bathroom" devices={['Device 1', 'Device 2', 'Device 3']} />

        </ul>

        <Seperator />

        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <Link to="/tables" className="nav-link">
              <span data-feather="file-text"></span>
              Tables
                </Link>
          </li>
          <Seperator />
          <li className="nav-item">
            <Link to="/settings" className="nav-link">
              <span data-feather="file-text"></span>
              Settings
                </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;

class Seperator extends Component {
  render() {
    const divStyle = {
      'background-color': 'white',
      'height': '2px',
      'width': '100%',
      'margin': '10px 0px'
    };

    return (
      <div style={divStyle}></div>
    );
  }
}
