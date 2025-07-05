import React from "react";

const AboutMeContent = () => (
  <div
    style={{
      fontFamily: "sans-serif",
      color: "black",
      padding: "20px",
      borderRadius: "12px",
      maxWidth: "700px",
      margin: "0 auto",
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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        marginBottom: "20px",
      }}
    >
      <img
        src="/my.jpeg"
        alt="Pulindu Thenura"
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <h2
        style={{
          fontSize: "1.8rem",
          margin: 0,
          fontFamily: "BitcountGridDouble, sans-serif",
        }}
      >
        About Me
      </h2>
    </div>
    <p style={{ marginBottom: "12px" }}>
      Hi, I'm W.P.Pulindu Thenura, a self driven Software Engineer currently in my final year of pursuing a BSc (Hons) in Software Engineering at Plymouth University, UK. I believe in chasing bold ideas, working hard under pressure, and building innovative solutions that can make a real impact.
    </p>
    <p style={{ marginBottom: "12px" }}>
      I specialize in full-stack development, blending beautiful, intuitive user interfaces with robust backend logics and scalable architectures. From UI/UX design to database-driven applications and IoT systems, I bring versatility and hands-on experience to every project.
      Giving solutions to advance modern day tech life is what I see in myself. I’m focused on building solutions that combine 
      functionality with user-centric Frontends and Backends. I am fully able to understand and work with Artificial Inteligence(AI), getting the 100% of the benefits. 
    </p>
    <p style={{ marginBottom: "12px" }}>
      Beyond tech, I'm also a creative individual, a singer, guitarist, and natural communicator with leadership experience as a former Head Prefect and a club president. I thrive in team environments and bring strong time management and communication skills to the table.
    </p>
    <p style={{ marginBottom: "12px" }}>
  I'm eager to bring my energy, technical skills, and creativity to a company that values innovation, collaboration, and impact.
</p>
<p style={{ marginBottom: "12px" }}>
The idea behind this entire 3D portfolio website was mine. I designed and developed the whole experience from scratch. It's not perfect yet, but I'm constantly working to improve it. You're welcome to clone the GitHub repo and use the code to build your own portfolio. Just drop a ⭐ on my repo to show some love 😉.</p>
  </div>
);

export default AboutMeContent;
