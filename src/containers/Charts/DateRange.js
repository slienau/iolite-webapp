import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import {changeStartDate, changeEndDate, changeInterval, fetchData} from "../../redux_js/actions/homeActions";
import connect from "react-redux/es/connect/connect";
import PropTypes from "prop-types";


class DateRange extends Component {
    constructor(props) {
        super(props);
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.handleChangeInterval = this.handleChangeInterval.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeStart(date) {
        this.props.changeStartDate(date);
    }

    handleChangeEnd(date) {
        this.props.changeEndDate(date);
    }

    handleChangeInterval(event) {
        this.props.changeInterval(event.target.value);
    }

    handleSubmit() {
        this.props.fetchData(this.props.startDate, this.props.endDate, this.props.interval)
    }

    render() {

        return (
            <div className="row justify-content-end">
                <div>
                    From
                    <DatePicker
                        selected={this.props.startDate}
                        selectsStart
                        startDate={this.props.startDate}
                        endDate={this.props.endDate}
                        onChange={this.handleChangeStart}
                        dateFormatCalendar={"DD MM YYYY"}
                    />
                </div>
                <div>
                    To
                    <DatePicker
                        selected={this.props.endDate}
                        selectsEnd
                        startDate={this.props.startDate}
                        endDate={this.props.endDate}
                        onChange={this.handleChangeEnd}
                    />
                </div>
                <div>
                    <label htmlFor="intervalSelector">Interval</label>
                    <select id="intervalSelector" className="form-control" value={this.props.interval} onChange={this.handleChangeInterval}>
                        <option value="hour">Hourly</option>
                        <option value="day">Daily</option>
                        <option value="week">Weekly</option>
                        <option value="month">Monthly</option>
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
        interval: state.home.interval
    };
}

export default connect(mapStateToProps, {changeStartDate: changeStartDate, changeEndDate: changeEndDate, changeInterval: changeInterval, fetchData: fetchData})(DateRange);