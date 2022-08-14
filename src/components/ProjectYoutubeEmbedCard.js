import '../styles/ProjectVideoCard.scss';

export default function ProjectYoutubeEmbedCard(props) {
    return (
        <div className="project-youtube-card" style={{aspectRatio: "16/9"}}>
            <iframe width="100%" height="100%" src={"https://www.youtube-nocookie.com/embed/" + props.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}
