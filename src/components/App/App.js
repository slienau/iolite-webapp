import React, { Component } from 'react';
import Router from '../Router/router';
import Navbar from '../Navbar/navbar';
import '../../css/Main.css'
import './App.css'

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <div className="container-fluid">
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <Router />
          </main>
        </div>
      </div>
    );
  }
}

export default App;