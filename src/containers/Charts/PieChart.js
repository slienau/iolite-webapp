import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';
import {pieChartOptions} from './options'
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

        let newChartData = {
            labels: [
            ],
            datasets: [{
                data: [],
                backgroundColor: [],
                hoverBackgroundColor: []
            }]
        }
        showData.rooms.forEach(room => {
            room.devices.forEach((device => {
                newChartData.labels.push(device.name)
                let sum = device.usage.reduce((acc,cur) => acc + cur.value, 0)
                newChartData.datasets[0].data.push(sum)
                newChartData.datasets[0].backgroundColor.push(device.color)
                newChartData.datasets[0].hoverBackgroundColor.push(device.color)
            }))
        })

        console.log(newChartData)
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