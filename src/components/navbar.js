import React from "react";
import { HashRouter as Router, Link } from 'react-router-dom'

export class Navbar extends React.Component {
    render() {
        return (
            <Router>
                <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                    <div className="sidebar-sticky">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link to="/chartview" className="nav-link active">
                                    <span data-feather="home"></span>
                                    Total <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/chartview/livingroom" className="nav-link">
                                    <span data-feather="file"></span>
                                    Living Room
                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/chartview/kitchen" className="nav-link">
                                    <span data-feather="shopping-cart"></span>
                                    Kitchen
                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/chartview/bedroom" className="nav-link">
                                    <span data-feather="users"></span>
                                    Bedroom
                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/chartview/bathroom" className="nav-link">
                                    <span data-feather="bar-chart-2"></span>
                                    Bathroom
                </Link>
                            </li>
                        </ul>

                        <hr />

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
            </Router >
        );
    }
}