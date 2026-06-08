import { motion } from "framer-motion";

import projects from "../../data/projects";

import { ProjectCard, SectionLabel } from "../ui";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 },
    },
};
 
const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export default function Projects() {
    return (
        <section className="section" id="projects">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.1}}
            >
                <motion.div variants={itemVariants}>
                    <SectionLabel label="04 / projects" />
                    <h2 className="section-title">Selected Work</h2>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project)  => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            whileHover={{y: -3}}
                            transition={{duration: 0.2}}
                        >
                            <ProjectCard
                                num={project.num}
                                title={project.title}
                                description={project.description}
                                tags={project.tags}
                                github={project.github}
                                live={project.live}
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}