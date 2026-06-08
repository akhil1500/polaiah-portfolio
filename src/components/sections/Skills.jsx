import { motion } from "framer-motion";

import { SectionLabel, SkillCard } from "../ui";

import skills from "../../data/skills";

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

export default function Skills() {
    return (
        <section className="section" id="skills">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.1}}
            >
                <motion.div variants={itemVariants}>
                    <SectionLabel label="02 / skills" />
                    <h2 className="section-title">
                        Technologies &amp; tools
                    </h2>
                </motion.div>

                <div className="skills-grid">
                    {skills.map((skill) => (
                        <motion.div key={skill.id} variants={itemVariants}>
                            <SkillCard
                                icon={skill.icon}
                                category={skill.category}
                                tags={skill.tags}
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}