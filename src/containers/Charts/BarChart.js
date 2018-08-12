import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import {barChartOptions} from './chartOptions'
import PropTypes from "prop-types";

class BarChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: {},
            chartOptions: barChartOptions,
            max_entries: 50,
            showWarning: false
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

    getChartData(visibleData) {
        let labels = [];
        this.setState({
            showWarning: false
        });
        visibleData.rooms.forEach(room => {
            room.devices.forEach(device => {
                if (device.usage.length > this.state.max_entries) {
                    this.setState({
                        showWarning: true
                    })
                }
                if (labels.length === 0) {
                    device.usage.slice(0, this.state.max_entries).forEach(usage => {
                        labels.push(usage.timestamp)
                    })
                }
            })
        });

        let devices = [];
        visibleData.rooms.forEach(room => {
            room.devices.forEach((device => {
                let sum = device.usage.reduce((acc, cur) => acc + cur.value, 0);
                sum = Math.round(sum * 100) / 100;
                let thisDevice = {
                    name: device.name,
                    color: device.color,
                    usage: device.usage,
                    usageSum: sum
                };
                devices.push(thisDevice);
            }))
        });

        let datasets = [];
        devices
            .sort(function (a, b) { // sort by usage sum
                return (a.usageSum < b.usageSum) ? 1 : ((b.usageSum < a.usageSum) ? -1 : 0);
            })
            .forEach(device => {
                let singleDataset = {
                    label: device.name,
                    backgroundColor: device.color,
                    borderColor: device.color,
                    borderWidth: 1,
                    hoverBackgroundColor: device.color,
                    hoverBorderColor: device.color,
                    data: []
                };
                device.usage.slice(0, this.state.max_entries).forEach(usage => {
                    singleDataset.data.push(Math.round(usage.value * 100) / 100)
                });
                datasets.push(singleDataset)
            });

        return {
            labels: labels,
            datasets: datasets
        };
    }

    render() {
        let warning = '';
        if (this.state.showWarning) {
            warning = (<div className="alert alert-warning" role="alert">
                Too many data points for bar chart in the selected time frame / interval. <b>Only the
                first {this.state.max_entries} entries will be displayed</b>. Please choose a different time range or
                change interval.
            </div>)
        }
        return (
            <div>
                {warning}
                <Bar
                    data={this.state.chartData}
                    options={this.state.chartOptions}
                />

            </div>
        );
    }
}

BarChart.propTypes = {
    visibleData: PropTypes.object.isRequired
}

export default BarChart;