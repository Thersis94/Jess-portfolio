import React from 'react';
import PortfolioLayout from '../layout/PortfolioLayout/PortfolioLayout';
import { ThemeConfig } from '../config/ThemeConfig';
import OneColumn from '../layout/PortfolioLayout/PortfolioContentLayouts/OneColumn';

class CVPage extends React.Component {

    render() {
        return (
            <PortfolioLayout ThemeConfig={ThemeConfig}>
                <div className="cv-page-background pt-5 mt-3">
                    <div className="personal-statement-wrapper background-theme-dark py-4">
                        <h2 className="text-theme-dark personal-statement-header caviar-dreams">Curriculum Vitae</h2>
                    </div>

                    <OneColumn column={(
                        <>
                            <div className="subtitle-background p-3 m-3" >
                                <h2>INNOVATION CORE CLASSES</h2>
                            </div>

                            <div className="subtitle-background p-3 m-3" >
                                <h3>ENTP 4500 - Entrepreneurship and Strategy</h3>
                                <p>
                                    Capstone course for the Bachelor of Innovation. Topics include understanding the entrepreneurial process,
                                    assessing opportunities, selecting a start-up team, financing entrepreneurial ventures, writing and presenting business plans, and new venture and competitive strategy. Utilizes lectures and case studies as well as
                                    coaching teams in the creation of a business plan and public presentation for an innovative new business or
                                    nonprofit organization.<br /><br />
                                    Outcomes: Completion of CV.
                            </p>
                            </div>

                            <div className="subtitle-background p-3 m-3" >
                                <h3>INOV 4010 - Innovation Team: Design and Lead</h3>
                                <p>
                                    Senior-level continuation of the team’s course sequence with emphasis on design and leading
                                    team projects.<br /><br />
                                    Client: Pikes Peak Children’s Museum<br /><br />
                                    Scope of Work: Assisted Pikes Peak Children’s museum in the design and construction of an exhibit for
                                    their mobile museum.<br /><br />
                                    Outcomes: Constructed an exhibit that meets Pikes Peak Children’s Museum’s specifications of being light
                                    weight, easy to set up, and engaging for children from ages five to ten. Implemented a general space theme,
                                    designed activities, and wrote curriculum to allow children to experience the exhibit with inquisitive,
                                    self-guided exploration of the topic.
                            </p>
                            </div>

                            <div className="subtitle-background p-3 m-3" >
                                <h3>INOV 3010 - Innovation Team: Research and Execute</h3>
                                <p>
                                    Junior level continuation of the team’s course sequence with advanced participation in team
                                    projects including research, design, and execution.Client: Talking Trees, Inc.<br /><br />
                                    Scope of Work: Collaborated with Dr. Bakari and Talking Trees to increase outreach and awareness of their
                                    organization that seeks to support adult survivors of childhood sexual abuse.<br /><br />
                                    Outcomes: Created marketing media including brochures, posters, a promotional video for the organization, a promotional video for speaking engagements for Dr. Bakari, collected data on UCCS students in the
                                    form of a focus group and a survey to assess their interest in the organization.<br />
                                </p>
                            </div>

                            <div className="subtitle-background p-3 m-3" >
                                <h3>INOV 2010 - Innovation Team: Analyze and Report</h3>
                                <p>
                                    Sophomore level course emphasizing team projects, research, analyzing data, and reporting.<br /><br />
                                    Client: The Global Z Recording Project<br /><br />
                                    Scope of Work: The purpose of this project was to design and Implement a database system to facilitate
                                    easy tracking of recording equipment. The equipment, which Includes microphones and other recording
                                    equipment, is sent around the world to help the Global Z Recording Project In their mission to enact global
                                    change through music.<br /><br />
                                    Outcomes: Creation of microphone database using DreamHost including uploading all of the microphone
                                    specifications, creation of a user manual that Includes step by step instructions detailing how to make
                                    changes to the database.<br />
                                </p>
                            </div>

                            <div className="subtitle-background p-3 m-3" >
                                <h3>INOV 1010 - The Innovation Process</h3>
                                <p>
                                    Overviews the key components in the innovation process and examples of major innovations throughout
                                    history. Examines the interdisciplinary nature of innovation. Includes group exercises focused on improv-
                                    ing team dynamics, brainstorming, conceptual-block busting and other creativity and problem-solving
                                    activities.<br /><br />
                                    Outcomes: Cultivated an understanding innovation as the transformation of ideas into impact.<br />
                                </p>
                            </div>

                            <div className="subtitle-background p-3 m-3" >
                                <h3>INOV 2100 - Technical Writing, Proposals, and Presentations</h3>
                                <p>
                                    Technical writing course that addresses five major types of technical writing: project reports, funding proposals, magazine and trade articles, technical reports, and journal articles. Includes peer review and critical
                                    assessments of others’ writings.<br /><br />
                                    Client: Alpine Autism Center<br /><br />
                                    Scope of Work: Researched, wrote, and applied for appropriate grants for Alpine Autism Center to secure
                                    funds to expand their parking lot.<br /><br />
                                    Outcomes: Provided Alpine Autism Center with framework for grants to apply for.<br />
                                </p>
                            </div>

                            <div className="subtitle-background p-3 m-3" >
                                <h3>BLAW 2010 - Business and Intellectual Property Law</h3>
                                <p>
                                    Examines the legal significance of business transactions as they are part of the decision-making process in
                                    business. Coverages topics in statues includes law and its enforcement and integration of the Uniform Commercial Code with the law of contracts, bailment, warehouse men and carriers, documents of title, sales of
                                    goods, and commercial paper.<br /><br />
                                    Outcomes: Prepared a patented product for filing.<br />
                                </p>
                            </div>

                            <div className="subtitle-background p-3 m-3" >
                                <h3>ENTP 1000 - Introduction to Entrepreneurship</h3>
                                <p>
                                    Introduces the process of turning an idea into a successful startup business. Covers basic aspects of a successful business and introduces the student to the processes for creating a potentially successful business
                                    plan.<br />
                                </p>
                            </div>

                            <div className="subtitle-background p-3 m-3" >
                                <h2>MARKETING MAJOR CLASSES</h2>
                            </div>

                            <div className="subtitle-background p-3 m-3" >
                                <h3>MKTG 3000 – Principles of Marketing</h3>
                                <p>
                                    Analytical survey of issues involved with the development and exchange of goods and services. Takes a
                                    marketing management approach in attacking problems related to product planning, channels of distribution, pricing and promotion. Emphasizes the role of marketing in responding to changing environmental
                                    conditions.<br /><br />
                                    Outcomes: Researched marketing strategies for Tesla Automotive and presented findings in a report.<br />
                                </p>
                            </div>

                            <div className="subtitle-background p-3 m-3" >
                                <h3>MKTG 3300 – Marketing Research</h3>
                                <p>
                                    Course emphasizes marketing research as a decision-making tool for marketing managers. A variety of
                                    methodologies is explored. Course project provides students with hands-on experience in planning an investigation, data collection design, sampling, experimentation, interpretation of results, and report preparation.<br /><br />
                                    Outcomes: Conducted Marketing Research using various methods and provided a report for Health Restored to use as they plan an expansion in marketing.<br /><br />
                                </p>
                            </div>

                            <div className="subtitle-background p-3 m-3" >
                                <h3>MKTG 4650 – Promotion Management and Strategy</h3>
                                <p>
                                    Emphasizes the coordinated usage of the promotions mix elements in order to synergize marketing efforts.<br /><br />
                                    Topics include advertising, direct marketing, internet and interactive marketing, sales promotions, public
                                    relations, and personal selling. The impact of buyer behavior on promotional strategy is examined and several communication models are analyzed.<br /><br />
                                    Outcomes: Developed a campaign for Patagonia which included market research, demographic targeting, and creative media.<br />
                                </p>
                            </div>

                            <div className="subtitle-background p-3 m-3" >
                                <h3>MKTG 4700 – Digital and Social Media Marketing</h3>
                                <p>
                                    Provides a foundation and introduction into the strategy and tactics required for marketing in digital
                                    environments. The course focuses on key aspects of digital marketing currently used by professionals with
                                    particular attention given to the newest tools and techniques. Students apply concepts on a final project for
                                    real-world application in one of the most quickly changing business landscapes.<br /><br />
                                    Outcomes: Managed a pay-per-click campaign. Became certified in GoogleAd Works.<br />
                                </p>
                            </div>

                            <div className="subtitle-background p-3 m-3" >
                                <h3>MKTG 4400 – Service Management and Marketing</h3>
                                <p>
                                    This course builds and expands on the introductory marketing course by showing adaptations and applications of marketing ideas to the service setting. The service component of business requires a distinctive
                                    approach to marketing strategy both in development and execution. In addition, quality service cannot
                                    be delivered without understanding and developing the organizational and human resources of the firm.<br /><br />
                                    Designed for those students who are interested in working in either traditional service industries or in the
                                    service areas of manufacturing industries.<br /><br />
                                    Outcomes: Created an alternative service management plan for Fargo’s Pizza.<br />
                                </p>
                            </div>

                            <div className="subtitle-background p-3 m-3" >
                                <h3>MKTG 4800 – Marketing Planning and Strategies</h3>
                                <p>
                                    Marketing capstone. Detailed consideration of the process of formulating and implementing marketing
                                    policies. Major emphasis on market analysis, product/brand management, promotion, distribution and
                                    pricing. Case analyses used to develop analytical abilities and to integrate all major areas of marketing.<br /><br />
                                    Outcomes: Created a marketing strategy for the National Mill Dog Rescue that focused on introducing
                                    their organization to local markets.<br />
                                </p>
                            </div>

                            <div className="subtitle-background p-3 m-3" >
                                <h3>MKTG 4900 – International Marketing</h3>
                                <p>
                                    Provides an overview of marketing issues related to international markets. Major topics covered are description of major world markets, market analysis including cultural and political assessment, target market
                                    selection, market entry modes, marketing strategy, program management and implementation issues.<br /><br />
                                    Outcome: Developed a report that researched international policies to introduce a product to an untapped
                                    market.<br />
                                </p>
                            </div>

                            <div className="subtitle-background p-3 m-3" >
                                <h2>FRENCH MINOR CLASSES</h2>
                            </div>

                            <div className="subtitle-background p-3 m-3" >
                                <h3>FR 3070 – Sustainable Development in the Francophone World</h3>
                                <p>
                                    Students will develop French language skills while increasing their understanding of natural and urban
                                    environments in the French-speaking world. We will examine issues of sustainable development in these
                                    regions as well as locally through the study of media resources, literature, and guest speakers.<br /><br />
                                    Outcomes: Developed a global perspective on environmental issues and protection policies.<br />
                                </p>
                            </div>

                            <div className="subtitle-background p-3 m-3" >
                                <h3>FR 3000 – Advanced French Grammar</h3>
                                <p>
                                    Designed to review extensively the functional application of modern French. Presents a skill-development
                                    approach featuring graded compositions and oral practice based on material encountered in media and
                                    informal situations.<br /><br />
                                    Outcomes: Developed a better understanding of the French language and grammar.<br />
                                </p>
                            </div>

                            <div className="subtitle-background p-3 m-3" >
                                <h3>FR 3050 – Professional French</h3>
                                <p>
                                    The vocabulary and usage of professional French in a variety of professional and cultural contexts. May
                                    include applied business correspondence, marketing and accounting terminologies, other forms of professional correspondence, bureaucratic forms and contacts as well as study and application of cultural practices in professional settings.<br /><br />
                                    Outcomes: Expanded a working vocabulary in French to include business related subjects.<br />
                                </p>
                            </div>

                            <div className="subtitle-background p-3 m-3" >
                                <h3>FR 9300 – Independent Study of French Comedy</h3>
                                <p>
                                    Collaborated with peer to analyze and compare French comedy in stand up and film.<br />
                                </p>
                            </div>

                            <div className="subtitle-background p-3 m-3" >
                                <h3>FR 9400 – Independent Study of Children’s Literature</h3>
                                <p>
                                    Collaborated with peer to read children’s literature orally to work on pronunciation and spoken French.<br />
                                </p>
                            </div>

                            <div className="subtitle-background p-3 m-3" >
                                <h3>FCS 9300 – French Field Study: Cooking Class</h3>
                                <p>
                                    Collaborated with peer to select recipes from different regions of France and the Francophone world.<br />
                                </p>
                            </div>
                        </>
                    )} />
                </div>
            </PortfolioLayout >
        );
    }
}

export default CVPage;