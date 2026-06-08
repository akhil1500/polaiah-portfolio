import Tag from "./Tag";

export default function SkillCard({icon, category, tags = []}) {
    return (
        <div className="skill-card">
            <div className="skill-icon">{icon}</div>
            <div className="skill-cat">{category}</div>
            <div className="skill-tags">
                {tags?.map((tag, idx) => (
                    <Tag key={idx} label={tag.label} color={tag.color} />
                ))}
            </div>
        </div>
    )
}