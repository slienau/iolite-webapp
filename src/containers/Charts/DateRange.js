import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import {changeStartDate, changeEndDate, changeInterval} from "../../redux_js/actions/homeActions";
import connect from "react-redux/es/connect/connect";
import PropTypes from "prop-types";


class DateRange extends Component {
    constructor(props) {
        super(props);
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
    }

    handleChangeStart(date) {
        this.props.changeStartDate(date);
    }

    handleChangeEnd(date) {
        this.props.changeEndDate(date);
    }

    render() {

        return (
            <div className="row justify-content-end">
                <div className="col-2">
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
                <div className="col-2">
                    To
                    <DatePicker
                        selected={this.props.endDate}
                        selectsEnd
                        startDate={this.props.startDate}
                        endDate={this.props.endDate}
                        onChange={this.handleChangeEnd}
                    />
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
    interval: PropTypes.string.isRequired

};

function mapStateToProps(state) {
    return {
        startDate: state.home.startDate,
        endDate: state.home.endDate,
        interval: state.home.interval
    };
}

export default connect(mapStateToProps, {changeStartDate: changeStartDate, changeEndDate: changeEndDate, changeInterval: changeInterval})(DateRange);