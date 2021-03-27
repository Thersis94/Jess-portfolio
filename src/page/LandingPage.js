import React from 'react';
import PortfolioLayout from '../layout/PortfolioLayout/PortfolioLayout';
import { ThemeConfig } from '../config/ThemeConfig';
import OneColumn from '../layout/PortfolioLayout/PortfolioContentLayouts/OneColumn';

class LandingPage extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <PortfolioLayout ThemeConfig={ThemeConfig}>
                <div className="landing-page-background pt-5 mt-3">
                    <div className="personal-statement-wrapper background-theme-dark py-4">
                        <h1 className="text-theme-dark personal-statement-header">Personal Statement</h1>
                    </div>
                    <OneColumn column={(
                        <>

                        </>
                    )} />
                </div>
            </PortfolioLayout>
        );
    }
};

export default LandingPage;