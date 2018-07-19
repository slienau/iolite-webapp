import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {Line} from 'react-chartjs-2';
import {colorPool, chartOptions} from './options'

import 'react-datepicker/dist/react-datepicker.css';

export default class Charts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: {},
            colorPool: colorPool,
            chartOptions: chartOptions
        };
    }

    componentWillMount() {
        const chartData = this.getChartData(this.props.showData);
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
            </div>
        );
    }
}
