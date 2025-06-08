// src/App.jsx
import HorizontalScrollContainer from "./components/horizontalscrollcontainer";
import Hero from "./pages/hero";
import About from "./pages/about";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import Contact from "./pages/contact";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <>
      <HorizontalScrollContainer>
        <Navbar/>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </HorizontalScrollContainer>
    </>
  );
}
