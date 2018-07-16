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
      selectedDevices: ['TV', 'Boiler'] // TODO
    }
    this.switchContentPage = this.switchContentPage.bind(this);
  }

  componentWillMount() {
    this.getRestData();
    this.switchContentPage('charts');
  }

  switchContentPage(page) {
    this.setState({
      contentPage: page
    });
  }

  getRestData() {
    // Ajax calls here
    this.setState({
      restData: sampleData
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