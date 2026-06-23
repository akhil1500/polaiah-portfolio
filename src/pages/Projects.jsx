import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import projects from "../data/projects";
import SectionLabel from "../components/ui/SectionLabel";
import ProjectCard from "../components/ui/ProjectCard";

const pageVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    x: 60,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

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

const Projects = () => {
  const navigate = useNavigate();
  const professionalProjects = projects.filter((p) => p.type === "professional");
  const personalProjects = projects.filter((p) => p.type === "personal");

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <section className="section">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={itemVariants}>
            <SectionLabel label="projects" />
            <h2 className="section-title">All Projects</h2>
          </motion.div>

          {/* Professional Projects */}
          <motion.div variants={itemVariants}>
            <div className="projects-category-label">
              <span>Professional</span>
            </div>
          </motion.div>

          <div className="projects-grid">
            {professionalProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <ProjectCard
                  num={project.num}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                />
              </motion.div>
            ))}
          </div>

          {/* Personal Projects */}
          <motion.div variants={itemVariants}>
            <div className="projects-category-label">
              <span>Personal</span>
            </div>
          </motion.div>

          <div className="projects-grid">
            {personalProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <ProjectCard
                  num={project.num}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                />
              </motion.div>
            ))}
          </div>

          {/* Back to Home */}
          <motion.div variants={itemVariants} className="projects-back">
            <button
              className="btn-outline"
              onClick={() => navigate("/")}
            >
              ← Back to Home
            </button>
          </motion.div>

        </motion.div>
      </section>
    </motion.div>
  );
};

export default Projects;