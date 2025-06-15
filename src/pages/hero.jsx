import React, { useEffect, useState, useRef } from 'react';
import './hero.css';
import LineGrid from '../components/LineGrid';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(-1);
  const [finished, setFinished] = useState(false);
  const roleRef = useRef(null);
  const wrapperRef = useRef(null);
  const ballRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", (e) => setIsMobile(e.matches));
    return () => mediaQuery.removeEventListener("change", () => {});
  }, []);

  useEffect(() => {
    const roles = [
      "Full Stack Developer",
      "UI/UX Engineer",
      "Product Designer",
      "Full Stack Developer | UI/UX Engineer | Product Designer"
    ];

    let index = 0;
    const cycleRoles = () => {
      if (!roleRef.current || !wrapperRef.current) return;

      roleRef.current.style.opacity = 0;
      setTimeout(() => {
        roleRef.current.innerText = roles[index];
        if (index === roles.length - 1) {
          wrapperRef.current.classList.add("all-together");
          roleRef.current.classList.add("left");
        } else {
          wrapperRef.current.classList.remove("all-together");
          roleRef.current.classList.remove("left");
        }
        roleRef.current.style.opacity = 1;
        index = (index + 1) % roles.length;
      }, 400);
    };

    const interval = setInterval(cycleRoles, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        event.preventDefault();

        const nameLength = "Pulindu Thenura".length;

        // Case: After showing quote, now show popup
        if (currentLetterIndex === nameLength) {
          const choice = window.confirm(
            "Do you want to play again?\n\nOK = Play again\nCancel = No, let's Scroll"
          );

          if (choice) {
            // Restart from beginning
            setCurrentLetterIndex(-1);
            moveBallToStart();
            clearLiftedLetters();
            setFinished(false);
            quoteRef.current.style.opacity = 0;
          } else {
            // End animation
            setFinished(true);
          }
          return;
        }

        // Prevent further action if animation is over
        if (finished) return;

        const nextIndex = currentLetterIndex + 1;

        if (nextIndex < nameLength) {
          moveBallToLetter(nextIndex);
          liftLetter(nextIndex);
          setCurrentLetterIndex(nextIndex);
        } else if (nextIndex === nameLength) {
          // After last letter, move ball next to last letter and show quote
          moveBallNextToLastLetter();
          quoteRef.current.style.opacity = 1;
          setCurrentLetterIndex(nextIndex); // now = nameLength
        }
      }
    };

    const moveBallToLetter = (index) => {
      const letters = document.querySelectorAll('.letter');
      const ball = ballRef.current;
      if (!letters[index] || !ball) return;

      const letter = letters[index];
      const parent = letter.parentElement.getBoundingClientRect();
      const rect = letter.getBoundingClientRect();
      const offsetX = rect.left - parent.left + rect.width / 2 - 10;

      ball.style.transform = `translateX(${offsetX}px)`;
    };

    const moveBallToStart = () => {
      if (ballRef.current) {
        ballRef.current.style.transform = `translateX(-30px)`;
      }
    };

    const clearLiftedLetters = () => {
      const letters = document.querySelectorAll('.letter');
      letters.forEach((l) => (l.style.transform = 'translateY(0)'));
    };

    const moveBallNextToLastLetter = () => {
      const letters = document.querySelectorAll('.letter');
      const ball = ballRef.current;
      const lastLetter = letters[letters.length - 1];
      if (!lastLetter || !ball) return;

      const parent = lastLetter.parentElement.getBoundingClientRect();
      const rect = lastLetter.getBoundingClientRect();
      const offsetX = rect.left - parent.left + rect.width + 10;

      ball.style.transform = `translateX(${offsetX}px)`;
    };

    const liftLetter = (index) => {
      const letters = document.querySelectorAll('.letter');
      letters.forEach((letter, i) => {
        letter.style.transform = i === index ? 'translateY(-12px)' : 'translateY(0)';
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentLetterIndex, finished]);

  return (
    <section className="hero-container" id="hero">
      <div className="brand-and-links">
        <a className="brand">More than Coding</a>
      </div>

      <div className="grid-overlay">
        <LineGrid isMobile={isMobile} />
      </div>

      <div className="hero-text">
        <div className="name-container">
          <h1 className="animated-name">
            {"Pulindu Thenura".split("").map((char, i) => (
              <span key={i} className="letter">{char}</span>
            ))}
          </h1>
          <div className="ball" ref={ballRef} style={{ left: "-30px" }}>⚽</div>
        </div>

        <div className="quote" ref={quoteRef}>
          Enough playing with my name, Scrolllll downnnnn 😤
        </div>

        <div className="role-wrapper" ref={wrapperRef}>
          <h2 className="typewriter-text" ref={roleRef}>Full Stack Developer</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
