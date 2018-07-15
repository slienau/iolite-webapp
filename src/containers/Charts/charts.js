import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

export default class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {}
    }
  }
  static defaultProps = {
    displayTitle: false,
    displayLegend: true,
    legendPosition: 'right',
    location: 'City'
  }

  componentWillMount() {
    const chartData = this.getChartData();
    this.setState({
      chartData: chartData
    });
  }

  getChartData(){
    const restData = this.props.restData;
    console.log(restData.rooms[0].devices[0].usage[0].timestamp);
    const deviceName = restData.rooms[0].devices[0].name;
    const ts = restData.rooms[0].devices[0].usage[0].timestamp;
    const dt = new Date(ts);
    console.log(dt.getFullYear());
    console.log(dt.getDate());

    const chartData = {
      datasets: [{
        label: 'Dataset with string point data',
        backgroundColor: 'red',
        borderColor: 'red',
        fill: false,
        data: [{
          x: new Date(2018,1,10),
          y: 10
        }, {
          x: new Date(2018,1,11),
          y: 20
        }, {
          x: new Date(2018,1,12),
          y: 15
        }, {
          x: new Date(2018,1,13),
          y: 25
        }],
      }, {
        label: 'Dataset with date object point data',
        backgroundColor: 'blue',
        borderColor: 'blue',
        fill: false,
        data: [{
          x: new Date(2018,1,10),
          y: 100
        }, {
          x: new Date(2018,1,11),
          y: 200
        }, {
          x: new Date(2018,1,12),
          y: 150
        }, {
          x: new Date(2018,1,13),
          y: 250
        }]
      }]
    }
    return chartData;
  }

  render() {
    var chartOptions = {
      responsive: true,
      title: {
        display: this.props.displayTitle,
        fontSize: 25
      },
      legend: {
        display: this.props.displayLegend,
        position: this.props.legendPosition
      },
      scales: {
        xAxes: [{
          type: 'time',
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Date'
          },
          ticks: {
            major: {
              fontStyle: 'bold',
              fontColor: 'grey'
            }
          },
          time: {
            displayFormats: {
              quarter: 'MMM YYYY'
            }
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Power Consumption'
          },
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
    return (
      <div>
        <div
          className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Energy consumption</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
              <span data-feather="calendar"></span>
              This week
              </button>
          </div>
        </div>

        <Line
          data={this.state.chartData}
          options={chartOptions}
        />

      </div>
    );
  }
}