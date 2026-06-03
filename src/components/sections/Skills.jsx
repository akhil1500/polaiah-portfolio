import { SectionLabel, SkillCard } from "../ui";

import skills from "../../data/skills";

export default function Skills() {
    return <section id="skills">
        <SectionLabel label="02 / skills" />
        <div className="section-label"></div>
        <div className="section-title">Technologies &amp; tools</div>
        <div className="skills-grid">
            {skills.map(skill => (
                <SkillCard key={skill.id} {...skill} />
            ))}
        </div>
    </section>
}