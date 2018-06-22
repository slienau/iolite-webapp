import React from "react";

import { Leftsidebar } from './leftsidebar'

export class ChartView extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <h1>Chart View</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <Leftsidebar />
                    </div>
                    <div className="col">
                        Charts
                    </div>
                </div>
            </div>
        );
    }
}