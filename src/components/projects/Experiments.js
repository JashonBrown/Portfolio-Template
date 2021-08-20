import '../../styles/Project.scss';
import ProjectTextCard from "../ProjectTextCard";
import {Row, Col} from "react-bootstrap";
import ProjectImageCard from "../ProjectImageCard";

function Experiments() {
    return (
        <div className="project">
            <Row>
                <Col>
                    <ProjectTextCard className="centered">
                        <h2>Experiments</h2>
                        <p>An assortment of random experiments</p>
                    </ProjectTextCard>
                </Col>
            </Row>
            <Row>
                <Col md={4}><ProjectImageCard src="/images/experiments/beyblade.gif" /></Col>
                <Col md={4}><ProjectImageCard src="/images/experiments/bouncyTown.gif" /></Col>
                <Col><ProjectImageCard src="/images/experiments/glass_tree.gif" /></Col>
            </Row>
        </div>
    )
}

export default Experiments
