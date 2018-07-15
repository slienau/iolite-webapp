import React, { Component } from 'react';
import Navbar from '../Navbar/navbar';
import Charts from '../../containers/Charts/charts'
import Tables from '../../containers/Tables/tables'
import Settings from '../../containers/Settings/settings'
import '../../css/Main.css'
import './App.css'
import sampleData from '../../../resources/rest_sample_response.json'

class App extends Component {
  constructor() {
    super();
    this.state = {
      contentPage: '',
      chartData: {}
    }
    this.switchContentPage = this.switchContentPage.bind(this);
  }

  componentWillMount() {
    this.getChartData();
    this.switchContentPage('charts')
  }

  switchContentPage(page) {
    this.setState({
      contentPage: page
    });
  }

  getChartData() {
    // Ajax calls here

    console.log(sampleData.rooms[0].devices[0].usage[0].timestamp);
    const deviceName = sampleData.rooms[0].devices[0].name;
    const ts = sampleData.rooms[0].devices[0].usage[0].timestamp;
    const dt = new Date(ts);
    console.log(dt.getFullYear());
    console.log(dt.getDate());

    this.setState({
      chartData:{
				datasets: [{
					label: 'Dataset with string point data',
					backgroundColor: 'red',
					borderColor: 'red',
					fill: false,
					data: [{
						x: new Date(2018,1),
						y: 10
					}, {
						x: new Date(2018,2),
						y: 20
					}, {
						x: new Date(2018,3),
						y: 15
					}, {
						x: dt,
						y: 25
					}],
				}, {
					label: 'Dataset with date object point data',
					backgroundColor: 'blue',
					borderColor: 'blue',
					fill: false,
					data: [{
						x: new Date(2018,1),
						y: 100
					}, {
						x: new Date(2018,2),
						y: 200
					}, {
						x: new Date(2018,3),
						y: 150
					}, {
						x: new Date(2018,4),
						y: 250
					}]
				}]
			}
    });
  }
  render() {
    return (
      <div>
        <Navbar switchPage={this.switchContentPage} contentPage={this.state.contentPage} />
        <div className="container-fluid">
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            {(() => {
              switch (this.state.contentPage) {
                case "charts": return (<Charts chartData={this.state.chartData} />);
                case "tables": return (<Tables />);
                case "settings": return (<Settings />);
                default: return "Content";
              }
            })()}
          </main>
        </div>
      </div>
    );
  }
}

export default App;