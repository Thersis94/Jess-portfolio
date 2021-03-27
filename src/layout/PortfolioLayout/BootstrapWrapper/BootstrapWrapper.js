import React from 'react';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';

/**
 * Class for wraping components in bootstrap wrappers
 */
class BootstrapWrapper extends React.Component {

    /**
     * Creates an instance of a bootstrap wrapper
     * @param {*} props The props recieved by the component
     */
    constructor(props) {
        super();
        this.props = props;
        this.buildSections();
    }

    /**
     * Checks wraps elements in divs and assigns each element a specific key and class so that they are easily manipulated using css
     * @param {*} props Object passed to the class
     */
    buildSections() {
        const newElements = [];
        let count = 0;
        if (Array.isArray(this.props.content)) {
            for (const element of this.props.content) {
                newElements.push(<div key={this.props.sectionName + "" + count} className={this.props.sectionName + "-header-element-" + count + " col"}>{element}</div>)
                count++;
            }
        } else {
            newElements.push(<div key={this.props.sectionName + "" + count} className={this.props.sectionName + "-header-element-" + count + " col"}>{this.props.content}</div>)
        }
        this.content = [<Row key={this.props.sectionName} className={this.props.sectionName + "-direction-wrapper " + this.props.bootstrap}>{newElements}</Row>];
    }

    /**
     * Renders the built content as a component and returns it
     */
    render() {
        return this.content;
    }

}

/** Sets Default Props */
BootstrapWrapper.defaultProps = {
    bootstrap: ""
};
/** Prop Validators */
BootstrapWrapper.propTypes = {
    content: PropTypes.any,
    sectionName: PropTypes.string,
    bootstrap: PropTypes.string
};

export default BootstrapWrapper;