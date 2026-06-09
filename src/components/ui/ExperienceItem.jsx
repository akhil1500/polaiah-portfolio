import { getTagColor } from "../../utils/tagColor";
import Tag from "./Tag";

export default function ExperienceItem({
    period,
    location,
    company,
    role,
    description,
    bullets=[],
    tags=[],
    isLast=false
}) {
    const tagColors = getTagColor(tags.length);
    return (
        <div className={`exp-item ${isLast ? "exp-item--last": ""}`}>
            <div className="exp-meta">
                <div className="exp-period">{period}</div>
                <div className="exp-loc">{location}</div>
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
                        <Tag key={idx} label={tag} color={tagColors[idx]} />
                    ))}
                </div>
            </div>
        </div>
    )
}