import '../styles/ProjectWebGLCard.scss';

// Format: <ProjectWebGLCard url='https://itch.io/embed-upload/project_id'/> where the url is the direct link url from the "Embed Game" page on itch.io. 
// Specify a non 16:9 aspect ratio using "aspectRatio = '16 / 9'"

export default function ProjectWebGLCard(props) {
    let aspectRatio = !props.aspectRatio ? '16 / 9' : props.aspectRatio

    return (
        <div className="project-web-gl-card" style={{aspectRatio: aspectRatio}}>
                <iframe frameBorder="0" title="Game Embed Card" src={props.url} allowFullScreen="" width="100%" height="100%"/>
        </div>
    )
}
