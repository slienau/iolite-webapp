import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';
import {pieChartOptions} from './chartOptions'
import PropTypes from "prop-types";

class PieChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: {},
            chartOptions: pieChartOptions
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
        let showDevices = []
        showData.rooms.forEach(room => {
            room.devices.forEach((device => {
                let sum = device.usage.reduce((acc, cur) => acc + cur.value, 0);
                sum = Math.round(sum * 100) / 100;
                let thisDevice = {
                    name: device.name,
                    color: device.color,
                    usageSum: sum
                };
                showDevices.push(thisDevice);
            }))
        })

        let newChartData = {
            labels: [
            ],
            datasets: [{
                data: [],
                backgroundColor: [],
                hoverBackgroundColor: []
            }]
        }
        showDevices
            .sort(function (a, b) { // sort by usage sum
                return (a.usageSum < b.usageSum) ? 1 : ((b.usageSum < a.usageSum) ? -1 : 0);
            })
            .forEach(device => {
                newChartData.labels.push(device.name)
                newChartData.datasets[0].data.push(device.usageSum)
                newChartData.datasets[0].backgroundColor.push(device.color)
                newChartData.datasets[0].hoverBackgroundColor.push(device.color)
            })
        return newChartData;
    }

    render() {
        return (
            <div>

                <Pie
                    data={this.state.chartData}
                    options={this.state.chartOptions}
                />

            </div>
        );
    }
}

PieChart.propTypes = {
    visibleData: PropTypes.object.isRequired
}

export default PieChart;