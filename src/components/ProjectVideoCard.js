import '../styles/ProjectVideoCard.scss';

function ProjectVideoCard(props) {
    return (
        <div className="project-video-card">
            <video autoPlay controls src={props.src} type={props.type} />
        </div>
    )
}

export default ProjectVideoCard
