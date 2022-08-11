import '../../styles/Projects.scss';
import { projects } from "../../data";
import YearlyProjects from '../YearlyProjects';

function Projects() {

    const project_dict = {};

    projects.map(project => 
    {
        // Populate dict with empty array if first time
        if (project_dict[project.year] == null)
            project_dict[project.year] = [];

        // Add project to respective years list
        project_dict[project.year].push(project);

        // Added to prevent warning
        return {};
    });

    // Construct array of yearly elements
    let content = [];
    for(let year in project_dict)
        content.push(<YearlyProjects year={year} projects={project_dict[year]} />);
    
    // Reverse order so they show from newest to oldest
    content = content.reverse();

    return (<div className="projects">{content}</div>)
}

export default Projects
