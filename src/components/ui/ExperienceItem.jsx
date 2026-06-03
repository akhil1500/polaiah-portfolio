import Tag from "./Tag";

export default function ExperienceItem({
    period,
    location,
    company,
    role,
    description,
    bullets=[],
    tags=[]
}) {
    return (
        <div className="exp-item">
            <div className="exp-meta">
                <div className="exp-period">{period}</div>
                <div className="exp-location">{location}</div>
            </div>
            <div>
                <div className="exp-company">{company}</div>
                <div className="exp-role">{role}</div>
                { description && <div className="exp-desc">{description}</div>}
                <ul className="exp-bullets">
                    {bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                    ))}
                </ul>
                <div className="exp-tags">
                    {tags.map((tag, idx) => (
                        <Tag key={idx} label={tag} />
                    ))}
                </div>
            </div>
        </div>
    )
}