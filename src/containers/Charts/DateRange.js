import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import {changeStartDate, changeEndDate, changeInterval, fetchData} from "../../redux_js/actions/homeActions";
import connect from "react-redux/es/connect/connect";
import PropTypes from "prop-types";
import moment from "moment";


class DateRange extends Component {
    constructor(props) {
        super(props);
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.handleChangeInterval = this.handleChangeInterval.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeStart(event) {
        let date = moment(event.target.value);
        this.props.changeStartDate(date);
    }

    handleChangeEnd(event) {
        let date = moment(event.target.value);
        this.props.changeEndDate(date);
    }

    handleChangeInterval(event) {
        this.props.changeInterval(event.target.value);
    }

    handleSubmit() {
        this.props.fetchData(this.props.startDate, this.props.endDate, this.props.interval)
    }

    getCurrentDate(date){

        let dd = date.getDate();
        let mm = date.getMonth()+1; //January is 0!
        let yyyy = date.getFullYear();

        if(dd<10) {
            dd = '0'+dd
        }

        if(mm<10) {
            mm = '0'+mm
        }

        return yyyy + '-' + mm + '-' + dd;
    }
    render() {

        var interval = this.props.standardInterval;

        if (this.props.interval !== ''){
            interval = this.props.interval;
        }

        return (
            <div className="row justify-content-end">
                <div>
                    From
                    <form>
                        <input type='date' value={this.getCurrentDate(this.props.startDate['_d'])} onChange={this.handleChangeStart}/>
                    </form>

                </div>
                <div>

                    To
                    <form>
                        <input type='date' value={this.getCurrentDate(this.props.endDate['_d'])} onChange={this.handleChangeEnd}/>
                    </form>

                </div>
                <div>
                    <label htmlFor="intervalSelector">Interval</label>
                    <select id="intervalSelector" className="form-control" value={interval} onChange={this.handleChangeInterval}>
                        <option value="minute">Minute</option>
                        <option value="hour">Hourly</option>
                        <option value="day">Daily</option>
                        <option value="week">Weekly</option>
                        <option value="month">Monthly</option>
                        <option value="year">Yearly</option>
                    </select>
                </div>
                <div>
                    <br/>
                    <button onClick={this.handleSubmit} className="btn btn-secondary">Submit</button>
                </div>
            </div>
        );
    }
}

DateRange.propTypes = {
    changeStartDate: PropTypes.func.isRequired,
    changeEndDate: PropTypes.func.isRequired,
    changeInterval: PropTypes.func.isRequired,
    startDate: PropTypes.object.isRequired,
    endDate: PropTypes.object.isRequired,
    interval: PropTypes.string.isRequired,
    fetchData: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        startDate: state.home.startDate,
        endDate: state.home.endDate,
        interval: state.home.interval,
        standardInterval: state.settings.daterange
    };
}

export default connect(mapStateToProps, {changeStartDate: changeStartDate, changeEndDate: changeEndDate, changeInterval: changeInterval, fetchData: fetchData})(DateRange);