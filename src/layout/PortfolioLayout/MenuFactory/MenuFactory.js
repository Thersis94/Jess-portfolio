import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import PropTypes from 'prop-types';

/**
 * Takes a route data object and builds out a menu element
 */
class MenuFactory extends React.Component {

    /**
     * Creates an instance of the MenuFactory Class
     * @param {*} props 
     */
    constructor(props) {
        super();
        this.props = props;
        this.buildNavLinks();
    }

    /**
     * Builds a list of Nav.Link elements using the array of objects passed by the routeData param
     */
    buildNavLinks() {

        this.menuElements = [];
        let count = 0;
        const routeData = this.props.routeData;
        Object.keys(routeData).forEach(function (item) {
            let element = [];
            if (this.props.icon === true) {
                element.push(<div key={"icon-" + count} className={"px-1 nav-icon nav-element-icon-" + count} >{routeData[item].icon}</div>);
            }
            if (this.props.text === true) {
                element.push(<div key={"text-" + count} className={"px-1 nav-text nav-element-text-" + count} >{routeData[item].text}</div>);
            }
            if (this.props.dropdown) {
                this.menuElements.push(<NavDropdown.Item key={routeData[item].name + count} className={routeData[item].name + "-nav-element-" + count + " d-flex"} href={routeData[item].link}>{element}</NavDropdown.Item>)
                this.content = <NavDropdown title={this.props.name} className={routeData[item].name}>{this.menuElements}</NavDropdown>;
            } else {
                this.menuElements.push(<Nav.Link key={routeData[item].name + count} className={routeData[item].name + "-nav-element-" + count + " d-flex"} href={routeData[item].link}>{element}</Nav.Link>)
                this.content = <Nav title="nav-menu" className={routeData[item].name}>{this.menuElements}</Nav>;
            }
            count++;
        }, this);

    }

    /**
     * Returns a menu component
     */
    render() {
        return this.content;
    }

}

/** Sets Default Props */
MenuFactory.defaultProps = {
    text: true,
    icon: true,
    dropdown: false
};
/** Prop Validators */
MenuFactory.propTypes = {
    text: PropTypes.bool,
    icon: PropTypes.bool,
    name: PropTypes.any.isRequired,
    dropdown: PropTypes.bool
};

export default MenuFactory;