import React, {Component} from 'react';
import {HashRouter as Router, Link} from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
        <Router>
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link to="/" className="nav-link active">
                    <span data-feather="home"></span>
                    Total <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file"></span>
                    Living Room
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="shopping-cart"></span>
                    Kitchen
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="users"></span>
                    Bedroom
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="bar-chart-2"></span>
                    Bathroom
                  </a>
                </li>
              </ul>

              <hr/>

              <ul className="nav flex-column mb-2">
                <li className="nav-item">
                  <Link to="/tableview" className="nav-link">
                    <span data-feather="file-text"></span>
                    Table view
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
          </nav>
        </Router>
    );
  }
}

export default Navbar;
