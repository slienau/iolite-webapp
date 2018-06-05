import React from "react";
import { LineChart } from './samplecharts/line'
import { PieChart } from './samplecharts/pie'

export class ExampleCharts extends React.Component {
    render() {
        return (
            <div>
                <h1>Example Charts</h1>
                <div>
                    <h2>Line</h2>
                    <LineChart />
                    <hr />
                    <h2>Pie</h2>
                    <PieChart />
                </div>
            </div>
        );
    }
}