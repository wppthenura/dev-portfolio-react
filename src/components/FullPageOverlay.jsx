// src/components/FullPageOverlay.jsx
import './FullPageOverlay.css';

const FullPageOverlay = ({ content, onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>×</button>

        {content === 'About me' && (
          <>
            <h2>About Me</h2>
            <p>I am a passionate developer with a love for 3D interfaces and creative design...</p>
          </>
        )}
        {content === 'Skills' && (
          <>
            <h2>Skills</h2>
            <ul>
              <li>JavaScript / React / Node.js</li>
              <li>Three.js / WebGL</li>
              <li>UI/UX Design</li>
            </ul>
          </>
        )}
        {content === 'Projects' && (
          <>
            <h2>Projects</h2>
            <p>Take a look at some of my creative and technical builds, including 3D portfolios and custom UI systems.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default FullPageOverlay;
