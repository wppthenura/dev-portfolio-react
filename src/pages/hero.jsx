import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-3d">
        {[...Array(9)].map((_, i) => (
          <div key={i} className={`panel panel-${i + 1}`}></div>
        ))}
      </div>
      <div className="hero-text">
        <h1>SHOW THE FUTURE,</h1>
        <h2>CREATE A VISION.</h2>
      </div>
    </section>
  );
};

export default Hero;
