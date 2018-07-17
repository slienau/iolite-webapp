import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import * as zoom from 'chartjs-plugin-zoom';
import moment from 'moment';
import { Line } from 'react-chartjs-2';

import 'react-datepicker/dist/react-datepicker.css';

export default class Charts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chartData: {},
      color_pool: [
        "#001f3f",
        "#FF851B",
        "#0074D9",
        "#FF4136",
        "#7FDBFF",
        "#85144b",
        "#39CCCC",
        "#F012BE",
        "#3D9970",
        "#B10DC9",
        "#2ECC40",
        "#AAAAAA",
        "#FFDC00",
        "#DDDDDD",
        "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"
      ],
      chartOptions: {
        responsive: true,
        title: {
          display: false,
          fontSize: 25
        },
        legend: {
          display: true,
          position: 'top'
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
              },
              min: null,
              max: null
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
        },
        animation: {
          duration: 0, // general animation time
        },
        hover: {
          animationDuration: 0, // duration of animations when hovering an item
        },
        responsiveAnimationDuration: 0, // animation duration after a resize
      }
    };

    this.resetZoom = this.resetZoom.bind(this);
  }

  componentDidMount() {
    const chartData = this.getChartData(this.props.devices);
    this.setState({
      chartData: chartData
    });

    console.log(moment());
  }

  componentDidUpdate() {
    
  }

  getChartData(devices) {
    // const restData = this.props.restData;
    // const devices = this.props.devices;

    var datasets = [];

    devices.forEach(device => {
      if(!device.show) {
        return;
      }
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
      device.usage.slice(800).forEach(usage => {
        var dataEntry = {
          x: new Date(usage.timestamp),
          y: usage.value
        }
        dataset.data.push(dataEntry);
      })
      datasets.push(dataset);
    });

    const chartData = {
      datasets: datasets
    }
    return chartData;
  }

  resetZoom() {
    console.log('resetting zoom');
    // TODO: reset zoom
    alert('TODO')
    var newChartOptions = this.state.chartOptions;
    newChartOptions.scales.xAxes[0].time.min = null;
    newChartOptions.scales.xAxes[0].time.max = null;

    this.setState(prevState => ({
      chartOptions: newChartOptions
    }));
    this.forceUpdate();
  }

  render() {
    return (
      <div>

        <DateRange />

        <Line
          data={this.state.chartData}
          options={this.state.chartOptions}
        />

      </div>
    );
  }
}

class DateRange extends Component {

  constructor(props) {
    super(props)
    this.state = {
      startDate: moment(),
      endDate: moment()
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }

  handleChangeStart(date) {
    this.setState({
      startDate: date
    }, function () {
      console.log(this.state.startDate);
    });
  }

  handleChangeEnd(date) {
    this.setState({
      endDate: date
    }, function () {
      console.log(this.state.endDate);
    });
  }

  render() {

    return (
      <div className="row justify-content-end">
        <div className="col-2">
          From
            <DatePicker
            selected={this.state.startDate}
            selectsStart
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeStart}
            dateFormatCalendar={"DD MM YYYY"}
          />
        </div>
        <div className="col-2">
          To
            <DatePicker
            selected={this.state.endDate}
            selectsEnd
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeEnd}
          />
        </div>
        <div className="col-1">
          <br />
          <button className="btn btn-sm btn-outline-secondary" onClick={this.resetZoom}>Reset</button>
        </div>
      </div>
    );
  }
}