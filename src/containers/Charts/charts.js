import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

export default class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    }
  }
  static defaultProps = {
    displayTitle: false,
    displayLegend: true,
    legendPosition: 'right',
    location: 'City'
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