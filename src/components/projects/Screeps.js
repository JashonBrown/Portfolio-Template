import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';

function Screeps() {
    return (
        <div className="project">
            <Row>
                <Col md={9}>
                    <ProjectTextCard>
                        <h2>Screeps</h2>
                        <h5>Status: Played (2018)</h5>
                        <br />
                        <p><i>NOTE: I did not contribute to the development of 'Screeps'. This is a showcase of what I developed within the sandbox provided by 'Screeps' developers.</i></p>
                        <h3>Summary</h3>
                        <p>'Screeps' is a multiplayer sandbox game in which players write code to automate the behaviours of their units. All of a players code is executed in a tick that occurs at the same time for every other player.</p>
                    </ProjectTextCard>
                </Col>
                <Col>
                    <ProjectTextCard>
                        <a target="_blank" href="https://github.com/JashonBrown/Screeps" rel="noreferrer">
                            <h2>View Repo!</h2>
                        </a>
                    </ProjectTextCard>
                    <ProjectImageCard src="/images/screeps/card-screeps.png" />
                </Col>
            </Row>

            <Row>
                <Col md={3}>
                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>Javscript</li>
                        </ul>
                    </ProjectTextCard>
                </Col>

                <Col>
                    <ProjectTextCard>
                        <h2>Completed Systems</h2>
                        <ul>
                            <li>Unit Creation/Spawning</li>
                            <li>Unit Upgrading</li>
                            <li>Base Upgrading</li>
                            <li>Unit HUDs</li>
                            <li>Memory Management</li>
                            <li>Event Logging</li>
                            <li>Room Expansion</li>
                        </ul>
                    </ProjectTextCard>
                </Col>

                <Col>
                    <ProjectTextCard>
                        <h2>Polymorphism</h2>
                        <p>This was the first time I had ever attempted inheritance in Javascript. I gained a bunch of experience with Javascript prototypes and gained insight into the different way Javascript accomplishes polymorphism compared to other languages.</p>
                    </ProjectTextCard>
                </Col>
            </Row>
        </div>
    )
}

export default Screeps
