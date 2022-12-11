import '../styles/ProjectVideoCard.scss';

export default function ProjectVideoCard(props) {
    let autoplay = props.autoplay ?? true;

    return (
        <div className="project-video-card">
            <video autoPlay={autoplay} controls src={props.src} type={props.type} />
        </div>
    )
}
