import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {

  render() {
    return (
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/charts" className="nav-link active">
              <span data-feather="home"></span>
              Total <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/charts/livingroom" className="nav-link">
              <span data-feather="file"></span>
              Living Room
                </Link>
          </li>
          <li className="nav-item">
            <Link to="/charts/kitchen" className="nav-link">
              <span data-feather="shopping-cart"></span>
              Kitchen
                </Link>
          </li>
          <li className="nav-item">
            <Link to="/charts/bedroom" className="nav-link">
              <span data-feather="users"></span>
              Bedroom
                </Link>
          </li>
          <li className="nav-item">
            <Link to="/charts/bathroom" className="nav-link">
              <span data-feather="bar-chart-2"></span>
              Bathroom
                </Link>
          </li>
        </ul>

        <hr />

        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <Link to="/tables" className="nav-link">
              <span data-feather="file-text"></span>
              Tables
                </Link>
          </li>
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
