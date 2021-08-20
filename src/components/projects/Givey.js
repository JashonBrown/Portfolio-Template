import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';

function Givey() {
    return (
        <div className="project">
            <Row>
                <Col md={9}>
                    <ProjectTextCard>
                        <h2>Givey</h2>
                        <h5>Status: On Hold (2020)</h5>
                        <br />
                        <h3>Summary</h3>
                        <p>'Givey' is a project I undertook in a small team of 2 which aimed to create a platform facilitating charitable donations. Charities could register and receive donations whilst general users could browse charities and monitor their portfolio of donations.</p>
                    </ProjectTextCard>
                </Col>
                <Col>
                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>C#</li>
                            <li>.NET</li>
                            <li>EF Core</li>
                            <li>MySQL</li>
                            <li>React</li>
                            <li>React Native</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
            </Row>

            <Row>
                <Col md={4}>
                    <ProjectTextCard>
                        <h2>Vision</h2>
                        <p>We wanted to create something similar to Sharsies and Blockfolio where users could easily track and interact with their donations.</p>
                        <p>The platform would enable charities to manage their own profiles and encourage transparency between donators and recipients.</p>
                    </ProjectTextCard>
                </Col>
                <Col md={4}>
                    <ProjectTextCard>
                        <h2>Why?</h2>
                        <p>We personally always found it difficult to trust any donations we've made to charities as we're often not given enough visibility regarding how funds are used.</p>
                        <p>We thought it would be awesome to have a place where we could browse through charities and read about their causes, expenses and motives enabling us to make a more informed decision on who and how we'd like to help.</p>
                    </ProjectTextCard>
                </Col>
                <Col>
                    <ProjectTextCard>
                        <h2>Progress</h2>
                        <ul>
                            <li>User interfaces wireframed</li>
                            <li>User interfaces in development</li>
                            <li>Database modelled and in development</li>
                            <li>APIs in development</li>
                            <li>Payment gateway integrated</li>
                            <li>User authentication</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
            </Row>
        </div>
    )
}

export default Givey
