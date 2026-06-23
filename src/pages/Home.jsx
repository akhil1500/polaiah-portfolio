import { motion } from "framer-motion";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Achievements from "../components/sections/Achievements";
import Contact from "../components/sections/Contact";

const pageVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    x: -60,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const Home = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Hero />
      <hr className="divider" />
      <About />
      <hr className="divider" />
      <Skills />
      <hr className="divider" />
      <Experience />
      <hr className="divider" />
      <Projects />
      <hr className="divider" />
      <Achievements />
      <hr className="divider" />
      <Contact />
    </motion.div>
  );
};

export default Home;