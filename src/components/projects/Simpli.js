import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';

function Simpli() {
    return (
        <div className="project">
        <Row>
            <Col md={9}>
                <Row>
                    <Col>
                        <ProjectTextCard>
                            <h2>Simpli</h2>
                            <h5>Status: In Production (2014 - Current)</h5>
                            <br />
                            <h3>Summary</h3>
                            <p>
                                'Simpli' is a digital portal aiming to bring alignment between building consent authorities (BCA).
                                <br />
                                It does this by providing an e-services portal which facilitates the customer/business to government interactions required during the building consent process.
                            </p>
                            <p>
                                The portal is used by both local and central government and aims generalize application forms across BCA's.
                                <br />
                                The portal strives to make collaboration easier and bring transparency to the inner workings of the building consent process.
                            </p>
                        </ProjectTextCard>
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <ProjectTextCard>
                            <h2>Involvement</h2>
                            <p>I was employed to work on the Simpli portal for 4 years and during my time touched almost all areas of the product including:</p>
                            <ul>
                                <li>APIs</li>
                                <li>Front End</li>
                                <li>Back End</li>
                                <li>Synthetic Testing</li>
                                <li>Unit Testing</li>
                                <li>Integration Testing</li>
                                <li>Technical Support</li>
                                <li>Technical Analysis</li>
                                <li>Planning</li>
                            </ul>
                        </ProjectTextCard>
                    </Col>
                    <Col>
                        <ProjectTextCard>
                            <h2>Technologies</h2>
                            <ul>
                                <li>PHP</li>
                                <li>MySQL</li>
                                <li>HTML / CSS</li>
                                <li>Javascript</li>
                                <li>Apache</li>
                                <li>Git</li>
                                <li>SVN</li>
                                <li>Cypress</li>
                                <li>TestRail</li>
                                <li>Plan.IO</li>
                            </ul>
                        </ProjectTextCard>
                    </Col>
                </Row>
            </Col>

            {/* ------ Right Column ------ */}
            <Col md={3}>
                <ProjectTextCard>
                    <a target="_blank" href="https://simpli.govt.nz/" rel="noreferrer">
                        <h2>Visit Site!</h2>
                    </a>
                </ProjectTextCard>
                <ProjectImageCard src="/images/simpli/card-simpli.png" />
            </Col>
        </Row>
    </div>
    )
}

export default Simpli
