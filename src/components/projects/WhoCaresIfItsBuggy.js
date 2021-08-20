import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';
import ProjectVideoCard from '../ProjectVideoCard';


function WhoCaresIfItsBuggy() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>

                    {/* ------ Row 1 ------ */}
                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <h2>Who cares if it's buggy? Just ship it!</h2>
                                <h5>Status: Released (2019)</h5>
                                <br />
                                <h3>Summary</h3>
                                <p>'Who cares if it's buggy? Just ship it!' is a game developed during Ludum Dare 45 (Game Jam). Our team of 4 had 3 days to create a game from scratch related to the theme <i>"Start with nothing"</i>.</p>
                                <p>Once the submission phase concludes, participants judge each others entries scoring them out of 10 for each of the following areas: Fun, Theme, Humor, Mood, Audio, Graphics and Overall.</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>

                    {/* ------ Row 2 ------ */}
                    <Row>
                        <Col md={6}>
                            <ProjectTextCard>
                                <h2>Initial Idea</h2>
                                <p>We set out to create a ship battling game where the player would design and progressively construct their ship to battle against NPC ships.</p>
                                <p>Players would have access to varying defensive structures such as walls and turrets which could be upgraded as the player progressed through the game (Start with nothing? Kinda?).</p>
                            </ProjectTextCard>
                        </Col>
                        <Col>
                            <ProjectTextCard>
                                <h2>The Pivot</h2>
                                <p>Following playtesting and with only 24 hours remaining, we decided to entirely pivot from our initial idea. The game was simply not fun and did not provide the experience we intended.</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <ProjectTextCard>
                                <h2>New Idea</h2>
                                <p>Recycling our art assets we would now create a narative driven story telling game.</p>
                                <p>Players were tasked with the mission of delivering 3 bugs to a slaver in return for your parents. The player would meet different bugs along the way and decide whether to deliver them to the slaver.</p>
                            </ProjectTextCard>
                        </Col>
                        <Col>
                            <ProjectTextCard>
                                <h2>Final Product</h2>
                                <p>The final game ended up having both an arcade mode and story mode where we slapped both ideas into the final product.</p>
                                <p>Arcade mode was horrifically buggy and unintuitive and the newly created story mode had character in it's story telling but was more of a story telling experience than a game (maybe that can be called a game?).</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>

                    {/* ------ Row 3 ------ */}
                    <Row>
                        <Col md={4}>
                            <ProjectTextCard>
                                <h2>Learning</h2>
                                <h5>(Splitting Resource)</h5>
                                <p>When we changed ideas midway, instead of everyone swapping to the new idea we instead split our team into 2 and focues on both versions concurrently.</p>
                                <p>This was terribly inefficient and in future, we know to focus on 1 idea as a team.</p>
                            </ProjectTextCard>
                        </Col>
                        <Col md={4}>
                            <ProjectTextCard>
                                <h2>Learning</h2>
                                <h5>(Planning)</h5>
                                <p>We struggled alot to come up with an initial idea. Eventually we decided to just pick an idea and go with it. However, due to this poor planning we ended up wasting alot of time changing ideas later.</p>
                                <p>We won't rush ourselves during our planning again.</p>
                            </ProjectTextCard>
                        </Col>
                        <Col>
                            <ProjectTextCard>
                                <h2>Technologies</h2>
                                <ul>
                                    <li>Unity (Game Engine)</li>
                                    <li>C#</li>
                                    <li>Ink (Plugin)</li>
                                </ul>
                            </ProjectTextCard>
                        </Col>
                    </Row>

                    {/* ------ Video Row ------ */}
                    <Row>
                        <Col md={6}><ProjectVideoCard src="/videos/who-cares-if-its-buggy/vid-1.mp4" type="video/mp4"/></Col>
                        <Col><ProjectVideoCard src="/videos/who-cares-if-its-buggy/vid-2.mp4" type="video/mp4"/></Col>
                    </Row>
                </Col>

                {/* ------ Right Column ------ */}
                <Col md={3}>

                    <ProjectTextCard>
                        <a target="_blank" href="https://itsnotagoodtime.itch.io/who-cares-if-its-buggy" rel="noreferrer"><h2>Play here!</h2></a>
                    </ProjectTextCard>

                    <ProjectImageCard src="/images/who-cares-if-its-buggy/card-who-cares-if-its-buggy.png" />

                    <ProjectTextCard>
                        <h2>Team Members</h2>
                        <ul>
                            <li>Lauryn Dorne (Artist)</li>
                            <li>Josh Damian (Artist)</li>
                            <li>Jake Dorne (Programmer)</li>
                            <li>Jashon Brown (Programmer)</li>
                        </ul>
                    </ProjectTextCard>

                    <ProjectImageCard src="/images/who-cares-if-its-buggy/banner-who-cares-if-its-buggy.png" />
                </Col>
            </Row>
        </div>
    )
}

export default WhoCaresIfItsBuggy
