import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PortfolioLayout from '../layout/PortfolioLayout/PortfolioLayout';
import { ThemeConfig } from '../config/ThemeConfig';
import OneColumn from '../layout/PortfolioLayout/PortfolioContentLayouts/OneColumn';
import JessPic from '../assets/JessPic.png';

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
                            <div className="subtitle-background p-4 my-5">
                                <h2 className="text-center landing-page-subtitle">
                                    Ambitious, organized, and passionate design enthusiast who
                                    incorporates art, illustrative design, intentional language and
                                    photography in the creation and implementation of
                                    marketing media that targets various markets.
                                </h2>
                            </div>
                            <div className="my-5">
                                <Row className="d-none d-lg-flex">
                                    <div className="col-md-9 my-auto subtitle-background ">
                                        <p className="landing-text-content p-2">
                                            <b>Norman doors.</b> Have you ever approached a door, and the visual cues say pull
                                    when the door is actually a push? That is called a Norman door. It represents a dis-
                                    connect between the way things seem and the way they exist.
                                    I have become a student of creative design. From the
                                    study of visual arts and art history, to typography, to
                                    the French language, I have immersed myself in the
                                    world of design. The architect Buckminster Fuller
                                    said, “Ninety-nine percent of who you are is invisi-
                                    ble and untouchable.”
                                    As a designer, I strive to put on a page a sliver of
                                    the ninety-nine percent of myself that is unseen.
                                    While it is true that taste is subjective, good design
                                    will always be relevant. As I start my career, my hope
                                    is to contribute to the countless other designers that
                                    have made a positive impact on how we interact with our
                                    physical world.</p>
                                    </div>
                                    <img src={JessPic} alt="" className="col-md-3 curve" />
                                </Row>
                                <Col className="d-lg-none">
                                <img src={JessPic} alt="" className="curve w-100 px-5 my-5" />
                                    <div className="col-md-12 my-auto subtitle-background">
                                        <p className="landing-text-content p-2">
                                            <b>Norman doors.</b> Have you ever approached a door, and the visual cues say pull
                                    when the door is actually a push? That is called a Norman door. It represents a dis-
                                    connect between the way things seem and the way they exist.
                                    I have become a student of creative design. From the
                                    study of visual arts and art history, to typography, to
                                    the French language, I have immersed myself in the
                                    world of design. The architect Buckminster Fuller
                                    said, “Ninety-nine percent of who you are is invisi-
                                    ble and untouchable.”
                                    As a designer, I strive to put on a page a sliver of
                                    the ninety-nine percent of myself that is unseen.
                                    While it is true that taste is subjective, good design
                                    will always be relevant. As I start my career, my hope
                                    is to contribute to the countless other designers that
                                    have made a positive impact on how we interact with our
                                    physical world.</p>
                                    </div>
                                </Col>
                            </div>
                        </>
                    )} />
                </div>
            </PortfolioLayout>
        );
    }
};

export default LandingPage;