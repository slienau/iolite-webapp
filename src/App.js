import React, { Component } from "react";
import "./css/App.css"
import './css/custom.css'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
import { ExampleCharts } from './components/examplecharts'

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <main role="main" className="container">
                    <ExampleCharts/>
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
