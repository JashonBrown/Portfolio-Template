import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';
import ProjectVideoCard from '../ProjectVideoCard';
import ProjectWebGLCard from '../ProjectWebGLCard';
import ProjectYoutubeEmbedCard from '../ProjectYoutubeEmbedCard';
import ItchDownload from '../ItchDownload';

export default function ExampleProject() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>

                    {/* ------ Row 1 ------ */}
                    <Row>
                        <Col>
                            <ProjectWebGLCard url='https://itch.io/embed-upload/6326164'/>
                            <ProjectYoutubeEmbedCard src='hrdFKRtlHqs'/>
                            <ItchDownload src='1187259' download='https://soggykees.itch.io/stick-royale' title='Stick Royale by Kees Tucker' />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <h2>Title</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </ProjectTextCard>
                        </Col>
                        <Col>
                            <ProjectTextCard>
                                <h2>Title</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <ProjectTextCard>
                                <h2>Title</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </ProjectTextCard>
                        </Col>
                        <Col><ProjectImageCard src="/images/example/lineup.png" /></Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <ProjectTextCard>
                                <h2>Title</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </ProjectTextCard>
                        </Col>
                        <Col>
                            <ProjectTextCard>
                                <h2>Title</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <ProjectTextCard>
                                <h2>Title</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </ProjectTextCard>
                        </Col>
                        <Col>
                            <ProjectTextCard>
                                <h2>Title</h2>
                                <p>Some other gameplay features include:</p>
                                <ul>
                                    <li>Outfit presets</li>
                                    <li>Quests</li>
                                    <li>Achievements</li>
                                    <li>In-game Shop</li>
                                    <li>Leaderboards</li>
                                    <li>Friend lists</li>
                                </ul>
                            </ProjectTextCard>
                        </Col>
                    </Row>

                    <Row>
                        <Col><ProjectImageCard src="/images/example/dressup1.png" /></Col>
                        <Col><ProjectImageCard src="/images/example/dressup3.png" /></Col>
                        <Col><ProjectVideoCard src="/videos/example/gameplay.mp4" type="video/mp4"/></Col>
                    </Row>
                </Col>

                {/* ------ Right Column ------ */}
                <Col md={3}>example

                    <ProjectImageCard src="/images/example/card-example.png" />

                    <ProjectTextCard>
                        <h2>Team Members</h2>
                        <ul>
                            <li>Guy 1</li>
                            <li>Guy 2</li>
                            <li>Guy 3</li>
                            <li>Guy 4</li>
                        </ul>
                    </ProjectTextCard>

                    <ProjectImageCard src="/images/example/banner-example.png" />

                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>Unity</li>
                            <li>C#</li>
                            <li>.NET</li>
                            <li>EF Core</li>
                            <li>EC2 & ECS (AWS)</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
            </Row>
        </div>
    )
}
