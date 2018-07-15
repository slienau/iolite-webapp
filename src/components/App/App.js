import React, { Component } from 'react';
import Navbar from '../Navbar/navbar';
import Charts from '../../containers/Charts/charts'
import Tables from '../../containers/Tables/tables'
import Settings from '../../containers/Settings/settings'
import '../../css/Main.css'
import './App.css'

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
    this.setState({
      chartData: {
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets: [
          {
            label: 'Population',
            data: [
              617594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
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