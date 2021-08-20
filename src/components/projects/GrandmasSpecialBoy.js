import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';

function GrandmasSpecialBoy() {
    return (
        <div className="project">
            <Row>
                <Col md={9}>
                    <ProjectTextCard>
                        <h2>Cat Cat Magic Attack</h2>
                        <h5>Status: On Hold</h5>
                        <br />
                        <h3>Summary</h3>
                        <p>'Cat Cat Magic Attack' is an IP a friend of mine created. The story is dark natured, set in a magical school and has lots of cats.</p>
                        <p>A few mediums for which the story can be told through have been explored of which I've been included in those involved with game development.</p>
                    </ProjectTextCard>
                </Col>
                <Col><ProjectImageCard src="/images/cat-cat-magic-attack/card-cat-cat-magic-attack.png" /></Col>
            </Row>

            <Row>
                <Col md={4}>
                    <ProjectTextCard>
                        <h2>Genre</h2>
                        <p>The game is a 2D action RPG pulling inspiriation from games such as Pokemon, Crosscode and Undertale.</p>
                    </ProjectTextCard>
                </Col>
                <Col md={4}>
                    <ProjectTextCard>
                        <h2>Future Plans</h2>
                        <p>After acknowledging the time investment required for a video game, it's been decided to initially tell the story via a digital comic and revisit a game later.</p>
                    </ProjectTextCard>
                </Col>
                <Col>
                <ProjectTextCard>
                    <h2>Technologies</h2>
                    <ul>
                        <li>Unity</li>
                        <li>C#</li>
                        <li>Ink (Unity Plugin)</li>
                    </ul>
                </ProjectTextCard>
                </Col>
            </Row>

            <Row>
                <Col md={4}>
                    <ProjectImageCard src="/images/cat-cat-magic-attack/SnowballElle.png" />
                    <ProjectImageCard src="/images/cat-cat-magic-attack/map.png" />
                </Col>
                <Col md={4}>
                    <div className="grid">
                        <ProjectImageCard className="gif flipped" src="/images/cat-cat-magic-attack/ElleWalkCycle2.gif" />
                        <ProjectImageCard className="gif" src="/images/cat-cat-magic-attack/ElleWalkCycle.gif" />
                        <ProjectImageCard className="gif" src="/images/cat-cat-magic-attack/ElleWalkCycle2.gif" />
                        <ProjectImageCard className="gif" src="/images/cat-cat-magic-attack/MayoWalkCycle.gif" />
                    </div>
                    <ProjectImageCard src="/images/cat-cat-magic-attack/elle.png" />
                </Col>
                <Col md={4}>
                    <ProjectImageCard src="/images/cat-cat-magic-attack/CatCat.png" />
                </Col>
            </Row>
        </div>
    )
}

export default GrandmasSpecialBoy
