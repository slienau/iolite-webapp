import React, { Component } from 'react';
import './css/App.css'
import './css/custom.css'
import { HashRouter as Router, Route } from 'react-router-dom'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
import { Dashboard } from './components/dashboard'
import { Settings } from './components/settings'
import { ExampleCharts } from './components/examplecharts'


class App extends Component {
    render() {
        return (
            <div>
                <Navbar />

                <main id="main-content" role="main" className="container">
                    <Router>
                        <div>
                            <Route exact path="/" component={Dashboard} />
                            <Route path="/examplecharts" component={ExampleCharts} />
                            <Route path="/settings" component={Settings} />
                        </div>
                    </Router>
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
