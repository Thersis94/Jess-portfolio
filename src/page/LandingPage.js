import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PortfolioLayout from '../layout/PortfolioLayout/PortfolioLayout';
import { ThemeConfig } from '../config/ThemeConfig';
import OneColumn from '../layout/PortfolioLayout/PortfolioContentLayouts/OneColumn';
import JessPic from '../assets/JessPic.png';
import OX from '../assets/ox.png';

class LandingPage extends React.Component {

    render() {
        return (
            <PortfolioLayout ThemeConfig={ThemeConfig}>





                <div className="landing-page-background pt-5 mt-3">
                    <div className="personal-statement-wrapper background-theme-dark py-4">
                        <h2 className="text-theme-dark personal-statement-header caviar-dreams">Personal Statement</h2>
                    </div>
                    <OneColumn column={(
                        <>
                            <div className="subtitle-background p-4 my-5">
                                <h2 className="text-center landing-page-subtitle ">
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


                <div className="personal-statement-wrapper background-theme-dark py-4">
                    <h2 className="text-theme-dark personal-statement-header caviar-dreams">Exploring my innovation experience</h2>
                </div>
                <div className="p-3 m-3">
                    <h3 className="w-25 m-3 float-left d-none d-md-flex">
                        Innovation is
                        highly collaborative.
                        It is working through
                        frustration, and,
                        beyond that, inviting
                        challenge into the
                        creative process.
                    </h3>
                    <h3 className="w-100 m-3 d-flex d-md-none">
                        Innovation is
                        highly collaborative.
                        It is working through
                        frustration, and,
                        beyond that, inviting
                        challenge into the
                        creative process.
                    </h3>
                    <p className="innovation-experience-top">
                        During my time as a BI student, I have directed commercials,
                        developed marketing campaigns, and created elements of visual de-
                        sign for museum and website projects. While not every project has
                        been perfect or easy or ideal (in fact in some instances I would say
                        that they have not even been particularly good) all of these projects
                        helped me to become more self-actualized and hone my focus on
                        what I want for my life. It was through these projects that I realized
                        my utmost career goal was to be in creative advertising. I want
                        to exit the industry having held a position as a creative director. I
                        want to work with talented people and make something that makes
                        someone feel something. Without the BI program, and without the
                        diversity of classes and projects that are a part of this degree, I am
                        not sure that I would have considered this path for my career. My
                        time in the BI has equipped me with skills that go beyond my degree. It has allowed me to learn how to work
                        with different people, to learn from different experiences, and to internalize differing voices. Moving for-
                        ward, I plan to use innovation as a tool to allow myself to look at different situations from many angles and
                        viewpoints until I can solve any problem that I am presented with.
                    </p>

                    <div className="circle-seporator-wrapper">
                        <div className="circle-seperator"></div>
                    </div>

                    <p className="innovation-experience-bottom">
                        In her book, <b>Big Magic</b>, Elizabeth Gilbert talks about an Indian man who’s most valuable possession on
                        earth was an ox. Because this was his prized possession, he decorated its horns with paint and glued bells to
                        the tips. Many people asked the man why he had done so. His answer was simple, because a decorated ox was
                        better than a non-decorated ox.
                        Innovation is, in many ways, taking what little you have, and making the best of it. So, if you only have an ox,
                        why not paint it?
                    </p>



                </div>
                <div className="ox-wrapper">
                    <img src={OX} alt="" className="d-lg-none w-100" />
                    <img src={OX} alt="" className="d-none d-lg-inline w-50 " />
                </div>
            </PortfolioLayout>
        );
    }
};

export default LandingPage;