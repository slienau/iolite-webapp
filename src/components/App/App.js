import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Navbar from '../Navbar/Navbar';
import Charts from '../../containers/Charts/Charts'
import Tables from '../../containers/Tables/tables'
import Settings from '../../containers/Settings/settings'
import '../../css/Main.css'
import './App.css'

//Redux imports
import {connect} from 'react-redux';
import {fetchData} from '../../redux_js/actions/homeActions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contentPage: '',
      selectedDevices: []
    }
  }

  componentWillMount() {
      this.props.fetchData();
      this.switchContentPage('charts'); // start on 'charts' page
  }

  switchContentPage(page) {
    this.setState({
      contentPage: page
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
          <Navbar switchPage={this.switchContentPage.bind(this)} contentPage={this.state.contentPage}
                  onDeviceSelect={this.handleNavbarSelect.bind(this)}/>
        <div className="container-fluid">
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            {(() => {
                switch (this.state.contentPage) {
                    case "charts":
                        return (<Charts/>);
                    case "tables":
                        return (<Tables/>);
                    case "settings":
                        return (<Settings/>);
                    default:
                        return "Content";
                }
            })()}
          </main>
        </div>
      </div>
    );
  }
}

App.propTypes = {
    fetchData: PropTypes.func.isRequired
};

export default connect(null, {fetchData})(App);
