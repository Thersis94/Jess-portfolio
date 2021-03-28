import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/**
 * Component that wraps and formats page footer content
 */
class Footer extends React.Component {

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

export default Footer;