import '../styles/ProjectTextCard.scss';

function ProjectTextCard(props) {
    return (
        <div className={props.className ? "project-text-card " + props.className : "project-text-card"}>
            {props.children}
        </div>
    )
}

export default ProjectTextCard
