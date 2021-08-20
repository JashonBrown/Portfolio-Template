import '../styles/Projects.scss';
import ProjectFlipCard from './ProjectFlipCard';
import {Row, Col} from 'react-bootstrap';

function YearlyProjects(props) {
    return (
        <>
            <Row>
                <h2>{props.year}</h2>
                <hr/>
            </Row>
            <div className="project-cards">
                <Row>
                    {props.projects.map((project) => (
                        <Col md={6} lg={4} xl={3}>
                            <ProjectFlipCard {...project}/> {/* passes through all of 'project' details */}
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    )
}

export default YearlyProjects
