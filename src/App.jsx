import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import profile from "./data/profile";
import { useEffect } from "react";

const pageTitles = {
  "/": `${profile.name} | ${profile.role}`,
  "/projects": `Projects | ${profile.name},`
}

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() =>{
    document.title = pageTitles[location.pathname] ||
      "Polaiah Bodeddula | Senior Software Engineer";
  }, [location.pathname])

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;