import React, { useEffect, useState } from 'react';
import './about.css';
import LineGrid from '../components/LineGrid'; // ✅ Only grid here

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", (e) => setIsMobile(e.matches));
    return () => mediaQuery.removeEventListener("change", () => {});
  }, []);

  return (
    <section className="about-container" id="about">
      {/* ✅ LineGrid moved here */}
      <div className="grid-overlay">
        <LineGrid isMobile={isMobile} />
      </div>
    </section>
  );
};

export default About;
