import React from 'react';
import PortfolioLayout from '../layout/PortfolioLayout/PortfolioLayout';
import { ThemeConfig } from '../config/ThemeConfig';

class AboutMePage extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <PortfolioLayout ThemeConfig={ThemeConfig}>
                <h1>AboutMePage</h1>
            </PortfolioLayout>
        );
    }
}

export default AboutMePage;