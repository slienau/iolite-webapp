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
            max_entries: 200,
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

    getChartData(showData) {
        let datasets = [];
        this.setState({
            showWarning: false
        });
        showData.rooms.forEach(room => {
            room.devices.forEach(device => {
                if (device.usage.length > this.state.max_entries) {
                    this.setState({
                        showWarning: true
                    })
                }
                const deviceColor = device.color;
                const dataset = {
                    label: device.name,
                    backgroundColor: deviceColor,
                    borderColor: deviceColor,
                    borderWidth: '1',
                    pointRadius: '0',
                    pointHoverRadius: '3',
                    fill: false,
                    data: []
                };
                device.usage.slice(0, this.state.max_entries).forEach(usage => {
                    const dataEntry = {
                        x: new Date(usage.timestamp),
                        y: usage.value
                    };
                    dataset.data.push(dataEntry);
                });
                datasets.push(dataset);
            })
        });

        return {
            datasets: datasets
        };
    }

    render() {
        let warning = '';
        if (this.state.showWarning) {
            warning = (<div className="alert alert-warning" role="alert">
                Too many data points for line chart in the selected time frame / interval. <b>Only the
                first {this.state.max_entries} entries will be displayed</b>. Please choose a different time range or
                change interval.
            </div>)
        }
        return (
            <div>
                {warning}
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