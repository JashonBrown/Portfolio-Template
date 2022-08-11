import '../../styles/Projects.scss';
import { projects } from "../../data";
import GroupedProjects from '../GroupedProjects';

export default function Projects() {

    const project_dict = {};

    projects.map(project => 
    {
        // Populate dict with empty array if first time
        if (project_dict[project.group] == null)
            project_dict[project.group] = [];

        // Add project to respective years list
        project_dict[project.group].push(project);

        // Added to prevent warning
        return {};
    });

    // Construct array of yearly elements
    let content = [];
    for (let group in project_dict)
        content.push(<GroupedProjects group={group} projects={project_dict[group]} />);
    
    // Reverse order so they show from newest to oldest
    content = content.reverse();

    return (<div className="projects">{content}</div>)
}
