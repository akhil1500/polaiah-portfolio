import achievements from "../../data/achievements";

import { AchievementCard, SectionLabel } from "../ui"

export default function Achievements() {
    return <section id="achievements">
        <SectionLabel label="05 / achievements" />
        <div className="section-title">Beyond the code</div>
        <div className="achievements-grid">
            {achievements.map(achievement => (
                <AchievementCard key={achievement.id} {...achievement}/>
            ))}
        </div>
    </section>
}