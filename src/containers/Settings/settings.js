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

  checkInput(string){
    string = string.replace('.', ',');
    if (string.length>5){
      console.log('there');
      return string[5];
    }

    var rgx = /^[0-9]*\,?[0-9]*$/;
    var x = string.match(rgx);
    if(x == null){
        return this.props.price;

    }
    if (x[0] === string){
      return string
      }

    return this.props.price;
  }
  upperCase(string){
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  displayNavbar(string){
     return string.charAt(0).toLowerCase() + string.slice(1);
    }

    daterange(string){
        if (string === 'minute'){
            return 'minutely';
        }
        if (string === 'hour'){
            return 'hourly';
        }
        if (string === 'day'){
          return 'daily';
        }
        if (string === 'week'){
            return 'weekly';
        }
        if (string === 'month'){
            return 'monthly';
        }
        if (string === 'year'){
            return 'yearly';
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
                       Interval is {this.daterange(this.props.daterange)}
                    </div>
                    <div className="col-md-6">
                      <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button"
                                id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                          {this.upperCase(this.daterange(this.props.daterange))}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a className="dropdown-item" onClick={() => this.props.changeDateRange('minute')}>Minutely</a>
                          <a className="dropdown-item" onClick={() => this.props.changeDateRange('hour')}>Hourly</a>
                          <a className="dropdown-item" onClick={() => this.props.changeDateRange('day')}>Daily</a>
                          <a className="dropdown-item" onClick={() => this.props.changeDateRange('week')}>Weekly</a>
                          <a className="dropdown-item" onClick={() => this.props.changeDateRange('month')}>Monthly</a>
                          <a className="dropdown-item" onClick={() => this.props.changeDateRange('year')}>Yearly</a>
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
                             onBlur={evt => this.props.changePrice(this.checkInput(evt.target.value))} className="width"/>
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

