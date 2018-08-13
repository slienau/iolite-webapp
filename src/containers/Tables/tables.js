import React, {Component} from 'react';

import './tables.css';
import {connect} from "react-redux";
import TableDate from "./tableDate.js";
import TableDevices from "./tableDevices.js";


var MetaData = [
    {
        name: "deviceid",
        title: "Name"
    },
    {
        name: "value",
        title: "Consumption"
    },
    {
        name: "costs",
        title: "Costs"
    }
]



const TableHead = (prop) => {
    return (

        <thead>
            <tr>
                {prop.list.map(item => (
                    <th>{item.title}</th>

                ))}
            </tr>
        </thead>

    )
}

class Tables extends Component {

    constructor() {
        super();
        this.state = {
            tableType :"Days",
        };
    }

    handleSelect(e) {
        e.preventDefault();
        this.setState({tableType : e.target.value})
    }

    render() {

        return(
              <React.Fragment>
                <select className="selectpicker" onChange={this.handleSelect.bind(this)} data-style="btn-new">
                    <option>Days</option>
                    <option>Devices</option>
                </select>
                <div id="table">
                    <h1 className="h2">Energy consumption</h1>
                    <div className="table-responsive">
                        <table className="table table-striped table-sm">
                            <TableHead list={MetaData}></TableHead>

                            {(() => {
                                switch (this.state.tableType) {
                                    case "Devices":
                                        return (
                                            <TableDevices visibleData={this.props.visibleData} price={this.props.price} currency={this.props.currency}> </TableDevices>);
                                    case "Days":
                                        return (
                                            <TableDate visibleData={this.props.visibleData} price={this.props.price} currency={this.props.currency}></TableDate>);
                                    default:
                                        return 'Content';
                                }
                            })()}
                         </table>
                    </div>
                </div>
              </React.Fragment>
          )
    }

}

function mapStateToProps(state) {


    return {
        price: state.settings.price,
        currency: state.settings.currency,
        visibleData: state.home.visibleData
    };
};

export default connect(mapStateToProps)(Tables);





