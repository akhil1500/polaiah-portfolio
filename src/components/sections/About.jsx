import { motion } from "framer-motion";

import { SectionLabel } from "../ui";

import profile from "../../data/profile";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};
 
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function About() {
    return(
        <section className="about section" id="about">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div variants={itemVariants}>
                    <SectionLabel label='01 / about' />
                    <h2 className="section-title">
                        Shipping Backend Systems <br />
                        that actually hold up
                    </h2>
                </motion.div>

                <div className="about-grid">
                    
                    {/* ── Left: Bio ── */}
                    <motion.div className="about-text" variants={itemVariants}>
                        {profile.about.map((text, idx) => (
                            <p key={idx}>{text}</p>
                        ))}
                    </motion.div>

                    {/* ── Right: Info Card ── */}
                    
                    <motion.div variants={itemVariants}>
                        <div className="info-card">

                            {/* Availability badge row */}
                            <div className="info-row">
                                <span className="info-key">Status</span>
                                {profile.openToWork ? (
                                    <span className="avail-badge">
                                    <span className="avail-dot" />
                                    Open to work
                                    </span>
                                ) : (
                                    <span className="avail-badge--closed">
                                    <span className="avail-dot--closed" />
                                    Not available
                                    </span>
                                )}
                            </div>

                            {/* Remaining info rows */}

                            {profile.info
                                .filter((item) => item.key !== 'Status')
                                .map((infoData, idx) => (
                                    <div key={idx} className="info-row">
                                        <span className="info-key">{infoData.key}</span>
                                        <span className="info-val">{infoData.value}</span>
                                    </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}