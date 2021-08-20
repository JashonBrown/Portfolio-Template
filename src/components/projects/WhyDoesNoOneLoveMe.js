import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';
import ProjectVideoCard from '../ProjectVideoCard';

function WhyDoesNoOneLoveMe() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>

                    {/* ------ Row 1 ------ */}
                    <Row>
                        <Col>
                            <ProjectTextCard>
                                <h2>Why does no one love me?</h2>
                                <h5>Status: Released (2019)</h5>
                                <br />
                                <h3>Summary</h3>
                                <p>'Why does no one love me?' is a game developed during GDL Game Jam 28. Our team of 3 had 3 days to create a game from scratch related to the theme <i>"Zombies & Christmas"</i>.</p>
                                <p>Once the submission phase concludes, participants judge each others entries scoring them out of 10 for each of the following areas: Polish, Fun, Creativity, Theme and Overall.</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>

                    {/* ------ Row 2 ------ */}
                    <Row>
                        <Col md={4}>
                            <ProjectTextCard>
                                <h2>Theme Interpretation</h2>
                                <p>We found the theme to be creatively limiting so instead of using a typical zombie, we made the playable character a recycled/discarded toy (that's a zombie, right?).</p>
                                <p>Spoiler: The judges didn't like it</p>
                            </ProjectTextCard>
                        </Col>
                        <Col md={4}>
                            <ProjectTextCard>
                                <h2>Gameplay</h2>
                                <p>The game is a lockstep puzzle game where the player attempts to reach the end of a level within a limited amount of turns whilst avoiding enemies line of sight.</p>
                            </ProjectTextCard>
                        </Col>
                        <Col>
                            <ProjectTextCard>
                                <h2>Results</h2>
                                <p>Players really enjoyed the game overall however we scored poorly for 'Theme'.</p>
                                <p>We placed 3rd.</p>
                            </ProjectTextCard>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <ProjectTextCard>
                                <h2>Learning</h2>
                                <h5>(Level Building)</h5>
                                <p>Turns out building levels for a puzzle game is extremely time consuming and difficult if you want your levels to be enjoyable and progress in difficulty</p>
                                <p>Even with the level builder tool we designed, there is alot of skill required to make a level that teaches and challenges the player.</p>
                                <p>If you're making a puzzle game, be sure to budget time for level design.</p>
                            </ProjectTextCard>
                        </Col>
                        <Col md={4}>
                            <ProjectTextCard>
                                <h2>Learning</h2>
                                <h5>(Solo Programmer)</h5>
                                <p>This was the first game jam I participated in where I was the only programmer.</p>
                                <p>I was working flat out for the entirety of the 3 days in order to get everything developed and working. Game jams are much more enjoyable when you've got a fellow programmer to work alongside and share the load with.</p>
                            </ProjectTextCard>
                        </Col>
                        <Col>
                            <ProjectTextCard>
                                <h2>Technologies</h2>
                                <ul>
                                    <li>Unity (Game Engine)</li>
                                    <li>C#</li>
                                </ul>
                            </ProjectTextCard>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}><ProjectImageCard src="/images/why-does-no-one-love-me/screenshot-1.png" /></Col>
                        <Col><ProjectVideoCard src="/videos/why-does-no-one-love-me/vid-1.mp4" type="video/mp4"/></Col>
                    </Row>
                </Col>

                {/* ------ Right Column ------ */}
                <Col md={3}>

                    {/* ------ Row 1 ------ */}
                    <ProjectTextCard>
                        <a target="_blank" href="https://itsnotagoodtime.itch.io/why-does-no-on-love-me" rel="noreferrer">
                            <h2>Play here!</h2>
                        </a>
                    </ProjectTextCard>

                    {/* ------ Row 2 ------ */}
                    <ProjectImageCard src="/images/why-does-no-one-love-me/card-why-does-no-one-love-me.png" />

                    {/* ------ Row 3 ------ */}
                    <ProjectTextCard>
                        <h2>Team Members</h2>
                        <ul>
                            <li>Lauryn Dorne (Artist)</li>
                            <li>Remi Martin (Artist)</li>
                            <li>Jashon Brown (Programmer)</li>
                        </ul>
                    </ProjectTextCard>

                    {/* ------ Row 4 ------ */}
                    <ProjectImageCard src="/images/why-does-no-one-love-me/banner-why-does-no-one-love-me.png" />
                </Col>
            </Row>
        </div>
    )
}

export default WhyDoesNoOneLoveMe
