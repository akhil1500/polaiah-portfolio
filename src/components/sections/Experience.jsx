import { motion } from "framer-motion";

import experience from "../../data/experience";

import { ExperienceItem, SectionLabel } from "../ui"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};
 
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Experience() {
    return (
        <section className="section" id="experience">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.1}}
            >
                <motion.div variants={itemVariants}>
                    <SectionLabel label="03 / experience" />
                    <h2 className="section-title">Work History</h2>
                </motion.div>

                <div className="exp-list">
                    {experience.map((exp, index) => (
                        <motion.div key={exp.id} variants={itemVariants}>
                            <ExperienceItem
                                company={exp.company}
                                role={exp.role}
                                period={exp.period}
                                location={exp.location}
                                description={exp.description}
                                bullets={exp.bullets}
                                tags={exp.tags}
                                isLast={index === experience.length - 1}
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}