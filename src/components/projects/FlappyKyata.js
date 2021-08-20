import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';

function FlappyKyata() {
    return (
        <div className="project">
            <Row>
                <Col md={9}>
                    <ProjectTextCard>
                        <h2>Flappy Kyata</h2>
                        <h5>Status: Completed (2020)</h5>
                        <br />
                        <h3>Summary</h3>
                        <p>'Flappy Kyata' is a game that puts the art skills I've been honing decades on display. It was the easiest present I figured I could give my sister for her birthday. It's a 'Flappy Bird' clone that I didn't add a single new mechanic to.</p>
                        <p>At least she liked it!</p>
                    </ProjectTextCard>
                </Col>
                <Col><ProjectImageCard src="/images/flappy-kyata/card-flappy-kyata.png" /></Col>
            </Row>

            <Row>
                <Col><ProjectImageCard src="/images/flappy-kyata/screenshot-1.png" /></Col>
                <Col><ProjectImageCard src="/images/flappy-kyata/screenshot-3.png" /></Col>
                <Col md={3}>
                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>C#</li>
                            <li>Unity</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
            </Row>
        </div>
    )
}

export default FlappyKyata
