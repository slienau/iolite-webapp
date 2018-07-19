import React, {Component} from 'react';
import moment from "moment/moment";
import DatePicker from 'react-datepicker';

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

export default DateRange;
