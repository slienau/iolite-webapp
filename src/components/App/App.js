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
      restData: {},
      devices: [],
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
    let devices = this.makeDeviceData(ajaxResponse);
    this.setState({
      restData: ajaxResponse,
      devices: devices
    });
  }

  makeDeviceData(restData) {
    let result = []

    const rooms = restData.rooms;
    rooms.forEach(room => {
      room.devices.forEach(device => {
        device.show = true;
        result.push(device);
      })
    });
    return result;
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
    let devices = this.state.devices;
    devices.forEach(device => {
      if (device.id === deviceId) {
        device.show = selected;
        console.log(device)
      }
    })
    this.setState({
      devices: devices
    });
  }

  render() {
    return (
      <div>
        <Navbar switchPage={this.switchContentPage.bind(this)} contentPage={this.state.contentPage} restData={this.state.restData} onDeviceSelect={this.handleNavbarSelect.bind(this)} />
        <div className="container-fluid">
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            {(() => {
              switch (this.state.contentPage) {
                case "charts": return (<Charts devices={this.state.devices} />);
                case "tables": return (<Tables devices={this.state.devices} />);
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