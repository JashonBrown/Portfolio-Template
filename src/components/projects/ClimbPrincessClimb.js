import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';
import ProjectVideoCard from '../ProjectVideoCard';

function ClimbPrincessClimb() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>

                    {/* ------ Row 1 ------ */}
                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <h2>Climb Princess Climb</h2>
                                <h5>Status: Released (2019)</h5>
                                <br />
                                <h3>Summary</h3>
                                <p>'Climb Princess Climb' is a game developed during GDL July Jam (Game Jam). Our team of 3 had 3 days to create a game from scratch related to the theme <i>"Dungeons"</i>.</p>
                                <p>Once the submission phase concludes, participants judge each others entries scoring them out of 10 for each of the following areas: Fun, Theme, Polish, Creativity and Overall.</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <ProjectTextCard>
                                <h2>Gameplay</h2>
                                <p>Players attempt to rescue princesses and escape a dungeon by swinging their way out on a chain.</p>
                                <p>As you venture higher through the dungeon you encounter enemies aswell as the growing difficulty of managing more and more rescuees.</p>
                            </ProjectTextCard>
                        </Col>
                        <Col md={4}>
                            <ProjectTextCard>
                                <h2>Results</h2>
                                <p>Our game was extremely well received and we won first place :D</p>
                            </ProjectTextCard>
                        </Col>
                        <Col>
                            <ProjectTextCard>
                                <h2>Technologies</h2>
                                <ul>
                                    <li>Unity</li>
                                    <li>C#</li>
                                    <li>DynamoDB (AWS)</li>
                                </ul>
                            </ProjectTextCard>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <ProjectTextCard>
                                <h2>Reflection</h2>
                                <p>We were all blown away with how well the game turned out and how much everyone enjoyed it.</p>
                                <p>The entire game jam went very smooth for us and we ended up only needing 2 days to complete the game and used the 3rd day to relax and enjoy playing it.</p>
                                <p>We were very fortunate as all of our ideas and prototypes performed exactly as we hoped and everything came together easily.</p>
                            </ProjectTextCard>
                        </Col>
                        <Col>
                            <ProjectTextCard>
                                <h2>Post Game Jam</h2>
                                <p>After the game jam concluded, we added a few extra levels and timed leaderboards.</p>
                                <p>Many of our friends competed against eachother in speedruns and it was incredible to see all the tricks and strategies they discovered to speed up their times.</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <ProjectTextCard>
                                <h2>Future Plans</h2>
                                <p>Due to how enjoyable the game was, we made an effort to expand it. However during our attempts to move the game to mobile, we were unable to capture the same experience with a touch screen.</p>
                                <p>We are open to reigniting this idea in the future but for now the project has been put on ice.</p>
                            </ProjectTextCard>
                        </Col>
                        <Col>
                            <ProjectVideoCard src="/videos/climb-princess-climb/gameplay.mp4" type="video/mp4"/>
                        </Col>
                    </Row>
                </Col>

                {/* ------ Right Column ------ */}
                <Col md={3}>

                    <ProjectTextCard>
                        <a target="_blank" href="https://itsnotagoodtime.itch.io/climb-princess-climb" rel="noreferrer">
                            <h2>Play here!</h2>
                        </a>
                    </ProjectTextCard>

                    {/* ------ */}

                    <ProjectImageCard src="/images/climb-princess-climb/card-climb-princess-climb.png" />

                    {/* ------ */}

                    <ProjectTextCard>
                        <h2>Team Members</h2>
                        <ul>
                            <li>Lauryn Dorne (Artist)</li>
                            <li>Jake Dorne (Programmer)</li>
                            <li>Jashon Brown (Programmer)</li>
                        </ul>
                    </ProjectTextCard>

                    {/* ------ */}
                    
                    <ProjectImageCard src="/images/climb-princess-climb/banner-climb-princess-climb.png" />
                </Col>
            </Row>
        </div>
    )
}

export default ClimbPrincessClimb
