import React, {Component} from 'react';
import Router from '../Router/router';
import Navbar from '../Navbar/navbar';
import '../../css/Main.css'
import './App.css'

class App extends Component {

  render() {
    return (

        <div className="container-fluid">

          <div className="row">
            <Navbar/>
          </div>

          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <Router/>
          </main>

        </div>
    );
  }
}

export default App;
