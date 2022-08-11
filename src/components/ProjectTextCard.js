import '../styles/ProjectTextCard.scss';

export default function ProjectTextCard(props) {
    return (
        <div className={props.className ? "project-text-card " + props.className : "project-text-card"}>
            {props.children}
        </div>
    )
}
