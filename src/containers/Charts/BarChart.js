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
        let alertSentInside = false;
        let labels = []
        visibleData.rooms.forEach(room => {
            room.devices.forEach(device => {
                if(device.usage.length>MAX_ENTRYS && !this.state.alertSent && !alertSentInside) {
                    alert('Too many data entrys for Bar chart. Only the first ' + MAX_ENTRYS + ' entrys will be displayed. Please choose a different time range or change interval.')
                    alertSentInside = true;
                    this.setState({
                        alertSent: true
                    })
                }
                if(labels.length==0){
                    device.usage.slice(0,MAX_ENTRYS).forEach(usage => {
                        labels.push(usage.timestamp)
                    })
                }
            })
        })

        let devices = []
        visibleData.rooms.forEach(room => {
            room.devices.forEach((device => {
                let sum = device.usage.reduce((acc,cur) => acc + cur.value, 0)
                let thisDevice = {
                    name: device.name,
                    color: device.color,
                    usage: device.usage,
                    usageSum: sum
                }
                devices.push(thisDevice);
            }))
        })

        let datasets = []
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
                }
                device.usage.slice(0,MAX_ENTRYS).forEach(usage => {
                    singleDataset.data.push(usage.value)
                })
                datasets.push(singleDataset)
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