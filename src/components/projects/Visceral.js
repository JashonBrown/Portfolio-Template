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
                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <h2>Visceral</h2>
                                <h5>Status: In Progress</h5>
                                <br />
                                <h3>Summary</h3>
                                <p>'Visceral' is a solo game development project where I am creating a 3D multiplayer PVP game that lets players extensively customize magic abilities to be used in an arena against other players.</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Row>
                                <Col>
                                    <ProjectTextCard>
                                        <h2>Photon 2</h2>
                                        <p>Initially I started using the 3rd party library 'Photon 2'. As this was my first game made with real-time networking, I found Photon let me quickly dive into development.</p>
                                        <p>After completing an MVP for the game, I started to uncover more limitations of the library and it's hosting options thus I made the decision to swap my games networking layer.</p>
                                    </ProjectTextCard>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <ProjectTextCard>
                                        <h2>Custom Networking Library</h2>
                                        <p>Next I attempted to create my own high-level networking library. This process taught me a bunch about the inner workings of networked games but I ended up seizing development on the library as it took my focus away from the core game.</p>
                                        <p>Further details about this endeavour can be found <a href="/projects/networking-library">here</a>.</p>
                                    </ProjectTextCard>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <ProjectTextCard>
                                        <h2>Mirror</h2>
                                        <p>Eventually I decided to use the networking library 'Mirror'. Mirror already accomplished much of what I needed and allowed me to independently host my game using my own infrastructure.</p>
                                    </ProjectTextCard>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <ProjectTextCard>
                                        <h2>Insight</h2>
                                        <p>As the game is an arena game, many games could concurrently be in progress at any one time. I used 'Insight' which allowed me to design a master/slave server setup.</p>
                                        <p>Using Insight meant I could deploy a single master server, which was capable of spawning new game processes on slave servers which players would then connect to. These slave servers would then be load balanced to allow the infrastructure to scale as the player base grew.</p>
                                    </ProjectTextCard>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <ProjectTextCard>
                                        <h2>Future Plans</h2>
                                        <p>I am currently using this project as a sandbox for me to develop my game networking skills. I am slowly converting between networking libraries and challenging myself by implementing new networked mechanics.</p>
                                    </ProjectTextCard>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    <ProjectTextCard>
                                        <h2>Spells</h2>
                                        <p>Prior to entering a match, players are able to design their spells. A player is capable to changing many of a spells characteristics such as:</p>
                                        <ul>
                                            <li>Targeting</li>
                                            <li>Elements</li>
                                            <li>Spread</li>
                                            <li>Speed</li>
                                            <li>Chaining effects</li>
                                        </ul>
                                        <p>This system provides players with a creative way to approach roles and maps.</p>
                                    </ProjectTextCard>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <ProjectTextCard>
                                        <h2>Game Mode</h2>
                                        <p>Players work in a team of 3-5 to attack the enemies base whilst defending their own. Each base contains a nexus which once destroyed, ends the round.</p>
                                        <p>Teams compete to be the first to to win 2 rounds.</p>
                                    </ProjectTextCard>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <ProjectTextCard>
                                        <h2>Launcher</h2>
                                        <p>To enable easier play testing among my friends I developed a launcher. The launcher would allow me to roll out updates to the game and let friends conveniently jump in and play.</p>
                                        <p>This launcher has and will play a pivotal part in the rapid testing of new game systems and features.</p>
                                    </ProjectTextCard>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <ProjectVideoCard src="/videos/visceral/vid-1.mp4" type="video/mp4"/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                
                {/* ---- Left Column ---- */}
                <Col md={3}>
                    <ProjectTextCard>
                        <a target="_blank" href="https://drive.google.com/file/d/1XrYt-jDy2LjWgbL4q8U_3cx5MqIPh59Q/view?usp=sharing" rel="noreferrer"><h2>Get Launcher!</h2></a>
                    </ProjectTextCard>
                    <ProjectImageCard src="/images/visceral/card-visceral.png" />
                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>C#</li>
                            <li>Unity (Engine)</li>
                            <li>Photon 2 (Library)</li>
                            <li>Mirror (Library)</li>
                            <li>Insight (Library)</li>
                            <li>ENet (Library)</li>
                            <li>EC2 (AWS)</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
            </Row>
        </div>
    )
}

export default Visceral
