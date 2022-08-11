import '../styles/Projects.scss';
import ProjectFlipCard from './ProjectFlipCard';
import {Row, Col} from 'react-bootstrap';

export default function GroupedProjects(props) {
    return (
        <>
            <Row>
                <h2>{props.group}</h2>
                <hr/>
            </Row>
            <div className="project-cards">
                <Row>
                    {props.projects.map((project) => (
                        <Col md={6} lg={4} xl={3} key={project.key}> {/* key needs to be added to stop react error */}
                            <ProjectFlipCard {...project}/> {/* passes through all of 'project' details */}
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    )
}
