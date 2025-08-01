import React from "react";

const ProjectsContent = () => (
  <div
    style={{
      fontFamily: "sans-serif",
      color: "black",
      padding: "5px",
      borderRadius: "12px",
      maxWidth: "700px",
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
        fontSize: "70px",
        marginBottom: "16px",
        fontFamily: "BitcountGridDouble, sans-serif",
      }}
    >
      My Work
    </h2>

    <p style={{ marginBottom: "20px" }}>
      Here are some of my featured projects:
    </p>

    <ul style={{ paddingLeft: "20px", listStyleType: "disc" }}>
      <li style={{ marginBottom: "24px" }}>
  <strong>OstoCare (Mobile App)</strong>
  <p style={{ fontSize: "0.9rem", marginTop: "8px" }}>
    A healthcare application developed to support ostomy patients in Sri Lanka, featuring a clean UI, engaging UX, and logically developed tools for tracking and guidance.
    <br />
    This project was a major milestone in my journey as a developer, where I led the team and took charge of the full development process. Among my peers at NSBM, it stood out as the most logically structured and fully functional mobile app.
    <br />
    It is now being scaled towards an industry-level product, with plans to launch on the Play Store and App Store soon. The app was built using the Dart programming language and Flutter framework.
  </p>
  <a
    href="https://github.com/Ostodevs/Ostocare_Mobapp.git"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "orange" }}
  >
    View on GitHub
  </a>
  <div
    style={{
      marginTop: "10px",
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      justifyContent: "center",
    }}
  >
    {[
      "Osto.png",
      "Osto1.png",
      "Osto2.png",
      "Osto3.png",
      "Osto4.png",
      "Osto5.png",
      "Osto6.png",
      "Osto7.png",
      "Osto8.png",
    ].map((img, index) => (
      <img
        key={index}
        src={`/images/${img}`}
        alt={`OstoCare screenshot ${index + 1}`}
        style={{
          width: "calc(30.33% - 10px)",
          borderRadius: "8px",
          objectFit: "cover",
        }}
      />
    ))}
  </div>
</li>
<li style={{ marginBottom: "24px" }}>
  <strong>3D Portfolio Website</strong>
  <p style={{ fontSize: "0.9rem", marginTop: "8px" }}>
    This 3D portfolio website is a fully custom built, interactive experience designed and developed entirely by me. 
    It blends modern web technologies with 3D graphics to showcase my projects, skills, and personality in a dynamic and engaging way. 
    The website is built using React for its component driven architecture and React Three Fiber, a React renderer for Three.js, to create immersive 3D scenes directly within the browser. 
    To enhance the development experience and simplify 3D object management, I used @react-three/drei, a utility library for common 3D patterns. The user interface elements, such as scrollable overlays and responsive layouts, are styled using Tailwind CSS, while Framer Motion adds smooth animations and transitions. 
    The project is deployed through Vercel, ensuring fast, serverless deployment and easy updates as I wanted my personal website to be. Everything is version controlled and publicly available on GitHub, 
    where others are welcome to explore.
  </p>
  <a
    href="https://github.com/wppthenura/dev-portfolio-react"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "orange" }}
  >
    View on GitHub
  </a>
  <img
    src="/images/3Dmyportfolioweb.png"
    alt="3D Portfolio Preview"
    style={{
      marginTop: "10px",
      width: "100%",
      height: "auto",
      borderRadius: "8px",
      objectFit: "cover"
    }}
  />
</li>

<li style={{ marginBottom: "24px" }}>
  <strong>YouTube Video Detector</strong>
  <p style={{ fontSize: "0.9rem", marginTop: "8px" }}>
    A modern web platform built with Next.js that tracks and ranks YouTube videos based on their Views Per Hour (VPH) using YouTube Data API v3. 
    The dashboard auto-refreshes every 5 minutes and offers a polished UI with light/dark themes, animated 3D video cards, and Top 5/Recent 5 ranking sections.
    <br /><br />
    It includes a “Music Detector” page that uses <code>yt-dlp</code> to extract audio from selected videos, sends it securely (with HMAC‑signed requests) 
    to ACRCloud’s API, and displays recognized song data with timestamps and metadata. The system combines React frontend, Next.js API routes, 
    Python audio processing, and third‑party recognition APIs into one unified solution.
  </p>

  <a
    href="https://github.com/wppthenura/Viddetector"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "orange" }}
  >
    View on GitHub
  </a>

  <div
    style={{
      marginTop: "10px",
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      justifyContent: "center",
    }}
  >
    {["Videodetector1.png", "Videodetector2.png"].map((img, idx) => (
      <img
        key={idx}
        src={`/images/${img}`}
        alt={`YouTube Video Detector Screenshot ${idx + 1}`}
        style={{
          width: "48%",
          height: "auto",
          borderRadius: "8px",
          objectFit: "cover",
        }}
      />
    ))}
  </div>
</li>

 <li style={{ marginBottom: "24px" }}>
  <strong>Smart Shelf IoT System</strong>
  <p style={{ fontSize: "0.9rem", marginTop: "8px" }}>
    This is a Web Dashboard application which was developed from JavaScript, HTML and CSS to track the real-time inventory system using Arduino, RFID, and Load Cells.
    This application was 100% fully functional and capable of monitoring every detail from the IoT sensors accurately.
  </p>
  <a
    href="https://github.com/muijayaweera/IoTwebdashboard.git"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "orange" }}
  >
    View on GitHub
  </a>

  <div
    style={{
      marginTop: "10px",
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      justifyContent: "center",
    }}
  >
    {["IOT.jpeg", "IOT2.png"].map((img, idx) => (
      <img
        key={idx}
        src={`/images/${img}`}
        alt={`IoT System Screenshot ${idx + 1}`}
        style={{
          width: "48%",
          height: "auto",
          borderRadius: "8px",
          objectFit: "cover",
        }}
      />
    ))}
  </div>
</li>

      <li style={{ marginBottom: "24px" }}>
  <strong>NSBM GO Mobile App</strong>
  <p style={{ fontSize: "0.9rem", marginTop: "8px" }}>
    This is an application designed and developed for students of NSBM to track and engage in the events and the club activities.
  </p>
  <a
    href="https://github.com/NsbmGO/NSBM-GO--MAD.git"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "orange" }}
  >
    View on GitHub
  </a>

  <div
    style={{
      marginTop: "10px",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <img
      src="/images/NSBMgo.jpg"
      alt="NSBM GO App Screenshot"
      style={{
        width: "50%",
        maxWidth: "500px",
        height: "auto",
        borderRadius: "8px",
        objectFit: "cover",
      }}
    />
  </div>
</li>
<li style={{ marginBottom: "24px" }}>
  <strong>DreamScopes Cinema Website</strong>
  <p style={{ fontSize: "0.9rem", marginTop: "8px" }}>
    A modern movie ticket booking platform.
  </p>

  <div
    style={{
      marginTop: "10px",
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      justifyContent: "center",
    }}
  >
    {["scope1.jpeg", "scope2.jpeg", "scope3.jpeg", "scope4.jpeg", "scope5.jpeg", "scope6.jpeg"].map((img, idx) => (
      <img
        key={idx}
        src={`/images/${img}`}
        alt={`DreamScopes Screenshot ${idx + 1}`}
        style={{
          width: "300px",
          height: "150px",
          borderRadius: "8px",
          objectFit: "cover",
        }}
      />
    ))}
  </div>
</li>

    </ul>
  </div>
);

export default ProjectsContent;
