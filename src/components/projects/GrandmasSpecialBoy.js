import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';
import ProjectVideoCard from '../ProjectVideoCard';

function GrandmasSpecialBoy() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>

                    {/* ------ Row 1 ------ */}
                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <h2>Grandma's Special Boy</h2>
                                <h5>Status: In Progress</h5>
                                <br />
                                <h3>Summary</h3>
                                <p>'Grandmas Special Boy' is a online competitive dress up game built for mobile. The game is a hybrid of genres where each of our team members has brought a different gaming background to influence the design.</p>
                                <p>We aim to bring the social and sportmanlike aspects of a competitive game together with the casual and subjective nature of dress up games.</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <h2>Customization</h2>
                                <p>With collaboration from both art and development teams, we've established a system to let players fully recolour different parts of their outfits.</p>
                                <p>Art assets are designed in a pixel art style in a particular colour palette. These colors are then programatically changed via a shader based on a players selection.</p>
                                <p>Players are capable of independently changing the colour of up to 5 different parts of a single piece of clothing.</p>
                            </ProjectTextCard>
                        </Col>
                        <Col>
                            <ProjectTextCard>
                                <h2>Pageants</h2>
                                <p>Players use the clothing items they've unlocked to dress up their avatar according to a randomly provided theme.</p>
                                <p>These submissions are then judged and based on the results, the player is rewarded.</p>
                                <p>The large collection of themes/items and subjectivity of what a player finds aesthetically pleasing make for an environment where players can show off their creativity.</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <ProjectTextCard>
                                <h2>Judging</h2>
                                <p>Judgement of pageants is done entirely by players. Players are presented with the theme and the entries and decide which to award 1st, 2nd and 3rd place to.</p>
                                <p>Once a pageant concludes, judges are rewarded if they voted for the correct winners.</p>
                            </ProjectTextCard>
                        </Col>
                        <Col><ProjectImageCard src="/images/grandmas-special-boy/lineup.png" /></Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <ProjectTextCard>
                                <h2>Progress</h2>
                                <p>We currently have the game working on target devices and are finishing up a few features to finish our MVP.</p>
                                <p>We have conducted a few small scale play tests and once our MVP is complete, we will be looking to start a larger play testing session spanning a few weeks.</p>
                            </ProjectTextCard>
                        </Col>
                        <Col>
                            <ProjectTextCard>
                                <h2>Infrastructure</h2>
                                <p>The game is set to function on a cluster of scalable servers to accomodate a growing player base.</p>
                                <p>Database sharding and tenancy techniques have been incorperated to allow for flexible player base growth and market expansion.</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <ProjectTextCard>
                                <h2>Gacha</h2>
                                <p>Currently we are doing our best to create a generous gacha system that will enhance the users experience whilst also financially sustaining the project.</p>
                                <p>We highly respect our players experience and are keenly aware of the draw backs of a gambling based reward system but are up for the challenge of making a healthy and enjoyable gacha system.</p>
                            </ProjectTextCard>
                        </Col>
                        <Col>
                            <ProjectTextCard>
                                <h2>Other Features</h2>
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
                        <Col><ProjectImageCard src="/images/grandmas-special-boy/dressup1.png" /></Col>
                        <Col><ProjectImageCard src="/images/grandmas-special-boy/dressup3.png" /></Col>
                        <Col><ProjectVideoCard src="/videos/grandmas-special-boy/gameplay.mp4" type="video/mp4"/></Col>
                    </Row>
                </Col>

                {/* ------ Right Column ------ */}
                <Col md={3}>

                    <ProjectImageCard src="/images/grandmas-special-boy/card-grandmas-special-boy.png" />

                    <ProjectTextCard>
                        <h2>Team Members</h2>
                        <ul>
                            <li>Lauryn Dorne (Artist)</li>
                            <li>Jake Dorne (Programmer)</li>
                            <li>Jashon Brown (Programmer)</li>
                            <li>All Of Us (Game Designer)</li>
                        </ul>
                    </ProjectTextCard>

                    <ProjectImageCard src="/images/grandmas-special-boy/banner-grandmas-special-boy.png" />

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

export default GrandmasSpecialBoy
