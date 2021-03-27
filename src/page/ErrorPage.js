import React from 'react';
import PortfolioLayout from '../layout/PortfolioLayout/PortfolioLayout';
import { ThemeConfig } from '../config/ThemeConfig';

class ErrorPage extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <PortfolioLayout ThemeConfig={ThemeConfig}>
                <h1>This is the error page</h1>
            </PortfolioLayout>
        );
    }
};

export default ErrorPage;