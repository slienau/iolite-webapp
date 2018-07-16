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
      restData: { },
      viewData: {
        rooms: []
      },
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
      restData: ajaxResponse
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
    console.log(this.state.selectedDevices)
    this.updateViewData();
  }

  updateViewData() {
    console.log('TODO: Update view data')
    let viewData = this.state.viewData;
    let restData = this.state.restData;
    if(restData.rooms){
      console.log('rooms exist! go on working')
    }
    this.setState({
      viewData: viewData
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
                case "charts": return (<Charts restData={this.state.restData} />);
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