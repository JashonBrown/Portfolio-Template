import '../styles/ProjectWebGLCard.scss';
import AutoScale from './AutoScale';

// Format: <ProjectWebGLCard url='https://itch.io/embed-upload/project_id'/> where the url is the direct link url from the "Embed Game" page on itch.io. 
// Specify a non 16:9 aspect ratio using "aspectRatio = '16 / 9'"
// Recommend setting your itch.io webgl resolution to 1920 * 1130, otherwise pass custom resolution into component

export default function ProjectWebGLCard(props) {
    let aspectRatio = !props.aspectRatio ? '16 / 9' : props.aspectRatio
    let iframeStyle = {
        width : parseInt(props.width ?? 1920, typeof(String)), 
        height : parseInt(props.height ?? 1130, typeof(String)),
    }
    return (
        <div className="project-web-gl-card" style={{aspectRatio: aspectRatio}}>
            <AutoScale>
                <iframe frameBorder="0" style={iframeStyle} title="Game Embed Card" src={props.url} allowFullScreen="" width="100%" height="100%"/>
            </AutoScale>
        </div>
    )
}