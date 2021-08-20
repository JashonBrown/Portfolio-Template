import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';

function PortfolioSite() {
    return (
        <div className="project">
            <Row>
                <Col md={9}>
                    <ProjectTextCard>
                        <h2>Portfolio Site</h2>
                        <h5>Status: Operating (2021 - Current)</h5>
                        <br />
                        <h3>Summary</h3>
                        <p>
                            I finally got around to putting up a portfolio site :D!
                            <br />
                            Now it'll be easier for me to show people the things I do.
                            I also thought I'd use creating this site as a way to learn ReactJS.
                        </p>
                    </ProjectTextCard>
                <Col md={4}>
                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>ReactJS</li>
                            <li>Node.js</li>
                            <li>Javascript</li>
                            <li>React Bootstrap</li>
                            <li>CSS</li>
                            <li>SASS</li>
                            <li>HTML</li>
                            <li>S3 (AWS)</li>
                            <li>Route 53 (AWS)</li>
                        </ul>
                    </ProjectTextCard>
                    </Col>
                </Col>
                <Col>
                    <ProjectTextCard>
                        <a target="_blank" href="https://github.com/JashonBrown/PortfolioSite" rel="noreferrer">
                            <h2>View Repo!</h2>
                        </a>
                    </ProjectTextCard>
                    <ProjectImageCard src="/images/portfolio-site/screenshot-1.png" />
                </Col>
            </Row>
        </div>
    )
}

export default PortfolioSite
