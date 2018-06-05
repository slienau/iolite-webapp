import React from "react";
import { Line } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';

export class LineChart extends React.Component {
    render() {
        const data_line = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Boiler',
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    lineTension: 0.1,
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10
                },
                {
                    label: 'Fridge',
                    backgroundColor: 'rgba(255,153,0,0.4)',
                    data: [60, 35, 65, 59, 95, 89, 20],
                    fill: false,
                    lineTension: 0.1,
                    borderColor: 'rgba(255,153,0,0.4)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(255,153,0,0.4)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(255,153,0,0.4)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10
                }
            ]
        };
        return (
            <div>
                <h2>Example Line Chart</h2>
                <Line
                    data={data_line}
                    width={500}
                    height={300}
                />
            </div>
        )
    }
}