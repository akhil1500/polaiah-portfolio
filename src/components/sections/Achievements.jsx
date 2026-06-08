import { motion } from "framer-motion";

import achievements from "../../data/achievements";

import { AchievementCard, SectionLabel } from "../ui";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};
 
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export default function Achievements() {
    return (
        <section className="section" id="achievments">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.1}}
            >
                <motion.div variants={itemVariants}>
                    <SectionLabel label="05 / achievements" />
                    <h2 className="section-title">Beyond the code</h2>
                </motion.div>
                
                <div className="achievement-grid">
                    {achievements.map((achievement) => (
                        <motion.div key={achievement.id} variants={itemVariants}>
                            <AchievementCard
                                icon={achievement.icon}
                                title={achievement.title}
                                description={achievement.description}
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
    // return <section id="achievements">
    //     <SectionLabel label="05 / achievements" />
    //     <div className="section-title">Beyond the code</div>
    //     <div className="achievements-grid">
    //         {achievements.map(achievement => (
    //             <AchievementCard key={achievement.id} {...achievement}/>
    //         ))}
    //     </div>
    // </section>
}