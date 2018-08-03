import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import {lineChartOptions} from './chartOptions'
import PropTypes from "prop-types";

class LineChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: {},
            chartOptions: lineChartOptions,
            alertSent: false
        };
    }

    componentWillMount() {
        const chartData = this.getChartData(this.props.visibleData);
        this.setState({
            chartData: chartData
        });
    }

    componentWillReceiveProps(nextProps) {
        const chartData = this.getChartData(nextProps.visibleData);
        this.setState({
            chartData: chartData
        });
    }

    getChartData(showData) {
        const MAX_ENTRYS = 200;
        let alertSentInside = false;
        let datasets = [];

        showData.rooms.forEach(room => {
            room.devices.forEach(device => {
                if(device.usage.length>MAX_ENTRYS && !this.state.alertSent && !alertSentInside) {
                    alert('Too many data entrys for line chart. Only the first ' + MAX_ENTRYS + ' entrys will be displayed. Please choose a different time range or change interval.')
                    alertSentInside = true;
                    this.setState({
                        alertSent: true
                    })
                }
                var deviceColor = device.color;
                var dataset = {
                    label: device.name,
                    backgroundColor: deviceColor,
                    borderColor: deviceColor,
                    borderWidth: '1',
                    pointRadius: '0',
                    pointHoverRadius: '3',
                    fill: false,
                    data: []
                };
                device.usage.slice(0,MAX_ENTRYS-1).forEach(usage => {
                    var dataEntry = {
                        x: new Date(usage.timestamp),
                        y: usage.value
                    }
                    dataset.data.push(dataEntry);
                })
                datasets.push(dataset);
            })
        })

        const chartData = {
            datasets: datasets
        }
        return chartData;
    }

    render() {
        return (
            <div>

                <Line
                    data={this.state.chartData}
                    options={this.state.chartOptions}
                />

            </div>
        );
    }
}

LineChart.propTypes = {
    visibleData: PropTypes.object.isRequired
}

export default LineChart;