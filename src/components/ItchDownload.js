import '../styles/ItchDownload.scss';

export default function ItchDownload(props) {
    return (
        <div className="itch-download">
            <iframe frameborder="0" title={props.title} src={"https://itch.io/embed/" + props.src + "?border_width=0&bg_color=222222&fg_color=eeeeee&link_color=eeeeee&border_color=363636"} width="100%" height="165"><a href={props.download}>{props.title}</a></iframe>
        </div>
    )
}