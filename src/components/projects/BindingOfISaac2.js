import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';

function BindingOfISaac2() {
    return (
        <div className="project">
            <Row>
                <Col md={6}>
                    <ProjectTextCard>
                        <h2>Binding of Isaac 2</h2>
                        <h5>Status: Completed (2016)</h5>
                        <br />
                        <h3>Summary</h3>
                        <p>'Binding of Isaac 2' is a game that was developed for a university assignment using visual arts tool 'Processing'.</p>
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
                    <ProjectImageCard src="/images/binding-of-isaac-2/screenshot-1.png" />
                </Col>
                <Col md={4}>
                    <ProjectImageCard src="/images/binding-of-isaac-2/screenshot-2.png" />
                </Col>
                <Col>
                    <ProjectImageCard src="/images/binding-of-isaac-2/screenshot-3.png" />
                </Col>
            </Row>
        </div>
    )
}

export default BindingOfISaac2
