import Tag from "./Tag";

export default function ProjectCard({
    num,
    title,
    description,
    tags=[],
    github
}) {
    return (
        <div className="project-card">
            <div className="project-num">{num}</div>
            <div className="project-title">{title}</div>
            <div className="project-desc">{description}</div>
            <div className="project-tags">
                {tags.map((tag, idx) => (
                    <Tag key={idx} label={tag} />
                ))}
            </div>
            {github && (
                <a href="github" target="_blank" rel="noreferrer" className="project-link">
                    View on Github →
                </a>
            )}
        </div>
    )
}