import React, {Component} from 'react';
import MdSettings from 'react-icons/lib/md/settings'
import MdMenu from 'react-icons/lib/md/menu'
import MdClose from 'react-icons/lib/md/close'
import './navbar.css'

const TOGGLE_BUTTON_SIZE = 42;

export default class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    const navClasses = (this.state.isToggleOn ? 'showSidebar ' : '') + 'bg-light sidebar position-absolute';
    const switchPage = this.props.switchPage;
    return (
        <nav id="sidenav" className={navClasses}>
          <button id="sidebar-toggle-button" onClick={this.handleClick} type="button" className="btn btn-secondary">
            {this.state.isToggleOn ? (<MdClose size={TOGGLE_BUTTON_SIZE}/>) : (<MdMenu size={TOGGLE_BUTTON_SIZE}/>)}
          </button>
          <ul className="nav flex-column">
            <li className="nav-item">
              <LinkButton contentPage="charts" activePage={this.props.contentPage} title="Charts"
                          switchPage={this.props.switchPage}/>
              <LinkButton contentPage="tables" activePage={this.props.contentPage} title="Tables"
                          switchPage={this.props.switchPage}/>
            </li>
            {
              this.props.restData.rooms
                  .sort(function (a, b) {
                    return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
                  }) // sort by room name
                  .map(room => (
                      <Room name={room.name}>
                        {
                          room.devices
                              .sort(function (a, b) {
                                return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
                              }) // sort by device name
                              .map(device =>
                                  (<Device name={device.name} key={device.name}/>)
                              )
                        }
                      </Room>
                  ))
            }
          </ul>
          <div id="navbar-settings-icon" className="position-absolute bg-light">
            <a onClick={() => switchPage('settings')}><MdSettings color="grey" size={36}/></a>
          </div>
        </nav>
    );
  }
}

class LinkButton extends Component {
  render() {
    const switchPage = this.props.switchPage;
    const classes = (this.props.contentPage === this.props.activePage ? 'active ' : '') + "nav-link btn btn-primary float-left navbar-top-button";
    return (
        <button className={classes} onClick={() => switchPage(this.props.contentPage)}>{this.props.title}</button>
    )
  }
}

class Room extends React.Component {
  render() {
    var collapseId = this.props.name.replace(' ', '').toLowerCase()
    return (
        <li>
          <a className="btn btn-secondary room-room" data-toggle="collapse" href={"#" + collapseId} role="button"
             aria-expanded="false" aria-controls={collapseId}>{this.props.name}</a>
          <div className="collapse show" id={collapseId}>
            <table className="switchtable">
              <tbody>
              {this.props.children}
              </tbody>
            </table>
          </div>
        </li>
    );
  }
}

class Device extends Component {
  render() {

    const deviceName = this.props.name;

    return (
        <tr key={deviceName}>
          <td className="room-device"><Switch device={deviceName}/></td>
          <td>{deviceName}</td>
        </tr>
    );
  }
}

class Switch extends Component {
  render() {
    return (
        <label className="switch">
          <input type="checkbox"></input>
          <span className="slider round"></span>
        </label>
    )
  }
}