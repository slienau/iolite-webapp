import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import {colorPool, chartOptions} from './options'
import DateRange from './DateRange'
import {connect} from 'react-redux';
import PropTypes from "prop-types";

class Charts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: {},
            colorPool: colorPool,
            chartOptions: chartOptions
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

        var datasets = [];

        showData.rooms.forEach(room => {
            room.devices.forEach(device => {
                var deviceColor = this.state.colorPool.shift();
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
                device.usage.slice(800).forEach(usage => {
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

                <DateRange/>

                <Line
                    data={this.state.chartData}
                    options={this.state.chartOptions}
                />

            </div>
        );
    }
}

Charts.propTypes = {
    visibleData: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        visibleData: state.home.visibleData
    };
}

export default connect(mapStateToProps, null)(Charts);