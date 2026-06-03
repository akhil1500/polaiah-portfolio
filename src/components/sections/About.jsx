import { SectionLabel } from "../ui";

import profile from "../../data/profile";

export default function About() {
    return <section id="about">
        <SectionLabel label='01 / about' />
        <h2 className="section-title">Shipping Backend Systems <br />that actually hold up</h2>
        <div className="about-grid">
            <div className="about-text">
                {profile.about.map((text, idx) => (
                    <p key={idx}>{text}</p>
                ))}
            </div>
            <div>
                <div className="info-card">
                    {profile.info.map((infoData, idx) => (
                        <div key={idx} className="info-row">
                            <span className="info-key">{infoData.key}</span>
                            <span className="info-badge">{infoData.value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
}