import projects from "../../data/projects"

import { ProjectCard, SectionLabel } from "../ui"

export default function Projects() {
    return <section id="projects">
        <SectionLabel label="04 / projects" />
        <div className="section-title">Selected work</div>
        <div className="projects-grid">
            {projects.map(project => (
                <ProjectCard key={project.id} {...project} />
            ))}
        </div>
    </section>
}