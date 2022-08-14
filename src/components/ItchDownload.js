import '../styles/ItchDownload.scss';

export default function ItchDownload(props) {
    return (
        <div className="itch-download">
            <iframe frameborder="0" src={"https://itch.io/embed/" + props.src + "?bg_color=212529&amp;fg_color=eeeeee&amp;link_color=eeeeee&amp;border_color=212529"} width="100%" height="auto" title={props.title}><a href={props.download}>{props.title}</a></iframe>
        </div>
    )
}