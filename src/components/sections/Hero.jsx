import profile from "../../data/profile";

export default function Hero() {
    return <div>
        <div className="hero-eyebrow">____ Open to new opportunities</div>
        <h1>Polaiah <br />Bodeddula</h1>
        <p>{profile.role} . {profile.yearsOfExperience} Years</p>
        <p>{profile.tagline}</p>
        <div>
            <a href="">View Projects</a>
            <a href="">Get In Touch</a>
        </div>
        <div className="hero-stats">
            {profile.stats.map((stat, idx) => (
                <div key={idx}>
                    <div className="stat-num">{stat.num} <span>{stat.suffix}</span></div>
                    <div className="stat-label">{stat.label}</div>
                </div>
            ))}
        </div>
    </div>
}