import React from "react";
import { HashRouter as Router, Link } from 'react-router-dom'

export class Navbar extends React.Component {
    render() {
        return (
            <Router>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                        <Link to="/" className="navbar-brand">Energy UI</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link to="/" className="nav-link">Dashboard <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/examplecharts" className="nav-link">Example Charts</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/settings" className="nav-link">Settings</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </Router>
        );
    }
}