import React, {Component} from 'react';
import '../../redux_js/store/index'
import '../../redux_js/actions/index'
import {changeColortype, changeCurrency, changeGraphtype, changeMode, changePrice} from "../../redux_js/actions/index";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './settings.css';


class Settings extends Component {

  constructor(props) {
    super(props);

  }


  render() {
    return (
        <div>
          <form className="rounded_corner pStyle">

            <h1 className="rounded_corner_top settings_header">Settings</h1>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h2>Preferences</h2>
                  <div className="row">
                    <div className="col-md-6">
                      Graphtype:
                    </div>
                    <div className="col-md-6">
                      <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button"
                                id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                          {this.props.graphType}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a className="dropdown-item" onClick={() => this.props.changeGraphtype('Dotted')}>Dotted</a>
                          <a className="dropdown-item" onClick={() => this.props.changeGraphtype('Line')}>Line</a>
                          <a className="dropdown-item" onClick={() => this.props.changeGraphtype('Bars')}>Bars</a>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      Colorscheme:
                    </div>
                    <div className="col-md-6">
                      <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button"
                                id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                          {this.props.colorType}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a className="dropdown-item" onClick={() => this.props.changeColortype('Light')}>Light</a>
                          <a className="dropdown-item" onClick={() => this.props.changeColortype('Dark')}>Dark</a>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="col-md-6">
                  <h2>Settings</h2>
                  <div className="row">
                    <div className="col-md-6">
                      Price per KwH: {this.props.price} {this.props.currency}
                    </div>
                    <div className="col-md-6">
                      <input type="text"
                             onBlur={evt => this.props.changePrice(evt.target.value)} className="width"/>
                    </div>
                    <div className="col-md-6">Currency
                    </div>
                    <div className="col-md-6">
                      <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button"
                                id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                          {this.props.currency}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a className="dropdown-item" onClick={() => this.props.changeCurrency('€')}>€</a>
                          <a className="dropdown-item" onClick={() => this.props.changeCurrency('$')}>$</a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </form>
        </div>


    );
  }


}


function mapStateToProps(state) {


  return {
    mode: state.settings.mode,
    price: state.settings.price,
    currency: state.settings.currency,
    graphType: state.settings.graphType,
    colorType: state.settings.colorType
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
        changeMode: changeMode, changePrice: changePrice, changeCurrency: changeCurrency,
        changeGraphtype: changeGraphtype, changeColortype: changeColortype
      }
      , dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Settings);

