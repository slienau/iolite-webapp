import React, { Component } from 'react';
import '../../css/Main.css'
import './App.css'
import { HashRouter as Router, Route } from 'react-router-dom'
import { Navbar } from './components/navbar'
import { Chartview } from './components/chartview'
import { Tableview } from './components/tableview'
import { Settings } from './components/settings'


class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Navbar />

                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">

                        <Router>
                            <div>
                                <Route exact path="/" component={Chartview} />
                                <Route path="/chartview" component={Chartview} />
                                <Route path="/tableview" component={Tableview} />
                                <Route path="/settings" component={Settings} />
                            </div>
                        </Router>
                    </main>
                </div>
            </div>
        );
    }
}

export default App;
