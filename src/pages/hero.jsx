import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <section className="hero-container" id="hero">
      <div className="hero-3d">
        {[...Array(11)].map((_, i) => (
          <div key={i} className={`panel panel-${i + 1}`}></div>
        ))}
      </div>
      <div className="hero-text">
        <h1>W P P Thenura</h1>
        <h2>Full Stack Developer | UI/UX Engineer</h2>
      </div>
    </section>
  );
};

export default Hero;
