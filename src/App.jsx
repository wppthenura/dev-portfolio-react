// src/App.jsx
import Hero from "./pages/hero";
import About from "./pages/about";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import Contact from "./pages/contact";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <>
    <Navbar/>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
