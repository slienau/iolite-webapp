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

    getChartData(visibleData) {
        const MAX_ENTRYS = 50;

        let labels = []
        visibleData.rooms.forEach(room => {
            room.devices.forEach(device => {
                if(device.usage.length>MAX_ENTRYS && !this.state.alertSent) {
                    alert('Too many data entrys for Bar chart. Only the first ' + MAX_ENTRYS + ' entrys will be displayed. Please choose a different time range or change interval.')
                    this.setState({
                        alertSent: true
                    })
                }
                if(labels.length==0){
                    device.usage.slice(0,MAX_ENTRYS-1).forEach(usage => {
                        labels.push(usage.timestamp)
                    })
                }
            })
        })

        let datasets = []

        visibleData.rooms.forEach(room => {
            room.devices.forEach(device => {
                let singleDataset = {
                    label: device.name,
                    backgroundColor: device.color,
                    borderColor: device.color,
                    borderWidth: 1,
                    hoverBackgroundColor: device.color,
                    hoverBorderColor: device.color,
                    data: []
                }
                device.usage.forEach(usage => {
                    singleDataset.data.push(usage.value)
                })
                datasets.push(singleDataset)
            })
        })


        const chartData = {
            labels: labels,
            datasets: datasets
        }

        return chartData;
    }

    render() {
        return (
            <div>

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