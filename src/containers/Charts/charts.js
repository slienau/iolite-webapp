import React, {Component} from 'react';
import LineChart from '../../components/Samplecharts/line';

class Charts extends Component {

  render() {
    return (

        <div>
          <div
              className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Energy consumption</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar"></span>
                This week
              </button>
            </div>
          </div>

          <LineChart/>
        </div>
    );
  }
}

export default Charts;
