import React, { Component } from 'react';
import './css/App.css'
import './css/custom.css'
import { HashRouter as Router, Route } from 'react-router-dom'
import { Navbar } from './components/navbar'
import { Dashboard } from './components/dashboard'
import { Settings } from './components/settings'


class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Navbar />

                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                        <Dashboard />
                    </main>

                </div>
            </div>
        );
    }
}

export default App;
