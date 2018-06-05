import React from "react";
import { Pie } from 'react-chartjs-2';

export class PieChart extends React.Component {
    render() {
        const data_pie = {
            labels: [
                'Red',
                'Green',
                'Yellow'
            ],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ]
            }]
        };

        return <Pie data={data_pie} />
    }
}