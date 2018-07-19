import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PageSwitchButton extends Component {
    render() {
        const switchPage = this.props.switchPage;
        const classes = (this.props.contentPage === this.props.activePage ? 'active ' : '') + "nav-link btn btn-primary float-left navbar-top-button";
        return (
            <button className={classes} onClick={() => switchPage(this.props.contentPage)}>{this.props.title}</button>
        )
    }
}

PageSwitchButton.propTypes = {
    switchPage: PropTypes.func.isRequired,
    contentPage: PropTypes.string.isRequired
};

export default PageSwitchButton;
