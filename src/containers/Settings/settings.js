import React, { Component, createRef} from 'react';
import '../../redux_js/store/index'
import '../../redux_js/actions/index'
import { changeMode, changePrice , changeCurrency, changeGraphtype, changeColortype} from "../../redux_js/actions/index";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Modal, Button} from 'react-bootstrap';

const pStyle ={
background: "lightgrey",

};

const lila = {
    background: '#422470',
};
const white = {
    color: 'white',
};

const width = {
    width: '50%',
};

class Settings extends Component {

        constructor(props){
            super(props);

        }

        render()
        {

            return (

                <div className="static-modal">
                    <Modal.Dialog bsSize="large" >
                        <Modal.Header style ={lila}>
                            <Modal.Title><h1 style={white}>Settings</h1></Modal.Title>
                        </Modal.Header>

                        <Modal.Body style={pStyle}>
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
                                                    <button  className="btn btn-secondary dropdown-toggle" type="button"
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
                                                       onBlur={evt => this.props.changePrice(evt.target.value)} style={width} />
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
                        </Modal.Body>

                        <Modal.Footer>
                            <Button bsStyle="primary" onClick={() => alert('how to go back without visible reload?')} href="./">Done</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>


            );
        }


}



function mapStateToProps(state){


    return {
        mode: state.settings.mode,
        price: state.settings.price,
        currency: state.settings.currency,
        graphType: state.settings.graphType,
        colorType: state.settings.colorType
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({changeMode: changeMode, changePrice: changePrice, changeCurrency: changeCurrency,
            changeGraphtype: changeGraphtype, changeColortype: changeColortype}
    , dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Settings);

