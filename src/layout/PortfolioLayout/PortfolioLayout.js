import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import BootstrapWrapper from './BootstrapWrapper/BootstrapWrapper';
import Container from 'react-bootstrap/Container';
import './PortfolioLayout.css';

/**
 * Portfolio Layout
 */
class Portfolio extends React.Component {

    /**
     * Creates an instance of the Portfolio Class
     * @param {*} props 
     */
    constructor(props) {
        super();

        /**
         * Header page locations
         *
         * @memberof Portfolio
         */
        this.header = {
            // Bootstrap for the Mobile and Desktop header content wrappers
            bootstrap: {
                mobile: "mobile-header fixed-bottom d-md-none background-theme-dark",
                desktop: "desktop-header d-none d-md-flex background-theme-dark"
            },
            // Bootstrap and content to be injected in to the header left
            left: {
                mobile: {
                    content: props.ThemeConfig.header.left.mobile,
                    bootstrap: null
                },
                desktop: {
                    content: props.ThemeConfig.header.left.desktop,
                    bootstrap: null
                },
            },
            // Bootstrap and content to be injected in to the header center
            center: {
                mobile: {
                    content: props.ThemeConfig.header.center.mobile,
                    bootstrap: null
                },
                desktop: {
                    content: props.ThemeConfig.header.center.desktop,
                    bootstrap: "float-right"
                },
            },
            // Bootstrap and content to be injected in to the header right
            right: {
                mobile: {
                    content: props.ThemeConfig.header.right.mobile,
                    bootstrap: null
                },
                desktop: {
                    content: props.ThemeConfig.header.right.desktop,
                    bootstrap: null
                },
            }
        };

        /**
         * Footer page locations
         *
         * @memberof Portfolio
         */
        this.footer = {
            // Bootstrap for the Mobile and Desktop footer content wrappers
            bootstrap: {
                mobile: "mobile-footer fixed-bottom d-md-none d-flex background-theme-dark justify-content-between",
                desktop: "desktop-footer background-theme-dark justify-content-between"
            },
            // Bootstrap and content to be injected in to the footer left
            left: {
                mobile: {
                    content: props.ThemeConfig.footer.left.mobile,
                    bootstrap: null
                },
                desktop: {
                    content: props.ThemeConfig.footer.left.desktop,
                    bootstrap: null
                },
            },
            // Bootstrap and content to be injected in to the footer center
            center: {
                mobile: {
                    content: props.ThemeConfig.footer.center.mobile,
                    bootstrap: null
                },
                desktop: {
                    content: props.ThemeConfig.footer.center.desktop,
                    bootstrap: null
                },
            },
            // Bootstrap and content to be injected in to the footer right
            right: {
                mobile: {
                    content: props.ThemeConfig.footer.right.mobile,
                    bootstrap: null
                },
                desktop: {
                    content: props.ThemeConfig.footer.right.desktop,
                    bootstrap: null
                },
            }
        };


    }

    /**
     * Returns a Portfolio Theme component
     */
    render() {

        return (
            <>
                {/* Header Sections */}
                <Container fluid className="px-0">
                    {/* Header Desktop */}
                    <Header
                        bootstrap={this.header.bootstrap.desktop}
                        left={<BootstrapWrapper sectionName="desktop-header-left" bootstrap={this.header.left.desktop.bootstrap} content={this.header.left.desktop.content} />}
                        center={<BootstrapWrapper sectionName="desktop-header-center" bootstrap={this.header.center.desktop.bootstrap} content={this.header.center.desktop.content} />}
                        right={<BootstrapWrapper sectionName="desktop-header-right" bootstrap={this.header.right.desktop.bootstrap} content={this.header.right.desktop.content} />}
                    />
                    {/* Header Mobile */}
                    <Header
                        bootstrap={this.header.bootstrap.mobile}
                        left={<BootstrapWrapper sectionName="mobile-header-left" bootstrap={this.header.left.mobile.bootstrap} content={this.header.left.mobile.content} />}
                        center={<BootstrapWrapper sectionName="mobile-header-center" bootstrap={this.header.center.mobile.bootstrap} content={this.header.center.mobile.content} />}
                        right={<BootstrapWrapper sectionName="mobile-header-right" bootstrap={this.header.right.mobile.bootstrap} content={this.header.right.mobile.content} />}
                    />
                </Container>

                {/* This is where the content is injected */}
                {this.props.children}

                {/* Footer Sections */}
                <Container fluid className="">
                    {/* Desktop Footer */}
                    <Footer
                        bootstrap={this.footer.bootstrap.desktop}
                        left={<BootstrapWrapper sectionName="desktop-footer-left" bootstrap={this.footer.left.desktop.bootstrap} content={this.footer.left.desktop.content} />}
                        center={<BootstrapWrapper sectionName="desktop-footer-center" bootstrap={this.footer.center.desktop.bootstrap} content={this.footer.center.desktop.content} />}
                        right={<BootstrapWrapper sectionName="desktop-footer-right" bootstrap={this.footer.right.desktop.bootstrap} content={this.footer.right.desktop.content} />}
                    />
                    {/* Mobile Footer */}
                    <Footer
                        bootstrap={this.footer.bootstrap.mobile}
                        left={<BootstrapWrapper sectionName="mobile-footer-left" bootstrap={this.footer.left.mobile.bootstrap} content={this.footer.left.mobile.content} />}
                        center={<BootstrapWrapper sectionName="mobile-footer-center" bootstrap={this.footer.center.mobile.bootstrap} content={this.footer.center.mobile.content} />}
                        right={<BootstrapWrapper sectionName="mobile-footer-right" bootstrap={this.footer.right.mobile.bootstrap} content={this.footer.right.mobile.content} />}
                    />
                </Container>
            </>
        );
    }

}

export default Portfolio;