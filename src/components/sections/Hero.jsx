import { motion } from "framer-motion";

import Button from "../ui/Button";

import profile from "../../data/profile";
import profilePhoto from "../../assets/profile.jpg";

const containerVariants = {
    hidden: {   opacity: 0  },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};
 
const itemVariants = {
    hidden: {   opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {  
            duration: 0.6,
            ease: "easeOut" 
        },
    },
};
 
const photoVariants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { 
            duration: 0.7, 
            ease: "easeOut", delay: 0.3 
        },
    },
};

export default function Hero() {
    return(
        <section className="hero" id="hero">
            <div className="hero-inner">

                {/**Left: Text Content */}
    
                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="hero-eyebrow" variants={itemVariants}>
                        Open to new opportunities
                    </motion.div>

                    <motion.h1 className="hero-name" variants={itemVariants}>
                        {profile.shortName}<br />
                        <span>{profile.name.split(" ")[1]}</span>
                    </motion.h1>

                    <motion.p className="hero-title" variants={itemVariants}>
                        {profile.role} · {profile.yearsOfExperience} Years
                    </motion.p>

                    <motion.p className="hero-desc" variants={itemVariants}>
                        {profile.tagline} {profile.description}
                    </motion.p>

                    <motion.div className="hero-actions" variants={itemVariants}>
                        <Button label="View Projects" href="#projects" variant="primary" />
                        <Button label="Get In Touch" href="#contact" variant="outline" />
                    </motion.div>

                    {/** Stats */}
                    <motion.div className="hero-stats" variants={itemVariants}>
                        {profile.stats.map((stat) => (
                        <div key={stat.label} className="hero-stat">
                            <div className="stat-num">
                            {stat.num}<span>{stat.suffix}</span>
                            </div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                        ))}
                    </motion.div>

                </motion.div>

                {/* ── Right: Profile Photo ── */}
                <motion.div
                    className="hero-photo-wrapper"
                    variants={photoVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="hero-photo-glow" />
                    <img
                        src={profilePhoto}
                        alt={`${profile.name} – ${profile.role}`}
                        className="hero-photo"
                    />
                </motion.div>
            </div>
        </section>
    )
}