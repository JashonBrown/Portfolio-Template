import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';

function DungeonCrawler() {
    return (
        <div className="project">
            <Row>
                <Col md={6}>
                    <ProjectTextCard>
                        <h2>Dungeon Crawler</h2>
                        <h5>Status: Completed (2016)</h5>
                        <br />
                        <h3>Summary</h3>
                        <p>'Dungeon Crawler' is a game that was developed for a university assignment using visual arts tool 'Processing'.</p>
                    </ProjectTextCard>
                </Col>
                <Col md={3}>
                    <ProjectTextCard>
                        <h2>Gameplay</h2>
                        <p>Players travel deeper through multiple levels of a dungeon shooting eneimes and obtaining stronger weapons until they are eventually faced with a boss fight.</p>
                    </ProjectTextCard>
                </Col>
                <Col>
                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>Processing</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <ProjectImageCard src="/images/dungeon-crawler/screenshot-1.png" />
                </Col>
                <Col md={4}>
                    <ProjectImageCard src="/images/dungeon-crawler/screenshot-2.png" />
                </Col>
                <Col>
                    <ProjectImageCard src="/images/dungeon-crawler/screenshot-3.png" />
                </Col>
            </Row>
        </div>
    )
}

export default DungeonCrawler
