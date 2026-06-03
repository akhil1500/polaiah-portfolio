export default function AchievementCard({icon, title, description}) {
    return (
        <div className="ach-card">
            <div className="ach-icon">{icon}</div>
            <div>
                <div className="ach-title">{title}</div>
                <div className="ach-text">{description}</div>
            </div>
        </div>
    )
}