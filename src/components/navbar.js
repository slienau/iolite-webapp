import React from "react";
import { HashRouter as Router, Link } from 'react-router-dom'

export class Navbar extends React.Component {
    render() {
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                <span data-feather="home"></span>
                                Total <span className="sr-only">(current)</span>
                            </a>
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

                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>Saved reports</span>
                        <a className="d-flex align-items-center text-muted" href="#">
                            <span data-feather="plus-circle"></span>
                        </a>
                    </h6>
                    <ul className="nav flex-column mb-2">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span data-feather="file-text"></span>
                                Current month
                </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span data-feather="file-text"></span>
                                Last quarter
                </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span data-feather="file-text"></span>
                                Social engagement
                </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <span data-feather="file-text"></span>
                                Year-end sale
                </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}