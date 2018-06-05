import React, { Component } from "react";
import "./App.css"
import { LineChart } from './components/samplecharts/line'
import { PieChart } from './components/samplecharts/pie'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hello from React with style!</h1>
                <div>
                    <LineChart />
                    <hr />
                    <PieChart />
                </div>
            </div>
        );
    }
}

export default App;
