import React from "react";
import {Line} from 'react-chartjs-2';


const data = {
  labels: [
    '15:00',
    '15:10',
    '15:20',
    '15:30',
    '15:40',
    '15:50',
    '16:00',
    '16:10',
    '16:20',
    '16:30'
  ],

  datasets: [
    {
      label: 'TV',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
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
      pointHitRadius: 10,
      data: [2.0, 2.0, 0.1, 0.1, 0.1, 0.1, 2.0, 2.1, 2.2, 2.0]
    },
    {
      label: 'Lamp',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(100,12,192,0.4)',
      borderColor: 'rgba(100,12,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(100,12,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(100,12,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [0, 0, 1.2, 1.4, 1.4, 1.4, 0, 0, 0, 0]
    }
  ]
};


const LineChart = (props) => {

  return (
      <div>
        <Line
            data={data}
        />
      </div>
  )
};

export default LineChart;
