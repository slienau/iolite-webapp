import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import * as zoom from 'chartjs-plugin-zoom';

export default class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {},
      color_pool: ["#001f3f","#FF851B","#0074D9","#FF4136","#7FDBFF","#85144b","#39CCCC", "#F012BE", "#3D9970", "#B10DC9", "#2ECC40", "#AAAAAA", "#FFDC00", "#DDDDDD", "AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"]
    }
    this.resetZoom = this.resetZoom.bind(this);
  }
  static defaultProps = {
    displayTitle: false,
    displayLegend: true,
    legendPosition: 'top',
  }

  componentWillMount() {
    const chartData = this.getChartData();
    this.setState({
      chartData: chartData
    });
  }

  getChartData() {
    const restData = this.props.restData;
    const rooms = this.props.restData.rooms;

    var datasets = [];

    rooms.forEach(room => {
      room.devices.forEach(device => {
        var device_color = this.state.color_pool.shift();
        var dataset = {
          label: device.name,
          backgroundColor: device_color,
          borderColor: device_color,
          borderWidth: '1',
          pointRadius: '0',
          pointHoverRadius: '3',
          fill: false,
          data: []
        };
        device.usage.forEach(usage => {
          var dataEntry = {
            x: new Date(usage.timestamp),
            y: usage.value
          }
          dataset.data.push(dataEntry);
        })
        datasets.push(dataset);
      })
    });

    const chartData = {
      datasets: datasets
    }
    return chartData;
  }

  resetZoom(){
    console.log('resetting zoom');
    // TODO: reset zoom
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
      zoom: {
        enabled: true,
        drag: true,
        mode: 'x',
        limits: {
          max: 10,
          min: 0.5
        }
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
      },
      elements: {
        line: {
          tension: 0, // disables bezier curves
        }
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
              <button className="btn btn-sm btn-outline-secondary" onClick={this.resetZoom}>Reset Zoom</button>
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