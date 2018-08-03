import React, {Component} from 'react';
import DateRange from './DateRange'
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import LineChart from './LineChart'
import PieChart from './PieChart'
import BarHorizontalChart from './BarHorizontalChart'

class Charts extends Component {

    constructor() {
        super();
        this.state = {
            chartType: 'line',
        }
        this.changeChartType = this.changeChartType.bind(this);
    }

    changeChartType(chartType) {
        console.log('changing chart type to ' + chartType)
        this.setState({
            chartType: chartType
        });
    }

    render() {
        const buttonGroupStyle = {
            marginBottom: '30px'
        }
        return (
            <div>

                <div>
                    Chart Type<br/>
                    <div className="btn-group" style={buttonGroupStyle} role="group" aria-label="Chart switcher">
                        <ChartTypeButton chartType="line" displayName="Line" changeChartType={this.changeChartType} activeChartType={this.state.chartType} />
                        <ChartTypeButton chartType="pie" displayName="Pie" changeChartType={this.changeChartType} activeChartType={this.state.chartType} />
                        <ChartTypeButton chartType="barhorizontal" displayName="Horizontal Bar" changeChartType={this.changeChartType} activeChartType={this.state.chartType} />
                    </div>
                </div>

                <DateRange/>

                {(() => {
                    switch (this.state.chartType) {
                        case "line":
                            return (<LineChart visibleData={this.props.visibleData}/>);
                        case "pie":
                            return (<PieChart visibleData={this.props.visibleData}/>);
                        case "barhorizontal":
                            return (<BarHorizontalChart visibleData={this.props.visibleData}/>);
                        default:
                            return 'Content';
                    }
                })()}

            </div>
        );
    }
}

class ChartTypeButton extends Component {
    render() {
        const changeChartType = this.props.changeChartType;
        const classes = (this.props.chartType === this.props.activeChartType ? 'active ' : '') + "btn btn-secondary";
        return (
            <button type="button" className={classes} onClick={() => changeChartType(this.props.chartType)}>{this.props.displayName}</button>
        )
    }
}

Charts.propTypes = {
    visibleData: PropTypes.object.isRequired
}

ChartTypeButton.propTypes = {
    chartType: PropTypes.string,
    activeChartType: PropTypes.string,
    displayName: PropTypes.string,
    changeChartType: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        visibleData: state.home.visibleData
    };
}

export default connect(mapStateToProps, null)(Charts);

