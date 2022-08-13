import '../styles/ProjectFlipCard.scss';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProjectFlipCard(project) {
    var classes = "project-flip-card";
    if (project.gradient) { classes += " gradient"; }

    let content = (project.icon)
        ?
        <>
            <Card.Img src={project.image}/>
            <Card.ImgOverlay className="centered">
                <Card.Img as={FontAwesomeIcon} icon={project.icon} size="4x"/>
                <Card.ImgOverlay>
                    <h3>{project.title}</h3>
                </Card.ImgOverlay>
            </Card.ImgOverlay>
        </>
        :
        <>
            <Card.Img src={project.image}/>
            <Card.ImgOverlay>
                <h3>{project.title}</h3>
            </Card.ImgOverlay>
        </>;

    return (
        <NavLink exact to={"/projects/" + project.slug} className={classes}>
            <div className="project-card-body">
                <div className="project-card-front" style={{backgroundColor:project.color}}>
                    {content}
                </div>
                <div className="project-card-back">
                    <h5>{project.description}</h5>
                </div>
            </div>
        </NavLink>
    )
}