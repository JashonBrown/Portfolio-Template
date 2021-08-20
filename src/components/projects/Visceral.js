import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';
import ProjectVideoCard from '../ProjectVideoCard';

function Visceral() {
    return (
        <div className="project">
            <Row>
                <Col md={9}>
                    <ProjectTextCard>
                        <h2>Visceral</h2>
                        <h5>Status: Dropped (2020)</h5>
                        <br />
                        <h3>Summary</h3>
                        <p>'One In One Out' is a project that aims to simulate and optimize the grocery shopping experience during New Zealands level 4 COVID-19 lockdown.</p>
                    </ProjectTextCard>
                </Col>
                <Col>
                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>Unity (Engine)</li>
                            <li>C#</li>
                            <li>ML Agents (Library)</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <ProjectTextCard>
                        <h2>Why?</h2>
                        <p>After experiencing a supermarket trip during the level 4 COVID-19 lockdown I wanted to create a simulation in which agents attempted to find an effective way of navigating a store given social distancing constraints and simulate infection contractibility outcomes for each solution.</p>
                        <p>I wanted to see if these agents could come up with better solutions than those we were using.</p>
                        <p>This project would also give me hands on experience with using machine learning techniques in a 3D physics based environment (game environment).</p>
                    </ProjectTextCard>
                </Col>
                <Col>
                    <ProjectTextCard>
                        <h2>Learning Process</h2>
                        <p>Initial training proved that the problem space was too complex to expect the agent to solve unassisted.</p>
                        <p>To resolve this a curriculum learning approach was taken where the agents ultimate goal was split into 3 phases:</p>
                        <ol>
                            <li>Entering the store</li>
                            <li>Retrieving items</li>
                            <li>Exiting the store</li>
                        </ol>
                        <p>Once a trained agent performed well on one phase, it was introduced to the next.</p>
                    </ProjectTextCard>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <ProjectTextCard>
                        <h2>Curiosity Bias</h2>
                        <p>As the cirriculum learning approach somewhat reduced the agents ability to find new and interesting solutions, a curiosity bias was introduced which would occasionally encourage the agent to stray from overfitted actions.</p>
                    </ProjectTextCard>
                </Col>
                <Col md={4}>
                    <ProjectTextCard>
                        <h2>Agents Brain</h2>
                        <p>Agents used reinforcement learning to train a nueral network which had access to directional and rotational controls (outputs) alongside an array of 12 raycasts evenly distributed around the agent (inputs).</p>
                    </ProjectTextCard>
                </Col>
                <Col>
                    <ProjectTextCard>
                        <h2>Conclusion</h2>
                        <p>The cirriculum learning approach worked great at establishing a working base of behaviour for agents and showed to be extremely useful when using machine learning for games.</p>
                    </ProjectTextCard>
                </Col>
            </Row>
        </div>
    )
}

export default Visceral
