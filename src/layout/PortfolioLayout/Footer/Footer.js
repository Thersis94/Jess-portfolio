import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';

/**
 * Component that wraps and formats page footer content
 */
class Footer extends React.Component {

    /**
     * Creates an instance of the footer class
     */
    constructor() {
        super();
    }

    /**
     * Returns a footer component
     */
    render() {
        return (
                <Row className={this.props.bootstrap}>
                    <Col className="footer-left col-4">
                        {this.props.left}
                    </Col>
                    <Col className="footer-center col-4">
                        {this.props.center}
                    </Col>
                    <Col className="footer-right col-4">
                        {this.props.right}
                    </Col>
                </Row>
        )
    }

}

/** Sets Default Props */
Footer.defaultProps = {
    bootstrap: "footer"
};
/** Prop Validators */
Footer.propTypes = {
    left: PropTypes.any,
    center: PropTypes.any,
    right: PropTypes.any,
    bootstrap: PropTypes.string
};

export default Footer;