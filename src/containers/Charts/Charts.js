import React, {Component} from 'react';
import DateRange from './DateRange'
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import LineChart from './LineChart'

class Charts extends Component {

    render() {
        return (
            <div>

                <DateRange/>

                <LineChart visibleData={this.props.visibleData}/>

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