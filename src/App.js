import React, { Component } from 'react';
import './css/App.css'
import './css/custom.css'
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

                                <Route
                                    exact path="/"
                                    render={(props) => <Chartview {...props} name="Total" />}
                                />
                                <Route
                                    exact path='/chartview'
                                    render={(props) => <Chartview {...props} name="Total" />}
                                />
                                <Route
                                    exact path='/chartview/livingroom'
                                    render={(props) => <Chartview {...props} name="Living Room" />}
                                />
                                <Route
                                    exact path='/chartview/kitchen'
                                    render={(props) => <Chartview {...props} name="Kitchen" />}
                                />
                                <Route
                                    exact path='/chartview/bedroom'
                                    render={(props) => <Chartview {...props} name="Bedroom" />}
                                />
                                <Route
                                    exact path='/chartview/bathroom'
                                    render={(props) => <Chartview {...props} name="Bathroom" />}
                                />

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
