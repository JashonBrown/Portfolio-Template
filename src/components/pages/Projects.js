import '../../styles/Projects.scss';
import { projects, groups } from "../../data";
import GroupedProjects from '../GroupedProjects';

export default function Projects() {

    const project_dict = {};
    const group_dict = {};

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

    // Construct array of category elements
    groups.map(group => 
    {
        group_dict[group.key] = group.prio;
        return {};
    })

    let content = [];
    for (let group in project_dict)
        content.push(
            <div key={group}> {/* need to wrap in div with key to stop react error */}
                <GroupedProjects group={group} projects={project_dict[group]} />
            </div>
        );
    
    // Sort by prio
    content = content.sort((a, b) => group_dict[a.key] - group_dict[b.key]).reverse();

    return (<div className="projects">{content}</div>)
}
