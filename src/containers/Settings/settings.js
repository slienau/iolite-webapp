import React, {Component} from 'react';
import '../../redux_js/store/index'
import '../../redux_js/actions/index'
import {changeDateRange, changeCurrency, changeNavbarDefault, changeMode, changePrice} from "../../redux_js/actions/index";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './settings.css';


class Settings extends Component {

  constructor(props) {
    super(props);

  }

  displayNavbar(string){
     return string.charAt(0).toLowerCase() + string.slice(1);
    }

    daterange(string){
      if (string === '1d'){
          return 'one day';
      }
        if (string === '1w'){
            return 'one week';
        }
        if (string === '1m'){
            return 'one month';
        }
        if (string === '1y'){
            return 'one year';
        }
    }

  render() {
    return (
        <div>
          <form className="rounded_corner pStyle">

            <div className="container inside_div">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-6">
                      Navbar is {this.displayNavbar(this.props.navbar)}
                    </div>
                    <div className="col-md-6">
                      <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button"
                                id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                          {this.props.navbar}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a className="dropdown-item" onClick={() => this.props.changeNavbarDefault('Collapsed')}>Collapsed</a>
                          <a className="dropdown-item" onClick={() => this.props.changeNavbarDefault('Expanded')}>Expanded</a>

                        </div>
                      </div>
                    </div>
                  </div>
                    <br/>
                  <div className="row">
                    <div className="col-md-6">
                       Daterange is {this.daterange(this.props.daterange)}
                    </div>
                    <div className="col-md-6">
                      <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button"
                                id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                          {this.props.daterange}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a className="dropdown-item" onClick={() => this.props.changeDateRange('1d')}>1 Day</a>
                          <a className="dropdown-item" onClick={() => this.props.changeDateRange('1w')}>1 Week</a>
                          <a className="dropdown-item" onClick={() => this.props.changeDateRange('1m')}>1 Month</a>
                          <a className="dropdown-item" onClick={() => this.props.changeDateRange('1m')}>1 Year</a>
                        </div>
                      </div>
                    </div>
                  </div>
                    <br/>
                </div>


                <div className="col-md-6">
                  <div className="row">

                    <div className="col-md-6">
                      Price per KwH: {this.props.price} {this.props.currency}
                    </div>

                    <div className="col-md-6">
                      <input type="text"
                             onBlur={evt => this.props.changePrice(evt.target.value)} className="width"/>
                    </div>
                  </div>
                    <br/>
                    <div className="row">

                    <div className="col-md-6">
                        Currency
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
    navbar: state.settings.navbar,
    daterange: state.settings.daterange
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
        changeMode: changeMode, changePrice: changePrice, changeCurrency: changeCurrency,
        changeNavbarDefault: changeNavbarDefault, changeDateRange: changeDateRange
      }
      , dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Settings);

