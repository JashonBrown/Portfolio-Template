import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';

function ShankTheWorld() {
    return (
        <div className="project">
            <Row>
                <Col md={6}>
                    <ProjectTextCard>
                        <h2>Shank The World</h2>
                        <h5>Status: Completed (2015)</h5>
                        <br />
                        <h3>Summary</h3>
                        <p>'Shank The World' is a multiplayer game that was developed for a group university assignment.</p>
                    </ProjectTextCard>
                </Col>
                <Col>
                    <ProjectTextCard>
                        <h2>Gameplay</h2>
                        <p>Players spawn with a single key which is used to unlock any of the chests scattered around the map. Players then enter a cycle of hunting, shanking, and stealing from other players.</p>
                    </ProjectTextCard>
                </Col>
                <Col>
                    <ProjectTextCard>
                        <h2>Team Members</h2>
                        <ul>
                            <li>Jake Dorne (Rendering)</li>
                            <li>Matt Byers (Networking)</li>
                            <li>Jasen Palmer (Game Logic)</li>
                            <li>Jashon Brown (UI)</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>Java</li>
                            <li>Java Swing</li>
                            <li>Git</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
                <Col>
                    <ProjectImageCard src="/images/shank-the-world/shank-the-world-3.png" />
                </Col>
                <Col>
                    <ProjectImageCard src="/images/shank-the-world/shank-the-world-1.jpg" />
                </Col>
                <Col>
                    <ProjectImageCard src="/images/shank-the-world/shank-the-world-2.jpg" />
                </Col>
            </Row>
        </div>
    )
}

export default ShankTheWorld
