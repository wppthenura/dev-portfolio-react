import React from "react";

const SkillsContent = () => (
  <div
    style={{
      fontFamily: "sans-serif", 
      color: "black",
      padding: "20px",
      borderRadius: "12px",
      maxWidth: "400px",
      margin: "0 auto",
      lineHeight: "1.6",
    }}
  >
    <style>
      {`
        @font-face {
          font-family: 'BitcountGridDouble';
          src: url('/fonts/BitcountGridDouble.ttf') format('truetype');
        }
      `}
    </style>

    <h2
      style={{
        fontSize: "1.8rem",
        marginBottom: "16px",
        fontFamily: "BitcountGridDouble, sans-serif",
      }}
    >
      Skills
    </h2>

    <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
      <li>Fullstack Web Development</li>
      <li>Fullstack Mobile Development</li>
      <li>IoT Systems (Arduino, RFID, Load Cells)</li>
      <li>UI/UX Designing</li>
      <li>Database-Driven Applications</li>
      <li>Software Architecture</li>
      <li>Time Management & Leadership</li>
      <li>YouTube DRM</li>
      <li>MS Office / Google Apps Proficiency</li>
      <li>Master in English</li>
      <li>Professional Badminton Player</li>

      <br />
      <br />
      
      <span
        style={{
          fontFamily: "BitcountGridDouble, sans-serif",
          fontSize: "1.1rem",
          display: "inline-block",
          marginBottom: "8px",
        }}
      >
        <b>Languages I work with</b>
      </span>

      <br />
      <br />

      <li>JavaScript</li>
      <li>C</li>
      <li>C#</li>
      <li>Dart</li>
      <li>Python</li>
      <li>ReactJS</li>
      <li>NodeJS</li>
      <li>ThreeJS</li>
      <li>HTML</li>
      <li>TypeScript</li>
      <li>Go</li>
    </ul>
  </div>
);

export default SkillsContent;
