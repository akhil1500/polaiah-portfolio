import experience from "../../data/experience";

import { ExperienceItem, SectionLabel } from "../ui"

export default function Experience() {
    return <section id="experience">
        <SectionLabel label="03 / experience" />
        <div className="section-title">Work History</div>
        <div className="exp-list">
            {experience.map(work => (
                <ExperienceItem key={work.id} {...work} />
            ))}
        </div>
    </section>
}