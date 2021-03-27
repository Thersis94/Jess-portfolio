import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';

/**
 * Component that wraps and formats page header content
 */
class Header extends React.Component {

    /**
     * Creates an instance of the Header Class
     * @param {*} props 
     */
    constructor(props) {
        super();
    }

    /**
     * Returns a Header Component
     */
    render() {
        return (
            <Navbar id="header-container" className={this.props.bootstrap}>
                <Col className="header-left col-3">
                    {this.props.left}
                </Col>
                <Col className="header-center col-8">
                    {this.props.center}
                </Col>
                <Col className="header-right col-1">
                    {this.props.right}
                </Col>
            </Navbar>
        );
    }

}

/** Sets Default Props */
Header.defaultProps = {
    bootstrap: "header"
};
/** Prop Validators */
Header.propTypes = {
    left: PropTypes.any,
    center: PropTypes.any,
    right: PropTypes.any
};

export default Header;