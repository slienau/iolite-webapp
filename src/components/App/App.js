import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Charts from '../../containers/Charts/Charts'
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
      restData: {},
      selectedDevices: []
    }
  }

  componentWillMount() {
    this.getRestData();
    this.switchContentPage('charts'); // start on 'charts' page
  }

  switchContentPage(page) {
    this.setState({
      contentPage: page
    });
  }

  getRestData() {
    // Ajax calls here
    let ajaxResponse = sampleData;
    this.setState({
      restData: ajaxResponse,
    });
  }

  handleNavbarSelect(deviceId, selected) {
    let selectedDevices = this.state.selectedDevices;
    if (selected) { // add to selectedDevices
      selectedDevices.push(deviceId);
    } else { // remove from selectedDevices
      let index = selectedDevices.indexOf(deviceId);
      selectedDevices.splice(index, 1);
    }
    this.setState({
      selectedDevices: selectedDevices
    });
    console.log('selected devices: ' + this.state.selectedDevices)
  }

  render() {
    return (
      <div>
        <Navbar switchPage={this.switchContentPage.bind(this)} contentPage={this.state.contentPage} restData={this.state.restData} onDeviceSelect={this.handleNavbarSelect.bind(this)} />
        <div className="container-fluid">
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            {(() => {
              switch (this.state.contentPage) {
                case "charts": return (<Charts showData={this.state.restData} />);
                case "tables": return (<Tables showData={this.state.restData} />);
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