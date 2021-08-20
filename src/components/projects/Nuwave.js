import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';

function Nuwave() {
    return (
        <div className="project">
            <Row>
                <Col md={9}>
                    <ProjectTextCard>
                        <h2>Nuwave</h2>
                        <h5>Status: Employed 2016 - 2020</h5>
                        <br />
                        <h3>Summary</h3>
                        <p>Nuwave is a software development company that develops web based portal solutions. During my time working there I worked on numerous projects but the project I wanted to showcase was 'Flow'.</p>
                        <p>'Flow' is a platform that lets customers design and publish automated end-to-end workflows in an interactive portal. All these interactions occur automatically according to the heavily customizable flow.</p>
                    </ProjectTextCard>
                </Col>
                <Col><ProjectImageCard src="/images/nuwave/card-nuwave.png" /></Col>
            </Row>
            <Row>
                <Col>
                    <ProjectTextCard>
                        <h2>Flow Example</h2>
                        <p>A simple client to business workflow may look like:</p>
                        <ol>
                            <li>A client submits an online application</li>
                            <li>The application is routed to a vetting team</li>
                            <li>The vetting team requests more information from client</li>
                            <li>The customer provides more information</li>
                            <li>The vetting team approves</li>
                            <li>The application transfers to the finance team</li>
                            <li>The finance team requests a payment</li>
                            <li>The client pays</li>
                            <li>The application is approved</li>
                        </ol>
                    </ProjectTextCard>
                </Col>

                <Col>
                    <ProjectTextCard>
                        <h2>Events/Features</h2>
                        <p>The product has vast amounts of customizable events allowing for flows to cater exactly to a designers needs. Some of the features available during these events include:</p>
                        <ul>
                            <li>Custom built forms</li>
                            <li>Notifications</li>
                            <li>Emails</li>
                            <li>Work allocation</li>
                            <li>Roles and permission assignment</li>
                            <li>Payments</li>
                            <li>API integration</li>
                        </ul>
                    </ProjectTextCard>
                </Col>

                <Col md={3}>
                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>PHP</li>
                            <li>Javascript</li>
                            <li>HTML/CSS/SASS</li>
                            <li>MySQL</li>
                            <li>Apache</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
            </Row>

            <Row>
                <Col>
                    <ProjectTextCard>
                        <h2>Results</h2>
                        <p>The product is in production with both enterprise and local/central government clients.</p>
                        <p>It is currently being used by Councils to enhance the building consent process and Transpower, who use it to handle interactions between their internal teams and the public.</p>
                    </ProjectTextCard>
                </Col>

                <Col>
                    <ProjectTextCard>
                        <h2>Inspiration</h2>
                        <p>The entire system relies on extensive modularity in all it's components to give designers the most flexibility.</p>
                        <p>The architectural techniques used for this modularity were drawn heavily from my game development background and the event driven systems of the Unity game engine.</p>
                        <p>The designers user interface was deeply inspired by visual scripting tools such as Blueprints (Unreal 4) and Bolt (Unity).</p>
                    </ProjectTextCard>
                </Col>

                <Col>
                    <ProjectTextCard>
                        <h2>Involvement</h2>
                        <p>I led and advised on all technical aspects of this project. Some of the involved responsibilites:</p>
                        <ul>
                            <li>Programming</li>
                            <li>Testing</li>
                            <li>Technical analysis</li>
                            <li>Product planning and design</li>
                            <li>Maintaining/improving code quality standards</li>
                            <li>Enhancing testing standards</li>
                            <li>Managing version control systems</li>
                            <li>Technical mentoring</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
            </Row>
        </div>
    )
}

export default Nuwave
